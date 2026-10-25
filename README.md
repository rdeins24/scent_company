# Scentio Milano — scentiomilano.com

Site-ul Scentio Milano, distribuitor oficial Scent Company Milano în Republica Moldova:
marketing olfactiv și sisteme de difuzare a parfumului pentru hoteluri, clinici,
săli de fitness, showroom-uri auto, retail și birouri.

## Dezvoltare

```bash
npm install --legacy-peer-deps
npm run dev      # http://localhost:3000
npm run build    # build de producție + sitemap (next-sitemap)
```

Stack: Next.js 14 (pages router), Tailwind CSS, găzduit pe Vercel.

## Catalogul de echipamente

Datele produselor (`data/products.ts`), pozele (`public/assets/products/`) și catalogul PDF
public (`public/catalog-scentio-milano.pdf`) se generează din catalogul PDF sursă,
cu scripturile din `scripts/catalog/` (Python 3.10+).

```bash
# o singură dată
python -m venv scripts/catalog/.venv
scripts/catalog/.venv/Scripts/pip install -r scripts/catalog/requirements.txt   # Windows
# (macOS / Linux: scripts/catalog/.venv/bin/pip ...)

# 1. pune catalogul sursă (PDF) în folderul catalog/ (ignorat de git)
# 2. rulează, în ordine (cu python-ul din .venv):
python scripts/catalog/extract.py         # text + poze din PDF -> scripts/catalog/.work/
python scripts/catalog/build_products.py  # corecturi -> data/products.ts
python scripts/catalog/images.py          # decupare marcaj + WebP -> public/assets/products/
python scripts/catalog/make_catalog.py    # data/products.ts -> public/catalog-scentio-milano.pdf
```

- Corecturile de text, categoriile și excepțiile (de ex. AirZen) sunt în `build_products.py`;
  jurnalul ultimei rulări e în `scripts/catalog/.work/corrections.log`.
- Dacă modifici doar `data/products.ts` sau datele de contact din `lib/site.js`,
  rulează numai `make_catalog.py` ca PDF-ul să rămână sincronizat cu site-ul.
- Catalogul PDF public nu conține prețuri.
