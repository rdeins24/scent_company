"""Căi comune pentru scripturile de catalog."""
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
WORK = HERE / ".work"  # fișiere intermediare (ignorate de git)
RAW_JSON = WORK / "raw.json"
RAW_IMAGES = WORK / "img"
MANIFEST = WORK / "manifest.json"
CORRECTIONS_LOG = WORK / "corrections.log"
PRODUCTS_TS = ROOT / "data" / "products.ts"
SITE_JS = ROOT / "lib" / "site.js"
PRODUCT_IMAGES = ROOT / "public" / "assets" / "products"
CATALOG_PDF = ROOT / "public" / "catalog-scentio-milano.pdf"
FONTS = HERE / "fonts"


def source_pdf():
    """Catalogul sursă: primul PDF din folderul catalog/ (ignorat de git)."""
    pdfs = sorted((ROOT / "catalog").glob("*.pdf"))
    if not pdfs:
        raise SystemExit("Nu am găsit niciun PDF în catalog/. Pune catalogul sursă acolo.")
    return pdfs[0]
