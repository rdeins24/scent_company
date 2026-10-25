"""Generează catalogul PDF public din data/products.ts (și datele de contact din lib/site.js), în stilul site-ului:
copertă, câte o pagină pe produs (poză + specificații), pagină de contact. Fără prețuri."""
import io
import json
import re
from datetime import date

import pymupdf as fitz
from PIL import Image

from paths import ROOT, PRODUCTS_TS, SITE_JS, CATALOG_PDF, FONTS

# ---------- date ----------
SPEC_LABELS = [("coverage", "Acoperire"), ("capacity", "Capacitate"), ("consumption", "Consum de parfum"),
               ("dimensions", "Dimensiuni"), ("power", "Alimentare"), ("control", "Control"), ("mounting", "Montaj")]


def load_products():
    """Citește lista de produse din data/products.ts (fișier generat, cu format previzibil)."""
    ts = PRODUCTS_TS.read_text(encoding="utf-8")
    images = dict(re.findall(r'import (\w+) from "\.\./public/(assets/products/[^"]+)";', ts))
    body = ts.split("export const products: Product[] = ")[1].split("];\n")[0] + "]"
    body = re.sub(r"\bsrc: (\w+)", lambda m: f'src: "{images[m.group(1)]}"', body)
    body = re.sub(r"(?<=[{,\n])(\s*)(\w+):", r'\1"\2":', body)
    body = re.sub(r",(\s*[}\]])", r"\1", body)
    return json.loads(body)


def load_site():
    js = SITE_JS.read_text(encoding="utf-8")
    get = lambda key: re.search(rf'{key}: "([^"]*)"', js).group(1)
    return {
        "name": get("name"), "tagline": get("tagline"), "email": get("email"), "phone": get("phone"),
        "instagram": get("instagram"), "street": get("street"), "city": get("city"), "country": get("country"),
        "hours": get("label"), "url": re.search(r'SITE_URL = "([^"]+)"', js).group(1),
    }


# ---------- stil ----------
W, H = fitz.paper_size("a4-l")
BG, PANEL, LINE = (0x0D / 255, 0x0E / 255, 0x11 / 255), (0x1A / 255, 0x1B / 255, 0x20 / 255), (0x33 / 255,) * 3
M = 48  # margine
CSS = """
@font-face { font-family: Inter; src: url(Inter-Regular.ttf); }
@font-face { font-family: Inter; src: url(Inter-SemiBold.ttf); font-weight: 600; }
@font-face { font-family: Inter; src: url(Inter-Bold.ttf); font-weight: bold; }
* { font-family: Inter; color: #a0a0a0; font-size: 10pt; line-height: 1.45; }
.eyebrow { font-size: 8pt; letter-spacing: 2pt; text-transform: uppercase; color: #a0a0a0; margin: 0 0 6pt 0; }
h1 { font-size: 26pt; font-weight: bold; color: #ffffff; line-height: 1.15; margin: 0 0 6pt 0; }
h2 { font-size: 12pt; font-weight: 600; color: #d0d0d0; margin: 14pt 0 6pt 0; }
.tagline { font-size: 12pt; color: #d0d0d0; margin: 0 0 8pt 0; }
.lead { font-size: 10.5pt; color: #b0b0b0; margin: 0 0 4pt 0; }
.spec { margin: 0; padding: 3pt 0; border-bottom: 0.5pt solid #333333; }
.spec b { color: #d0d0d0; font-weight: 600; }
ul { margin: 0; padding-left: 12pt; }
li { margin: 0 0 2pt 0; }
.big { font-size: 34pt; font-weight: bold; color: #ffffff; line-height: 1.1; }
.muted { color: #707070; font-size: 9pt; }
.contact p { font-size: 12pt; color: #d0d0d0; margin: 0 0 4pt 0; }
"""
ARCHIVE = fitz.Archive(str(FONTS))
esc = lambda s: s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def new_page(doc):
    page = doc.new_page(width=W, height=H)
    page.draw_rect(page.rect, color=None, fill=BG)
    return page


def html(page, rect, markup):
    spare, scale = page.insert_htmlbox(rect, markup, css=CSS, archive=ARCHIVE, scale_low=0.6)
    if spare < 0:
        raise SystemExit(f"Textul nu încape pe pagina {page.number + 1}")
    return scale


def image(page, rect, path, panel=True):
    if panel:
        page.draw_rect(rect, color=None, fill=PANEL)
    with Image.open(path) as im:
        buf = io.BytesIO()
        im.convert("RGB").save(buf, "JPEG", quality=85)
    page.insert_image(rect, stream=buf.getvalue(), keep_proportion=True)


def footer(page, site, number):
    page.draw_line((M, H - 34), (W - M, H - 34), color=LINE, width=0.5)
    html(page, fitz.Rect(M, H - 28, W - M - 40, H - 12),
         f'<p class="muted">{esc(site["name"])} · {esc(site["url"].replace("https://", ""))}</p>')
    html(page, fitz.Rect(W - M - 40, H - 28, W - M, H - 12), f'<p class="muted" style="text-align:right">{number}</p>')


# ---------- pagini ----------
def cover(doc, site, products):
    page = new_page(doc)
    featured = next((p for p in products if p["slug"] == "aeris-pro"), products[0])
    hero = ROOT / "public" / featured["images"][0]["src"]
    image(page, fitz.Rect(0, 0, W * 0.48, H), hero, panel=False)
    html(page, fitz.Rect(W * 0.53, H * 0.24, W - M, H - M), f"""
        <p class="eyebrow">{esc(site['name'])}</p>
        <p class="big">Catalog echipamente</p>
        <p class="tagline" style="margin-top:10pt">Difuzoare profesionale de parfum pentru afaceri,
        spații mari, casă și birou.</p>
        <p class="lead" style="margin-top:22pt">{esc(site['tagline'])}</p>
        <p class="muted" style="margin-top:28pt">{esc(site['url'].replace('https://', ''))} · {date.today().year}</p>
    """)


def product_page(doc, site, product, number):
    page = new_page(doc)
    img_rect = fitz.Rect(M, M, W * 0.47, H - 50)
    image(page, img_rect, ROOT / "public" / product["images"][0]["src"])
    rows = "".join(f'<p class="spec"><b>{label}:</b> {esc(product[key])}</p>'
                   for key, label in SPEC_LABELS if product.get(key))
    variants = [i["variant"] for i in product["images"] if i.get("variant")]
    features = "".join(f"<li>{esc(f)}</li>" for f in product["features"])
    categories = " · ".join([product["category"], *product.get("extraCategories", [])])
    html(page, fitz.Rect(W * 0.51, M, W - M, H - 50), f"""
        <p class="eyebrow">{esc(categories)}</p>
        <h1>{esc(product['name'])}</h1>
        {f'<p class="tagline">{esc(product["tagline"])}</p>' if product.get("tagline") else ''}
        <p class="lead">{esc(product['shortDescription'])}</p>
        <h2>Specificații</h2>{rows}
        {f'<h2>Caracteristici</h2><ul>{features}</ul>' if features else ''}
        {f'<p class="muted" style="margin-top:8pt">Variante: {esc(" / ".join(variants))}</p>' if len(variants) > 1 else ''}
    """)
    footer(page, site, number)


def contact_page(doc, site, number):
    page = new_page(doc)
    html(page, fitz.Rect(M, H * 0.18, W * 0.55, H - 60), f"""
        <p class="eyebrow">Contact</p>
        <p class="big">Consultație gratuită</p>
        <p class="lead" style="margin-top:10pt">Venim la tine, testăm parfumul în spațiul tău și îți propunem
        echipamentul potrivit. Consultanța, instalarea și întreținerea sunt incluse.</p>
        <div class="contact" style="margin-top:22pt">
          <p>{esc(site['street'])}, {esc(site['city'])}, {esc(site['country'])}</p>
          <p>Telefon: {esc(site['phone'])}</p>
          <p>Email: {esc(site['email'])}</p>
          <p>Program: {esc(site['hours'])}</p>
          <p>{esc(site['url'].replace('https://', ''))} · instagram.com/{esc(site['instagram'].rstrip('/').split('/')[-1])}</p>
        </div>
    """)
    footer(page, site, number)


def main():
    products, site = load_products(), load_site()
    order = ["Spații mari", "Afaceri", "Casă și birou"]
    products.sort(key=lambda p: (order.index(p["category"]), -p["coverageM2Max"]))
    doc = fitz.open()
    cover(doc, site, products)
    for number, product in enumerate(products, start=2):
        product_page(doc, site, product, number)
    contact_page(doc, site, len(products) + 2)
    doc.set_metadata({"title": f"Catalog echipamente – {site['name']}", "author": site["name"],
                      "subject": "Difuzoare profesionale de parfum"})
    doc.save(CATALOG_PDF, garbage=4, deflate=True, clean=True)
    print(f"{CATALOG_PDF.name}: {doc.page_count} pagini, {CATALOG_PDF.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
