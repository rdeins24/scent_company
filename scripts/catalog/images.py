"""Pozele produselor: decupează discret colțul cu steluța (marcaj de imagine generată) și salvează WebP ≤1600px."""
import json
from PIL import Image
from paths import MANIFEST, RAW_IMAGES, PRODUCT_IMAGES

MAX_SIZE = 1600
# pagina din PDF -> (latura tăiată, fracția păstrată). Verificat vizual: produsul rămâne întreg.
# Paginile 11 (Aeris One alb) și 12 (Aeris Oasis Hex) nu au marcaj.
CROP = {
    3: ("right", 0.845), 4: ("right", 0.845), 5: ("right", 0.85), 6: ("right", 0.905),
    7: ("right", 0.93), 8: ("right", 0.93), 9: ("right", 0.87), 10: ("right", 0.905),
    14: ("right", 0.905), 15: ("right", 0.905), 17: ("bottom", 0.9), 18: ("right", 0.905),
}

PRODUCT_IMAGES.mkdir(parents=True, exist_ok=True)
for item in json.load(open(MANIFEST)):
    page, file = item["page"], item["file"]
    image = Image.open(RAW_IMAGES / f"p{page:02d}.png").convert("RGB")
    width, height = image.size
    if page in CROP:
        side, keep = CROP[page]
        box = (0, 0, round(width * keep), height) if side == "right" else (0, 0, width, round(height * keep))
        image = image.crop(box)
    image.thumbnail((MAX_SIZE, MAX_SIZE), Image.LANCZOS)
    out = PRODUCT_IMAGES / file
    image.save(out, "WEBP", quality=82, method=6)
    print(f"{file}: {image.width}x{image.height}, {out.stat().st_size // 1024} KB")
