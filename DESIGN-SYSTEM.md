# Sistemul de design — Scentio Milano

Limbajul vizual e preluat de la Doré Scent (doar designul, nu conținutul) și adaptat la stack-ul
nostru: Next.js 14 Pages Router + Tailwind 3. Tokenii sunt în `tailwind.config.js`, regulile globale
în `styles/globals.css`, componentele de bază în `components/ui/`.

## 1. Culori

| Token Tailwind | Hex | Folosire |
|---|---|---|
| `cream` | `#f4eee6` | fundalul principal, text pe secțiuni închise |
| `cream-alt` | `#eae2d6` | secțiuni alternante, banda rulantă |
| `cream-muted` | `#c9c0b3` | text secundar pe fundal închis |
| `ink` | `#211d18` | text principal, secțiuni închise, butonul principal |
| `ink-soft` / `ink-soft-2` | `#33291f` / `#2a231a` | nuanțe închise auxiliare |
| `border` | `#e2d8c8` | linii și separatoare pe fundal deschis |
| `muted` | `#6e665a` | etichete, numere de pas, metadate |
| `muted-strong` | `#5c534a` | paragrafe pe fundal deschis |
| `line-dark` | `#8d857b` | linii pe fundal închis (cu opacitate 30–40%) |
| `error` | `#a13b2a` | mesaje de eroare în formulare |
| **`coral`** | **`#f97e76`** | **accentul Scentio** (culoarea „MILANO” din logo) |

**Reguli pentru coral** (decizia de brand): doar accent discret — punctul din logo, sublinierea
link-urilor la hover și la pagina activă din meniu, liniuțele scurte de deasupra reperelor, separatorul
din metadatele articolelor, iconița Instagram la hover. **Niciodată** pe butoane, suprafețe mari sau text
lung (contrast insuficient pe cream: ~2,3:1).

Accentul Doré nu e o culoare, ci contextual: pe fundal închis accentul e `cream`, pe fundal deschis e `ink`.

## 2. Fonturi

- **Titluri:** Newsreader (serif), greutăți 400/500/600 + italic — clasa `font-serif`.
- **Text:** Work Sans, greutăți 300–600 — clasa `font-sans` (implicit).
- Încărcate cu `next/font/google` în `pages/_app.tsx`, subseturile **`latin` + `latin-ext`** (ș, ț, ă, â, î).
- **Rusă (viitor):** Newsreader și Work Sans nu au chirilică. La adăugarea versiunii `ru`, se încarcă
  **PT Serif** și **PT Sans** (subset `cyrillic`) și se adaugă în stivele `serif` / `sans` din
  `tailwind.config.js`, după fonturile actuale.

## 3. Scara tipografică

| Rol | Clase |
|---|---|
| H1 hero | `font-serif font-medium text-[2.4rem] sm:text-6xl xl:text-[4.6rem] leading-[1.06] tracking-[-0.01em]` |
| H1 pagină interioară | `font-serif font-medium text-4xl sm:text-5xl leading-[1.08]` |
| H2 secțiune mare | `font-serif font-medium text-4xl sm:text-5xl` |
| H2 secțiune | `font-serif font-medium text-3xl sm:text-4xl` |
| H2 scris cu majuscule în conținut | serif `text-3xl sm:text-4xl tracking-[0.04em]` sau stil „eyebrow” (vezi mai jos) |
| H3 | `font-serif font-medium text-lg`–`text-xl` |
| Eyebrow (etichetă deasupra titlului) | `text-[13px] uppercase tracking-eyebrow` (0.16em), `text-muted`/`text-cream-muted` |
| Lead | `text-lg leading-relaxed text-muted-strong` |
| Paragraf | `text-[15px]`/`text-base leading-relaxed text-muted-strong` |
| Mic / metadate | `text-xs uppercase tracking-[0.12em] text-muted` |
| Afirmație mare (citat) | `font-serif font-medium text-4xl md:text-6xl` (cu variantă `italic`) |

Majusculele se fac cu clasa `uppercase` — textul din HTML rămâne cel din conținut.

## 4. Spațiere și container

- Container: `mx-auto max-w-6xl` (1152px); text lung `max-w-3xl`; meniul `max-w-[1440px]`.
- Padding lateral: `px-5 sm:px-8 lg:px-14`.
- Padding vertical: secțiune obișnuită `py-20 sm:py-28`; secțiune „aerisită” `py-20 sm:py-32`;
  banda rulantă `py-5`.
- Între titlul secțiunii și conținut: `mb-12` (sau `mb-16 sm:mb-24` în secțiunile mari).
- Secțiunile alternează fundalurile: `ink` → `cream-alt` → `cream` → `ink` …, fără umbre și fără carduri ridicate.

## 5. Header și meniu (`components/Navbar2.js`)

- Bară fixă sus, `bg-cream`, linie `border-b border-border`, `px-5 py-4 sm:px-6 sm:py-5 lg:px-10`.
- Logo text: „Scentio Milano” în `font-serif tracking-[0.06em]`, cu punctul coral.
- Link-uri: `text-[13px] tracking-[0.04em]`; pagina activă și hover = subliniere coral (`aria-current="page"`).
- Contact = buton principal mic: `rounded-sm bg-ink px-5 py-2.5 text-[13px] font-medium text-cream`.
- Mobil (< md): buton cu trei linii (ultima mai scurtă) care se transformă în X; meniul se deschide
  sub bară, link-urile în `font-serif text-lg` cu separatoare, butonul Contact pe toată lățimea.

## 6. Footer (`components/Footer1.js`)

- `bg-ink text-cream px-5 py-14 sm:px-8 lg:px-14 lg:py-16`, container `max-w-6xl`.
- Coloane: logo + tagline + adresă/telefon/email · Program · Aromatizare pentru · Link-uri utile.
- Titluri de coloană: `text-[11px] uppercase tracking-[0.12em] text-cream-muted/70` (rămân `h2`).
- Link-uri `text-[13px] text-cream-muted`, hover `text-cream`.
- Rând final despărțit cu `border-t border-line-dark/30`: © an + Scentio Milano, Instagram (hover coral).

## 7. Butoane și link-uri

| Tip | Clase |
|---|---|
| Principal pe deschis | `rounded-sm bg-ink px-6 py-[14px] text-sm font-medium tracking-[0.03em] text-cream` |
| Principal pe închis | `rounded-sm bg-cream px-6 py-[14px] text-sm font-medium tracking-[0.03em] text-ink` |
| Secundar pe închis | `rounded-sm border border-cream px-6 py-[14px] text-sm tracking-[0.03em] text-cream` |
| Secundar pe deschis | `rounded-sm border border-line-dark px-6 py-[14px] text-sm text-ink` |
| Link text cu săgeată | clasa `link-arrow` + „ →” (subliniere în culoarea textului, coral la hover) |

Hover global pentru link-uri: `opacity: .72`. Focus vizibil: contur 2px în culoarea curentă, offset 2px.

## 8. Hero

- Secțiune `min-h-[92vh] bg-ink text-cream`, conținutul aliniat jos (`flex-col justify-end`).
- Gradient radial foarte discret (cream 12%) în colț; de la `lg`, fotografia ocupă 40% în dreapta,
  topită în fundal cu gradient din `ink`; pe mobil fotografia e fundal acoperit de `ink/75`.
- Ordine: eyebrow (tagline-ul brandului + liniuță coral) → H1 → paragraf `font-light text-cream-muted`
  → un singur buton principal („Consultație gratuită”).

## 9. Bandă rulantă (`components/ui/Marquee.js`)

- Bandă `bg-cream-alt border-b border-border py-5`, elemente `font-serif italic text-base sm:text-xl text-muted-strong`, spațiu `pr-14`.
- Animație CSS `marquee` (translateX 0 → -50%), 28s, liniară; se oprește la hover/focus și la `prefers-reduced-motion`.
- Elementele sunt randate de două ori; a doua copie e `aria-hidden`. Conținut: numele segmentelor.
- **Banda cu logo-uri de clienți nu se folosește deocamdată** (lipsesc clienți confirmați).

## 10. Rândul de repere (`components/ui/Highlights.js`)

- Grilă `1 / 2 / 4` coloane, separatoare `border-border`, fiecare element cu o liniuță coral `w-8` deasupra.
- Datele sunt în `content/ro/home.js` → `highlights`. Acum sunt **fapte**, fără cifre inventate.
  Pentru o cifră reală: `{ value: "120+", label: "spații aromatizate" }` → valoarea apare mare
  (`text-6xl sm:text-7xl` serif) cu eticheta dedesubt.

## 11. Rânduri numerotate („cum lucrăm”)

- Listă cu `border-t`, fiecare rând `border-b py-7`, grilă `[2.5rem_1fr]` pe mobil și
  `[3rem_minmax(180px,280px)_1fr]` de la `sm`: număr `01` (serif, `text-muted`) · titlu `h3` serif · descriere.

## 12. Carduri de link (articole, segmente, produse)

- Fără chenar și fără umbră: imagine `aspect-video rounded-sm overflow-hidden`, apoi metadate mici
  (dată — liniuță coral — categorie), titlu serif `text-xl`, descriere `text-sm text-muted-strong`.
- Varianta cu chenar (link-uri „Vezi și”): `rounded-sm border border-border p-5`, hover `border-ink`.

## 13. FAQ (acordeon) — pentru paginile de segment

- `<details>`/`<summary>` nativ, listă `divide-y divide-border border-y`, fiecare element `py-5`.
- Întrebarea `font-serif text-lg`, semn „+” în dreapta care se rotește 45° când e deschis
  (`group-open:rotate-45`), răspunsul `mt-3 text-sm leading-relaxed text-muted-strong`.
- Textul întrebărilor și nivelul titlurilor existente rămân neschimbate.

## 14. Imagini

- Colțuri `rounded-sm`, fără umbre și fără inele; `object-cover` în rame cu raport fix
  (`aspect-video`, `aspect-[4/3]`, `aspect-[4/5]`).
- Pe carduri: `transition-transform duration-500 group-hover:scale-105`.
- `next/image` cu `sizes` corect, `placeholder="blur"` la importurile statice, `priority` doar în hero.

## 15. Mișcare

- `components/ui/Reveal.js`: apariție la scroll (opacitate 0 → 1, `y` 28px → 0, 0,7s, easeOut), o singură dată.
- La `prefers-reduced-motion` nu există animații (Reveal fără durată, banda rulantă oprită,
  toate tranzițiile CSS reduse la 0,01ms).
- Fără animații decorative continue în afara benzii rulante.

## Stare

- **Gata:** toate paginile — homepage, /servicii, segmentele (/aromatizare-*), /echipamente și paginile de
  produs, /blog și articolele, /contact, plus meniul și footer-ul.
- Tema închisă veche a fost eliminată (regulile globale pentru `h2`, `h3`, `p`, `InfoBlock`,
  `SensoryArchitecture`); textele lor sunt acum în `components/sections/DemoBlock.js` și `Process.js`.
- Formularul de contact: câmpuri `rounded-sm border-line-dark/50 bg-cream`, focus `border-ink`,
  etichete mici `uppercase tracking-[0.12em] text-muted`, buton principal pe deschis.
