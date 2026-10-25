"""Extrage din catalogul PDF: textul brut (titlu, descriere, specificații, caracteristici) și pozele produselor."""
import json, re
import pymupdf as fitz
from paths import RAW_JSON, RAW_IMAGES, source_pdf

RAW_IMAGES.mkdir(parents=True, exist_ok=True)
SRC, OUT_JSON, OUT_IMG = source_pdf(), RAW_JSON, RAW_IMAGES
doc = fitz.open(SRC)
SECTIONS = {"Produse pentru Afaceri": "Afaceri", "Produse pentru Casă": "Casă și birou", "Produse pentru Spații Mari": "Spații mari"}
SKIP = re.compile(r"^(DETALII|CARACTERISTICI PRINCIPALE|NOTE|PRODUCT DETAILS|\d+$|€)")
pages, section = [], None

for i, page in enumerate(doc, start=1):
    text = page.get_text()
    sec = next((v for k, v in SECTIONS.items() if k in text), None)
    if sec:
        section = sec
        continue
    if "€" not in text and "Specifica" not in text.replace(" ", ""):
        continue  # copertă / pagina de contact
    lines = []
    for block in page.get_text("dict")["blocks"]:
        for line in block.get("lines", []):
            t = "".join(s["text"] for s in line["spans"]).strip()
            if t:
                lines.append({"t": t, "size": max(s["size"] for s in line["spans"]), "x": line["bbox"][0], "y": line["bbox"][1]})
    big = max(l["size"] for l in lines)
    title = " ".join(l["t"] for l in sorted([l for l in lines if l["size"] > big - 1], key=lambda l: l["y"]))
    body = [l for l in lines if l["size"] <= big - 1 and not SKIP.match(l["t"])]
    from collections import Counter
    body_size = Counter(round(l["size"], 1) for l in body).most_common(1)[0][0]
    tagline = " ".join(l["t"] for l in sorted(body, key=lambda l: l["y"]) if l["size"] > body_size + 0.5)
    body = [l for l in body if l["size"] <= body_size + 0.5]
    specs, features, desc, in_feat = [], [], [], False
    spec_ys = [l["y"] for l in body if ":" in l["t"] and len(l["t"].split(":")[0]) < 45]
    first_spec_y = min(spec_ys) if spec_ys else 1e9
    for l in sorted(body, key=lambda l: (l["y"], l["x"])):
        t = l["t"]
        compact = t.replace(" ", "").lower()
        if compact in ("caracteristici", "specificații"):
            in_feat = compact == "caracteristici"
            continue
        if ":" in t and len(t.split(":")[0]) < 45:
            specs.append(t); in_feat = False
        elif in_feat:
            features.append(t)
        elif l["y"] < first_spec_y:
            desc.append(t)
    imgs = [x for x in page.get_image_info(xrefs=True) if x["height"] > 100 and x["width"] < 3000]
    files = []
    for x in imgs:
        pix = fitz.Pixmap(doc, x["xref"])
        if pix.n - pix.alpha > 3:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        name = f"{OUT_IMG}/p{i:02d}.png"
        pix.save(name); files.append(name)
    pages.append({"page": i, "section": section, "title": title, "tagline": tagline, "description": " ".join(desc),
                  "fulltext": page.get_text(sort=True),
                  "specs": specs, "features": features, "images": files})

json.dump(pages, open(OUT_JSON, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"{SRC.name}: {len(pages)} pagini de produs -> {OUT_JSON}")
