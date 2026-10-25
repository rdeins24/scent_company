import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { site } from "../../lib/site";
import { getSegments } from "../../lib/content";
import { products } from "../../data/products";

// Trimite cererile din formularul de contact (components/ContactForm.js) către info@scentiomilano.com prin Resend.
// Cheia vine din variabila de mediu RESEND_API_KEY (.env.local local, Environment Variables pe Vercel).

export const config = { api: { bodyParser: { sizeLimit: "20kb" } } };

// scentiomilano.com e verificat în Resend; expeditorul trebuie să rămână pe acest domeniu.
const FROM = "Scentio Milano <site@scentiomilano.com>";
const TO = site.email;

const LIMITS = { name: 100, phone: 30, email: 254, product: 120, message: 3000, page: 300 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s().-]{5,}$/;

// Limită simplă de trimiteri pe IP, în memoria procesului (pe Vercel e per instanță, suficient ca frână anti-spam).
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
};

const clientIp = (req: NextApiRequest) => {
  const forwarded = req.headers["x-forwarded-for"];
  const first = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(",")[0]?.trim();
  return first || req.socket.remoteAddress || "necunoscut";
};

const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Produsul sau segmentul paginii de proveniență: /echipamente/<slug> sau /aromatizare-<segment>.
const topicFromPage = (page: string) => {
  const path = page.split(/[?#]/)[0].replace(/^\/(ro|ru)(?=\/|$)/, "");
  const productSlug = path.match(/^\/echipamente\/([^/]+)/)?.[1];
  if (productSlug) return products.find((p) => p.slug === productSlug)?.name || "";
  const segment = getSegments().find((s) => path === `/${s.slug}`);
  return segment?.navLabel || "";
};

const chisinauTime = () =>
  new Intl.DateTimeFormat("ro-RO", {
    timeZone: "Europe/Chisinau",
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date());

type Fields = { name: string; phone: string; email: string; product: string; message: string; page: string };

const validate = (f: Fields) => {
  if (!f.name || !f.phone || !f.email) return "Completați numele, telefonul și emailul.";
  if (!EMAIL_RE.test(f.email)) return "Adresa de email nu pare validă.";
  if (!PHONE_RE.test(f.phone)) return "Numărul de telefon nu pare valid.";
  for (const [key, max] of Object.entries(LIMITS)) {
    if (f[key as keyof Fields].length > max) return "Unul dintre câmpuri este prea lung.";
  }
  return null;
};

const buildHtml = (f: Fields, topic: string, date: string) => {
  const rows: [string, string][] = [
    ["Nume", f.name],
    ["Telefon", f.phone],
    ["Email", f.email],
    ["Produs / domeniu", topic],
    ["Pagina de proveniență", f.page],
    ["Data și ora (Chișinău)", date],
  ];
  const rowHtml = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `<tr>
        <td style="padding:10px 16px 10px 0;border-bottom:1px solid #e2d8c8;color:#6e665a;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td>
        <td style="padding:10px 0;border-bottom:1px solid #e2d8c8;color:#211d18;font-size:15px">${escapeHtml(value)}</td>
      </tr>`
    )
    .join("");
  const message = f.message
    ? `<h2 style="margin:32px 0 8px;font:500 18px Georgia,serif;color:#211d18">Mesaj</h2>
       <p style="margin:0;color:#211d18;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(f.message)}</p>`
    : "";

  return `<!doctype html><html lang="ro"><body style="margin:0;background:#f4eee6;font-family:Helvetica,Arial,sans-serif">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#6e665a">Scentio Milano</p>
    <h1 style="margin:0 0 24px;font:500 26px Georgia,serif;color:#211d18">Cerere nouă de pe site</h1>
    <table style="width:100%;border-collapse:collapse;border-top:1px solid #e2d8c8">${rowHtml}</table>
    ${message}
    <p style="margin:32px 0 0;font-size:13px;color:#6e665a">Răspundeți direct la acest email pentru a-i scrie vizitatorului.</p>
  </div></body></html>`;
};

const buildText = (f: Fields, topic: string, date: string) =>
  [
    `Nume: ${f.name}`,
    `Telefon: ${f.phone}`,
    `Email: ${f.email}`,
    topic && `Produs / domeniu: ${topic}`,
    f.page && `Pagina de proveniență: ${f.page}`,
    `Data și ora (Chișinău): ${date}`,
    f.message && `\nMesaj:\n${f.message}`,
  ]
    .filter(Boolean)
    .join("\n");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Metodă nepermisă." });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};

  // Honeypot: câmpul ascuns e completat doar de roboți. Răspundem „succes” fără să trimitem nimic.
  if (clean(body.website)) return res.status(200).json({ ok: true });

  if (isRateLimited(clientIp(req))) {
    return res.status(429).json({ error: "Prea multe cereri într-un timp scurt. Încercați din nou mai târziu." });
  }

  const fields: Fields = {
    name: clean(body.name),
    phone: clean(body.phone),
    email: clean(body.email),
    product: clean(body.product),
    message: clean(body.message),
    page: clean(body.page),
  };
  const error = validate(fields);
  if (error) return res.status(400).json({ error });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY lipsește");
    return res.status(500).json({ error: "Serviciul de email nu este configurat." });
  }

  const topic = fields.product || topicFromPage(fields.page);
  const date = chisinauTime();
  const subject = ["Cerere nouă de pe site", fields.name, topic].filter(Boolean).join(" — ");

  try {
    const { error: sendError } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: TO,
      replyTo: fields.email,
      subject,
      html: buildHtml(fields, topic, date),
      text: buildText(fields, topic, date),
    });
    if (sendError) {
      console.error("[contact] Resend:", sendError.name, sendError.message);
      return res.status(502).json({ error: "Mesajul nu a putut fi trimis." });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] Eroare la trimitere:", err instanceof Error ? err.message : err);
    return res.status(502).json({ error: "Mesajul nu a putut fi trimis." });
  }
}
