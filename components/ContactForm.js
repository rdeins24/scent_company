import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { site } from "../lib/site";
import { getPreviousPath } from "../lib/navigation";

const inputClass =
  "w-full rounded-sm border border-line-dark/50 bg-cream px-4 py-3 text-[15px] text-ink placeholder-muted/70 transition-colors focus:border-ink focus:outline-none disabled:opacity-60";
const labelClass = "text-xs uppercase tracking-[0.12em] text-muted";

const emptyForm = { name: "", phone: "", email: "", product: "", message: "", website: "" };

// Formularul de contact: trimite cererea prin /api/contact (Resend) către info@scentiomilano.com.
// `?produs=<nume>` în URL precompletează produsul (din paginile de echipamente).
// `website` e un câmp-capcană (honeypot), ascuns vizitatorilor; dacă e completat, serverul ignoră cererea.
export default function ContactForm() {
  const { query, isReady } = useRouter();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorText, setErrorText] = useState("");
  const resultRef = useRef(null);

  useEffect(() => {
    if (isReady && typeof query.produs === "string") {
      setForm((f) => ({ ...f, product: query.produs }));
    }
  }, [isReady, query.produs]);

  useEffect(() => {
    if (status === "success" || status === "error") resultRef.current?.focus();
  }, [status]);

  const update = (field) => (event) => setForm((f) => ({ ...f, [field]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorText("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, page: getPreviousPath() || window.location.pathname + window.location.search }),
      });
      if (response.ok) {
        setStatus("success");
        return;
      }
      const data = await response.json().catch(() => ({}));
      setErrorText(response.status === 400 && data.error ? data.error : "");
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <section id="formular" className="scroll-mt-20 bg-cream-alt px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <h2 className="mb-4 font-serif text-3xl font-medium sm:text-4xl">
            {form.product ? "Solicitați o ofertă" : "Scrieți-ne"}
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-muted-strong">
            Vă răspundem în cel mai scurt timp, în zilele lucrătoare.
          </p>
        </div>

        {status === "success" ? (
          <div ref={resultRef} tabIndex={-1} role="status" className="border-y border-border py-12 focus:outline-none">
            <span aria-hidden className="mb-6 block h-px w-8 bg-coral" />
            <p className="font-serif text-3xl font-medium leading-snug sm:text-4xl">
              Vă mulțumim, vă contactăm în cel mai scurt timp.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-strong">
              Cererea dumneavoastră a ajuns la echipa Scentio Milano.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-6 sm:grid-cols-2" aria-busy={sending}>
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label>
                Website
                <input tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className={labelClass}>Nume *</span>
              <input
                required
                maxLength={100}
                disabled={sending}
                className={inputClass}
                value={form.name}
                onChange={update("name")}
                autoComplete="name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className={labelClass}>Telefon *</span>
              <input
                required
                type="tel"
                maxLength={30}
                disabled={sending}
                className={inputClass}
                value={form.phone}
                onChange={update("phone")}
                autoComplete="tel"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className={labelClass}>Email *</span>
              <input
                required
                type="email"
                maxLength={254}
                disabled={sending}
                className={inputClass}
                value={form.email}
                onChange={update("email")}
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className={labelClass}>Produs de interes</span>
              <input
                maxLength={120}
                disabled={sending}
                className={inputClass}
                value={form.product}
                onChange={update("product")}
                placeholder="Opțional"
              />
            </label>
            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className={labelClass}>Mesaj</span>
              <textarea
                rows={5}
                maxLength={3000}
                disabled={sending}
                className={inputClass}
                value={form.message}
                onChange={update("message")}
                placeholder="Tipul spațiului, suprafața aproximativă, ce vă doriți"
              />
            </label>

            {status === "error" && (
              <div
                ref={resultRef}
                tabIndex={-1}
                role="alert"
                className="border-l-2 border-error pl-4 text-[15px] leading-relaxed text-error focus:outline-none sm:col-span-2"
              >
                {errorText || "Mesajul nu a putut fi trimis."} Vă rugăm să încercați din nou sau să ne sunați la{" "}
                <a href={site.phoneHref} className="whitespace-nowrap font-medium underline underline-offset-2">
                  {site.phone}
                </a>
                .
              </div>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={sending}
                className="rounded-sm bg-ink px-8 py-[14px] text-sm font-medium tracking-[0.03em] text-cream transition-opacity hover:opacity-80 disabled:cursor-wait disabled:opacity-60"
              >
                {sending ? "Se trimite..." : "Trimiteți"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
