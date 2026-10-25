"""Construiește data/products.ts din raw.json (extras din PDF), aplicând corecturile și regulile de mai jos.
Fiecare corectură aplicată este scrisă în corrections.log."""
import json, re
from collections import Counter
from paths import RAW_JSON, PRODUCTS_TS, MANIFEST, CORRECTIONS_LOG

RAW, OUT_TS, OUT_MANIFEST, LOG = RAW_JSON, PRODUCTS_TS, MANIFEST, CORRECTIONS_LOG
pages = {p["page"]: p for p in json.load(open(RAW, encoding="utf-8"))}
log = Counter()

# ---------- 1. Corecturi de text (cuvinte lipite, diacritice, traduceri) ----------
TEXT_FIXES = [
    ("twin-fluid,aromă", "twin-fluid, aromă"), ("fărăreziduuri", "fără reziduuri"),
    ("oferăautonomielungă", "oferă autonomie lungă"), ("iarventilatorulintegratacoperă", "iar ventilatorul integrat acoperă"),
    ("peretesaupodea", "perete sau podea"), ("discret,ideal", "discret, ideal"), ("medii.Se", "medii. Se"),
    ("spatii pânăla", "spații până la"), ("pânăla", "până la"), ("orice spatiu", "orice spațiu"),
    ("Precis.Elegant.", "Precis. Elegant."), ("AerisOasis", "Aeris Oasis"), ("undifuzor", "un difuzor"),
    ("inteligent,ultra-silențios,conceputpentruparfumare", "inteligent, ultra-silențios, conceput pentru parfumare"),
    ("design luxos .", "design luxos."), ("pina ", "până la "), ("Stainless iron", "oțel inoxidabil"),
    ("Twin-fluid nebulization", "nebulizare twin-fluid"), ("Twin-Fluid Nebulization", "nebulizare twin-fluid"),
    ("tehnologie Twin-Fluid", "tehnologie twin-fluid"), ("WiFi backend", "Wi-Fi"), ("WiFi", "Wi-Fi"),
    ("Touch screen", "ecran tactil"), ("touch screen", "ecran tactil"), ("low noise", "nivel redus de zgomot"),
    ("Programare timp", "Programare orară"), ("programare timp", "programare orară"),
    ("Super silențios", "Funcționare super silențioasă"), ("Plastic anti-zgârieturi", "Plastic rezistent la zgârieturi"),
    ("conectat la ventilare", "conectat la ventilație"), ("Design vertical (cuboid)", "Design vertical, paralelipipedic"),
    (" (menționat la “autonomy”)", ""), ("Hex–", "Hex –"), ("( ", "("),
]


REGEX_FIXES = [(r"(\d) ³ m\b", r"\1 m³", "exponent despărțit: „500 ³ m” → „500 m³”"),
               (r"\b1000 ml\b", "1.000 ml", "„1000 ml” → „1.000 ml”"),
               (r"\b2\.5 L\b", "2,5 l", "„2.5 L” → „2,5 l”")]


def fix(text):
    for pattern, repl, label in REGEX_FIXES:
        text, n = re.subn(pattern, repl, text)
        if n:
            log[label] += n
    for wrong, right in TEXT_FIXES:
        if wrong in text:
            log[f"„{wrong}” → „{right}”"] += text.count(wrong)
            text = text.replace(wrong, right)
    return re.sub(r"\s+", " ", text).strip()


def ro_number(text):
    """0.25 -> 0,25 ; 2700 -> 2.700 ; 12V -> 12 V ; fără ft³"""
    before = text
    text = re.sub(r"(\d)\.(\d)", r"\1,\2", text)
    text = re.sub(r"\b(\d)(\d{3})\b", r"\1.\2", text)
    text = re.sub(r"(\d)(V|W|Hz|ml|m²|m³)(?!\w)", r"\1 \2", text)
    text = re.sub(r"\s*/\s*[\d.,]+ ft³", "", text)
    if text != before:
        log["format numeric românesc (virgulă zecimală, punct la mii, spațiu înainte de unitate, fără ft³)"] += 1
    return text


# ---------- 2. Specificațiile, citite din textul paginii în ordinea de citire ----------
LABELS = ["Dimensiuni compacte", "Dimensiuni", "Material", "Alimentare", "Capacitate refill", "Capacitate", "Consum",
          "Acoperire recomandată", r"Acoperire \(menționată în specificații\)", "Acoperire", "Suprafață recomandată",
          "Tehnologie", "Control", "Culori", "Montaj", "Greutate", "Tensiune", "Frecvență", "Putere", "Funcții",
          "Programare", "Nivel zgomot", "Monitorizare", "Autonomie", "Bottle"]
LABEL_RE = re.compile(r"(?<![\w(])(" + "|".join(LABELS) + r"):")
STOP_RE = r"Ca ra cteri|DETALII|CARACTERISTICI|NOTE IMPORTANTE|PRODUCT DETAILS"
EXTRAS_RE = r"Made in EU|Capac personalizabil \(min\. 20 buc\.\)"


def specs_of(page):
    text = re.sub(r"€\s*\d+", " ", re.sub(r"\s+", " ", pages[page]["fulltext"]))
    first = LABEL_RE.search(text)
    text = re.split(STOP_RE, text[first.start():])[0]
    found = list(LABEL_RE.finditer(text))
    specs = {}
    for m, nxt in zip(found, found[1:] + [None]):
        label = m.group(1).replace("\\", "")
        specs[label] = fix(text[m.end(): nxt.start() if nxt else len(text)])
    extras = re.findall(EXTRAS_RE, text)
    specs = {k: re.sub(r"\s+", " ", re.sub(EXTRAS_RE, "", v)).strip() for k, v in specs.items()}
    return specs, extras


def features_of(page):
    return [fix(f) for f in pages[page]["features"] if f.lower() != "control bluetooth"]


def description_of(page, drop_prefix=""):
    d = fix(re.sub(EXTRAS_RE, "", pages[page]["description"]))
    if drop_prefix and d.startswith(drop_prefix):
        d = d[len(drop_prefix):].strip()
    return d


def mount_from_text(text):
    t = text.lower()
    places = [w for w, k in [("perete", "perete"), ("podea", "podea"), ("sistemul HVAC", "hvac")] if k in t]
    if not places:
        return None
    return places[0] if len(places) == 1 else ", ".join(places[:-1]) + " sau " + places[-1]


def cap(s):
    s = s.strip()
    return s[0].upper() + s[1:] if s else s


# ---------- 3. Produsele: grupare, deduplicare, categorii, excepții ----------
def build(slug, name, category, images, *, desc_page, tagline="", drop_prefix="", overrides=None, seo_type="Difuzor de parfum"):
    specs, extras = specs_of(desc_page)
    desc = description_of(desc_page, drop_prefix)
    p = {
        "slug": slug, "name": name, "category": category, "tagline": fix(tagline) if tagline else "",
        "shortDescription": desc,
        "coverage": ro_number(specs.get("Acoperire recomandată") or specs.get("Acoperire") or specs.get("Suprafață recomandată") or ""),
        "capacity": ro_number(specs.get("Capacitate refill") or specs.get("Capacitate") or specs.get("Bottle", "")),
        "consumption": ro_number(specs["Consum"]) if "g/h" in specs.get("Consum", "") else "",
        "dimensions": ro_number(specs.get("Dimensiuni") or specs.get("Dimensiuni compacte") or ""),
        "power": ro_number(", ".join(x.rstrip(",") for x in [
            specs.get("Alimentare"), specs.get("Putere"),
            ", ".join(filter(None, [specs.get("Tensiune"), specs.get("Frecvență")])),
            specs.get("Consum") if specs.get("Consum", "").endswith("W") else None] if x)),
        "control": specs.get("Control") or ("Bluetooth" if "Bluetooth" in desc else ""),
        "mounting": (specs.get("Montaj") or mount_from_text(desc) or "").replace(" / ", ", "),
        "seoType": seo_type,
    }
    feats = [cap(specs["Tehnologie"])] if "Tehnologie" in specs else []
    feats += features_of(desc_page)
    for k, label in [("Material", "Material"), ("Funcții", None), ("Programare", "Programare"), ("Nivel zgomot", "Nivel de zgomot"),
                     ("Monitorizare", "Monitorizare"), ("Autonomie", "Autonomie"), ("Greutate", "Greutate"), ("Culori", "Culori")]:
        if k in specs:
            v = ro_number(specs[k])
            if k == "Material":
                v = v.replace(" + ", ", ").lower()
            feats += [cap(s) for s in v.split(",")] if label is None else [f"{label}: {v}"]
    feats += [fix(e) for e in extras]
    p["features"] = list(dict.fromkeys(feats))
    p["images"] = [{"page": pg, "file": f, "variant": v, "alt": a} for pg, f, v, a in images]
    for k, v in (overrides or {}).items():
        log[f"{name}: câmpul „{k}” stabilit manual (vezi raport)"] += 1
        p[k] = v
    return p


# Categoriile sunt stabilite după acoperire (decizia clientului), nu după secțiunile din PDF:
# Spații mari = peste 500 m²; Afaceri = spații mici și medii; Casă și birou = Aeris Mini.
products = [
    build("aeris-pro", "Aeris Pro", "Spații mari", [
        (3, "aeris-pro-difuzor-parfum-comercial-grafit.webp", "Grafit", "Difuzor de parfum Aeris Pro, finisaj grafit, turn vertical lângă un perete din lemn"),
        (4, "aeris-pro-difuzor-parfum-comercial-bronz.webp", "Bronz", "Difuzor de parfum Aeris Pro, finisaj bronz, turn vertical lângă un perete din lemn")],
        desc_page=4, seo_type="Difuzor de parfum comercial"),
    build("airzen", "AirZen", "Spații mari", [
        (5, "airzen-difuzor-parfum-podea-spatii-mari.webp", "", "Difuzor de parfum AirZen, turn alb de podea cu finisaj textil")],
        desc_page=5, seo_type="Difuzor de parfum de podea", overrides={
            "shortDescription": "Difuzor de podea, tip turn, conceput pentru spații comerciale și publice mari. Rezervorul de 900 ml și acoperirea largă mențin parfumul constant în încăperi mari, cu întreținere minimă.",
            "coverage": "750–1.000 m², în funcție de model (S / M / L)", "capacity": "900 ml", "mounting": "de sine stătător, pe podea",
            "control": "buton rotativ, 3 niveluri de intensitate, 4 opțiuni de temporizare",
            "features": ["Design anti-vărsare", "Finisaj decorativ din material textil", "Lumină ambientală caldă",
                         "Semnal sonor de notificare", "Înlocuire ușoară a flaconului", "Funcționare silențioasă"],
            "consumption": "", "dimensions": "", "power": ""}),
    build("aeris-max", "Aeris Max", "Spații mari", [
        (6, "aeris-max-difuzor-parfum-spatii-mari.webp", "", "Difuzor de parfum Aeris Max, alb, așezat pe un blat de marmură într-un living modern")],
        desc_page=6, tagline=pages[6]["tagline"], seo_type="Difuzor de parfum pentru spații mari"),
    build("enjoy-mood-3", "Enjoy Mood 3.0", "Afaceri", [
        (7, "enjoy-mood-3-difuzor-parfum-profesional-negru.webp", "Negru", "Difuzor de parfum Enjoy Mood 3.0 negru, cu emblemă hexagonală aurie"),
        (8, "enjoy-mood-3-difuzor-parfum-profesional-alb.webp", "Alb", "Difuzor de parfum Enjoy Mood 3.0 alb, cu emblemă hexagonală aurie")],
        desc_page=7, seo_type="Difuzor de parfum profesional"),
    build("enjoy-mood-2", "Enjoy Mood 2.0", "Afaceri", [
        (9, "enjoy-mood-2-difuzor-parfum-compact.webp", "", "Difuzor de parfum Enjoy Mood 2.0, alb, pe un blat de piatră")],
        desc_page=9, tagline=pages[9]["tagline"], seo_type="Difuzor de parfum compact",
        overrides={"dimensions": ""}),
    build("aeris-prime", "Aeris Prime", "Afaceri", [
        (10, "aeris-prime-difuzor-parfum-hvac.webp", "", "Difuzor de parfum Aeris Prime, carcasă neagră din metal, pe o masă din lemn")],
        desc_page=18, tagline=pages[18]["tagline"], seo_type="Difuzor de parfum HVAC"),
    build("aeris-one", "Aeris One", "Afaceri", [
        (11, "aeris-one-difuzor-parfum-perete-alb.webp", "Alb", "Difuzor de parfum de perete Aeris One, varianta albă"),
        (14, "aeris-one-difuzor-parfum-perete-negru.webp", "Negru", "Difuzor de parfum de perete Aeris One, varianta neagră")],
        desc_page=11, seo_type="Difuzor de parfum de perete", overrides={"extraCategories": ["Casă și birou"]}),
    build("aeris-oasis-hex", "Aeris Oasis Hex", "Afaceri", [
        (12, "aeris-oasis-hex-difuzor-parfum-inteligent.webp", "", "Difuzor de parfum Aeris Oasis Hex, hexagonal negru cu auriu, montat pe perete")],
        desc_page=12, tagline="Compact. Precis. Elegant.", drop_prefix="Compact. Precis. Elegant.", seo_type="Difuzor de parfum inteligent",
        overrides={"coverage": "până la 150 m²"}),
    build("aeris-mini", "Aeris Mini", "Casă și birou", [
        (15, "aeris-mini-difuzor-parfum-birou-casa.webp", "", "Difuzor de parfum Aeris Mini, cilindru negru cu inel de lumină albastră, pe o masă")],
        desc_page=15, tagline=pages[15]["tagline"], seo_type="Difuzor de parfum pentru birou și casă",
        overrides={"mounting": "portabil (pe baterie sau USB-C)"}),
    build("aeris-ultra", "Aeris Ultra", "Spații mari", [
        (17, "aeris-ultra-sistem-parfumare-hvac.webp", "", "Sistem de parfumare HVAC Aeris Ultra, cu două rezervoare albe de 2,5 litri")],
        desc_page=17, tagline=pages[17]["tagline"], seo_type="Sistem de parfumare HVAC",
        overrides={"mounting": "integrare în sistemul HVAC"}),
]
log["Aeris Prime: pagina 10 eliminată (duplicat identic al paginii 18)"] += 1
log["Aeris One + Aeris One Black (paginile 11 și 14): un singur produs, 2 variante de culoare"] += 1
log["Aeris Pro: paginile 3 și 4 unite; textul din pagina 4 (corect), pozele diferă (grafit / bronz)"] += 1
log["Enjoy Mood 3.0: paginile 7 și 8 unite (negru / alb)"] += 1
log["Categorii stabilite după acoperire: Aeris Pro și Aeris Max -> Spații mari; Aeris Prime -> Afaceri"] += 1


def coverage_m2(c):
    """Acoperirea maximă în m²; pentru m³ se folosește o înălțime de referință de 3 m."""
    num = lambda s: float(s.replace(".", "").replace(",", "."))
    m2 = re.findall(r"(\d[\d.,]*)\s*m²", c) or re.findall(r"–(\d[\d.,]*)\s*m²", c)
    if "m²" in c:
        nums = [num(n) for n in re.findall(r"\d[\d.,]*\d|\d", c.split("m²")[0])]
        return int(max(nums))
    m3 = re.findall(r"(\d[\d.,]*)\s*m³", c)
    return int(max(num(n) for n in m3) / 3) if m3 else 0


for p in products:
    p["coverageM2Max"] = coverage_m2(p["coverage"])
    if "m³" in p["coverage"] and "m²" not in p["coverage"]:
        p["coverage"] += f" (≈{p['coverageM2Max']} m² la 3 m înălțime)"
        log[f"{p['name']}: acoperire în m³ afișată și în m² (la 3 m înălțime)"] += 1
    title = f"{p['name']} – {p['seoType']} | Scentio Milano"
    if len(title) > 60:
        title = f"{p['name']} – Difuzor de parfum | Scentio Milano"
    tail = " Instalare, parfumuri și întreținere în Moldova, de la Scentio Milano."
    desc = f"{p['name']}: {p['seoType'][0].lower() + p['seoType'][1:]}, acoperire {p['coverage']}.{tail}"
    if len(desc) > 155:
        desc = f"{p['name']}: {p['seoType'][0].lower() + p['seoType'][1:]}, acoperire {p['coverage']}. Instalare și întreținere în Moldova."
    if len(desc) > 155:
        desc = f"{p['name']}: {p['seoType'][0].lower() + p['seoType'][1:]}. Instalare și întreținere în Moldova."
    p["seo"] = {"title": title, "description": desc}
    del p["seoType"]


# ---------- 4. Scriere data/products.ts ----------
def var(file):
    base = file.replace(".webp", "").replace("-3-", "-three-").replace("-2-", "-two-")
    return re.sub(r"-(\w)", lambda m: m.group(1).upper(), base) + "Img"


imports, manifest = [], []
for p in products:
    for im in p["images"]:
        im["var"] = var(im["file"])
        imports.append(f'import {im["var"]} from "../public/assets/products/{im["file"]}";')
        manifest.append({"page": im["page"], "file": im["file"]})

J = lambda v: json.dumps(v, ensure_ascii=False)
FIELDS = ["coverage", "capacity", "consumption", "dimensions", "power", "control", "mounting"]
out = ["// GENERAT AUTOMAT din catalogul PDF (catalog/) — nu edita manual: rulează din nou scriptul de extragere.",
       "// Corecturile aplicate la extragere sunt documentate în raportul de extragere.",
       'import type { StaticImageData } from "next/image";', *imports, "",
       'export const productCategories = ["Afaceri", "Spații mari", "Casă și birou"] as const;',
       "export type ProductCategory = (typeof productCategories)[number];", "",
       "export interface ProductImage {", "  src: StaticImageData;", "  alt: string;", "  variant?: string;", "}", "",
       "export interface Product {", "  slug: string;", "  name: string;", "  category: ProductCategory;", "  tagline?: string;",
       "  /** categorii suplimentare în care apare produsul (ex. Aeris One și la Casă și birou) */",
       "  extraCategories?: ProductCategory[];", "  shortDescription: string;", *[f"  {f}?: string;" for f in FIELDS],
       "  /** acoperirea maximă în m² (m³ convertiți la 3 m înălțime), folosită pentru recomandări */",
       "  coverageM2Max: number;", "  features: string[];", "  images: ProductImage[];",
       "  seo: { title: string; description: string };", "}", "", "export const products: Product[] = ["]
for p in products:
    out.append("  {")
    for k in ["slug", "name", "category", "tagline", "shortDescription", *FIELDS]:
        if p.get(k):
            out.append(f"    {k}: {J(p[k])},")
    if p.get("extraCategories"):
        out.append(f"    extraCategories: {J(p['extraCategories'])},")
    out.append(f"    coverageM2Max: {p['coverageM2Max']},")
    out.append("    features: [\n" + "".join(f"      {J(f)},\n" for f in p["features"]) + "    ],")
    out.append("    images: [\n" + "".join(
        f'      {{ src: {im["var"]}, alt: {J(im["alt"])}' + (f', variant: {J(im["variant"])}' if im["variant"] else "") + " },\n"
        for im in p["images"]) + "    ],")
    out.append(f"    seo: {{ title: {J(p['seo']['title'])}, description: {J(p['seo']['description'])} }},")
    out.append("  },")
out += ["];", "", "export const getProduct = (slug: string) => products.find((p) => p.slug === slug);", ""]
open(OUT_TS, "w", encoding="utf-8", newline="\n").write("\n".join(out))
OUT_MANIFEST.parent.mkdir(parents=True, exist_ok=True)
json.dump(manifest, open(OUT_MANIFEST, "w"), indent=1)
open(LOG, "w", encoding="utf-8").write("\n".join(f"{n}× {k}" for k, n in log.items()))
print(f"{len(products)} produse, {len(manifest)} imagini -> {OUT_TS}")
