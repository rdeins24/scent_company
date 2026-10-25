// GENERAT AUTOMAT din catalogul PDF (catalog/) — nu edita manual: rulează din nou scriptul de extragere.
// Corecturile aplicate la extragere sunt documentate în raportul de extragere.
import type { StaticImageData } from "next/image";
import aerisProDifuzorParfumComercialGrafitImg from "../public/assets/products/aeris-pro-difuzor-parfum-comercial-grafit.webp";
import aerisProDifuzorParfumComercialBronzImg from "../public/assets/products/aeris-pro-difuzor-parfum-comercial-bronz.webp";
import airzenDifuzorParfumPodeaSpatiiMariImg from "../public/assets/products/airzen-difuzor-parfum-podea-spatii-mari.webp";
import aerisMaxDifuzorParfumSpatiiMariImg from "../public/assets/products/aeris-max-difuzor-parfum-spatii-mari.webp";
import enjoyMoodThreeDifuzorParfumProfesionalNegruImg from "../public/assets/products/enjoy-mood-3-difuzor-parfum-profesional-negru.webp";
import enjoyMoodThreeDifuzorParfumProfesionalAlbImg from "../public/assets/products/enjoy-mood-3-difuzor-parfum-profesional-alb.webp";
import enjoyMoodTwoDifuzorParfumCompactImg from "../public/assets/products/enjoy-mood-2-difuzor-parfum-compact.webp";
import aerisPrimeDifuzorParfumHvacImg from "../public/assets/products/aeris-prime-difuzor-parfum-hvac.webp";
import aerisOneDifuzorParfumPereteAlbImg from "../public/assets/products/aeris-one-difuzor-parfum-perete-alb.webp";
import aerisOneDifuzorParfumPereteNegruImg from "../public/assets/products/aeris-one-difuzor-parfum-perete-negru.webp";
import aerisOasisHexDifuzorParfumInteligentImg from "../public/assets/products/aeris-oasis-hex-difuzor-parfum-inteligent.webp";
import aerisMiniDifuzorParfumBirouCasaImg from "../public/assets/products/aeris-mini-difuzor-parfum-birou-casa.webp";
import aerisUltraSistemParfumareHvacImg from "../public/assets/products/aeris-ultra-sistem-parfumare-hvac.webp";

export const productCategories = ["Afaceri", "Spații mari", "Casă și birou"] as const;
export type ProductCategory = (typeof productCategories)[number];

export interface ProductImage {
  src: StaticImageData;
  alt: string;
  variant?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline?: string;
  /** categorii suplimentare în care apare produsul (ex. Aeris One și la Casă și birou) */
  extraCategories?: ProductCategory[];
  shortDescription: string;
  coverage?: string;
  capacity?: string;
  consumption?: string;
  dimensions?: string;
  power?: string;
  control?: string;
  mounting?: string;
  /** acoperirea maximă în m² (m³ convertiți la 3 m înălțime), folosită pentru recomandări */
  coverageM2Max: number;
  features: string[];
  images: ProductImage[];
  seo: { title: string; description: string };
}

export const products: Product[] = [
  {
    slug: "aeris-pro",
    name: "Aeris Pro",
    category: "Spații mari",
    shortDescription: "Difuzor premium cu nebulizare twin-fluid, aromă fără reziduuri. Rezervorul de 1.000 ml oferă autonomie lungă, iar ventilatorul integrat acoperă până la 900 m². Control Bluetooth pentru intensitate și programe. Montaj pe perete sau podea, cu un design luxos din sticlă.",
    coverage: "până la 900 m² / 2.700 m³",
    capacity: "1,000 ml",
    consumption: "0,25–5,0 g/h",
    dimensions: "195 × 150 × 585 mm",
    power: "DC 12 V, 12 W",
    control: "Bluetooth",
    mounting: "perete sau podea",
    coverageM2Max: 900,
    features: [
      "Nebulizare twin-fluid",
      "Panou frontal din sticlă",
      "Design vertical, paralelipipedic",
      "Blocare de siguranță",
      "Programare orară",
      "Funcționare super silențioasă",
      "Material: oțel inoxidabil, sticlă, plastic",
    ],
    images: [
      { src: aerisProDifuzorParfumComercialGrafitImg, alt: "Difuzor de parfum Aeris Pro, finisaj grafit, turn vertical lângă un perete din lemn", variant: "Grafit" },
      { src: aerisProDifuzorParfumComercialBronzImg, alt: "Difuzor de parfum Aeris Pro, finisaj bronz, turn vertical lângă un perete din lemn", variant: "Bronz" },
    ],
    seo: { title: "Aeris Pro – Difuzor de parfum comercial | Scentio Milano", description: "Aeris Pro: difuzor de parfum comercial, acoperire până la 900 m² / 2.700 m³. Instalare, parfumuri și întreținere în Moldova, de la Scentio Milano." },
  },
  {
    slug: "airzen",
    name: "AirZen",
    category: "Spații mari",
    shortDescription: "Difuzor de podea, tip turn, conceput pentru spații comerciale și publice mari. Rezervorul de 900 ml și acoperirea largă mențin parfumul constant în încăperi mari, cu întreținere minimă.",
    coverage: "750–1.000 m², în funcție de model (S / M / L)",
    capacity: "900 ml",
    control: "buton rotativ, 3 niveluri de intensitate, 4 opțiuni de temporizare",
    mounting: "de sine stătător, pe podea",
    coverageM2Max: 1000,
    features: [
      "Design anti-vărsare",
      "Finisaj decorativ din material textil",
      "Lumină ambientală caldă",
      "Semnal sonor de notificare",
      "Înlocuire ușoară a flaconului",
      "Funcționare silențioasă",
    ],
    images: [
      { src: airzenDifuzorParfumPodeaSpatiiMariImg, alt: "Difuzor de parfum AirZen, turn alb de podea cu finisaj textil" },
    ],
    seo: { title: "AirZen – Difuzor de parfum de podea | Scentio Milano", description: "AirZen: difuzor de parfum de podea, acoperire 750–1.000 m², în funcție de model (S / M / L). Instalare și întreținere în Moldova." },
  },
  {
    slug: "aeris-max",
    name: "Aeris Max",
    category: "Spații mari",
    tagline: "Compact și reîncărcabil, ideal pentru orice spațiu",
    shortDescription: "Aeris Max folosește tehnologie de nebulizare twin-fluid pentru o aromă rece, fină și uniformă, ideală pentru spații mari precum lobby-uri, birouri, retail sau spa-uri. Cu un rezervor de 850 ml și control prin Bluetooth și ecran tactil, oferă intensitate ajustabilă și instalare flexibilă – pe perete sau pe podea.",
    coverage: "până la 850 m² / 2.550 m³",
    capacity: "850 ml",
    consumption: "0,20–4,0 g/h",
    dimensions: "295 × 112 × 222 mm",
    power: "9 W, alimentare DC 12 V",
    control: "Bluetooth + ecran tactil",
    mounting: "perete sau podea",
    coverageM2Max: 850,
    features: [
      "Nebulizare twin-fluid",
      "Material: plastic rezistent la zgârieturi",
    ],
    images: [
      { src: aerisMaxDifuzorParfumSpatiiMariImg, alt: "Difuzor de parfum Aeris Max, alb, așezat pe un blat de marmură într-un living modern" },
    ],
    seo: { title: "Aeris Max – Difuzor de parfum | Scentio Milano", description: "Aeris Max: difuzor de parfum pentru spații mari, acoperire până la 850 m² / 2.550 m³. Instalare, parfumuri și întreținere în Moldova, de la Scentio Milano." },
  },
  {
    slug: "enjoy-mood-3",
    name: "Enjoy Mood 3.0",
    category: "Afaceri",
    shortDescription: "Enjoy Mood 3.0 este un difuzor discret, ideal pentru spații comerciale mici și medii. Se controlează prin aplicație Bluetooth și oferă parfumare constantă pentru spații până la 500 m³, cu montaj rapid și opțiuni flexibile.",
    coverage: "până la 500 m³ (≈166 m² la 3 m înălțime)",
    capacity: "950 ml (recipient inclus)",
    dimensions: "220 × 285 × 95 mm",
    power: "100–240 V, 50/60 Hz",
    control: "Aplicație + Bluetooth",
    mounting: "perete, podea, ventilație",
    coverageM2Max: 166,
    features: [
      "Material: plastic",
      "Greutate: 1.700 g",
      "Culori: Alb / Negru",
      "Capac personalizabil (min. 20 buc.)",
    ],
    images: [
      { src: enjoyMoodThreeDifuzorParfumProfesionalNegruImg, alt: "Difuzor de parfum Enjoy Mood 3.0 negru, cu emblemă hexagonală aurie", variant: "Negru" },
      { src: enjoyMoodThreeDifuzorParfumProfesionalAlbImg, alt: "Difuzor de parfum Enjoy Mood 3.0 alb, cu emblemă hexagonală aurie", variant: "Alb" },
    ],
    seo: { title: "Enjoy Mood 3.0 – Difuzor de parfum | Scentio Milano", description: "Enjoy Mood 3.0: difuzor de parfum profesional, acoperire până la 500 m³ (≈166 m² la 3 m înălțime). Instalare și întreținere în Moldova." },
  },
  {
    slug: "enjoy-mood-2",
    name: "Enjoy Mood 2.0",
    category: "Afaceri",
    tagline: "Control Bluetooth și design elegant",
    shortDescription: "Enjoy Mood 2.0 este un nebulizator portabil, intuitiv și ușor de instalat, ideal pentru spații între 150 și 300 m³. Poate fi montat pe perete, podea sau conectat la ventilație și se controlează simplu prin Bluetooth. Disponibil în alb, cu posibilitatea de personalizare în numeroase culori și texturi.",
    coverage: "până la 350 m³ (≈116 m² la 3 m înălțime)",
    capacity: "850 ml",
    power: "12 V (110–240 V / 50–60 Hz), 0,68–2 W",
    control: "Bluetooth",
    mounting: "perete, podea, conducte HVAC",
    coverageM2Max: 116,
    features: [
      "Greutate: 1,46 kg",
      "Made in EU",
    ],
    images: [
      { src: enjoyMoodTwoDifuzorParfumCompactImg, alt: "Difuzor de parfum Enjoy Mood 2.0, alb, pe un blat de piatră" },
    ],
    seo: { title: "Enjoy Mood 2.0 – Difuzor de parfum compact | Scentio Milano", description: "Enjoy Mood 2.0: difuzor de parfum compact, acoperire până la 350 m³ (≈116 m² la 3 m înălțime). Instalare și întreținere în Moldova." },
  },
  {
    slug: "aeris-prime",
    name: "Aeris Prime",
    category: "Afaceri",
    tagline: "Soluții eficiente pentru spații mari",
    shortDescription: "Difuzor profesional din metal, cu tehnologie twin-fluid pentru particule ultra-fine și parfum uniform în spații de până la 500 m². Funcționează cu HVAC sau montaj pe perete/podea și oferă autonomie extinsă datorită rezervorului de 500 ml. Control rapid prin Bluetooth, ecran tactil și Wi-Fi.",
    coverage: "500 m² / 1.500 m³",
    capacity: "500 ml",
    consumption: "0,13–2,6 g/h",
    dimensions: "356 × 95 × 295 mm",
    power: "7 W, DC 12 V",
    control: "ecran tactil, Bluetooth, Wi-Fi",
    mounting: "perete, podea sau sistemul HVAC",
    coverageM2Max: 500,
    features: [
      "Material: metal, aluminiu",
      "Ventilator integrat",
      "Nivel redus de zgomot",
      "Programare orară",
    ],
    images: [
      { src: aerisPrimeDifuzorParfumHvacImg, alt: "Difuzor de parfum Aeris Prime, carcasă neagră din metal, pe o masă din lemn" },
    ],
    seo: { title: "Aeris Prime – Difuzor de parfum HVAC | Scentio Milano", description: "Aeris Prime: difuzor de parfum HVAC, acoperire 500 m² / 1.500 m³. Instalare, parfumuri și întreținere în Moldova, de la Scentio Milano." },
  },
  {
    slug: "aeris-one",
    name: "Aeris One",
    category: "Afaceri",
    shortDescription: "Difuzor compact și elegant pentru hoteluri, coridoare, lifturi și buticuri. Folosește nebulizare twin-fluid pentru parfum uniform și Bluetooth pentru reglarea intensității și programelor.",
    coverage: "până la 30 m²",
    capacity: "100 ml (ulei esențial)",
    consumption: "0,05–0,35 g/h",
    dimensions: "174 × 63 × 156 mm",
    power: "5 V (baterie / USB-C), 1,5 W",
    control: "Bluetooth",
    mounting: "pe perete",
    extraCategories: ["Casă și birou"],
    coverageM2Max: 30,
    features: [
      "Nebulizare twin-fluid",
      "Culori: alb / negru",
    ],
    images: [
      { src: aerisOneDifuzorParfumPereteAlbImg, alt: "Difuzor de parfum de perete Aeris One, varianta albă", variant: "Alb" },
      { src: aerisOneDifuzorParfumPereteNegruImg, alt: "Difuzor de parfum de perete Aeris One, varianta neagră", variant: "Negru" },
    ],
    seo: { title: "Aeris One – Difuzor de parfum de perete | Scentio Milano", description: "Aeris One: difuzor de parfum de perete, acoperire până la 30 m². Instalare, parfumuri și întreținere în Moldova, de la Scentio Milano." },
  },
  {
    slug: "aeris-oasis-hex",
    name: "Aeris Oasis Hex",
    category: "Afaceri",
    tagline: "Compact. Precis. Elegant.",
    shortDescription: "Aeris Oasis este un difuzor inteligent, ultra-silențios, conceput pentru parfumare constantă în spații mici și medii. Se controlează de la distanță prin aplicație (Wi-Fi / Bluetooth), include senzori de monitorizare în timp real și alerte automate (refill, întreruperi de curent, supraîncălzire). Plug & Play, instalare rapidă.",
    coverage: "până la 150 m²",
    capacity: "250 ml (refill optimizat)",
    control: "aplicație, programare și intensitate de oriunde",
    coverageM2Max: 150,
    features: [
      "Nivel de zgomot: <45 dB (operare ultra-silențioasă)",
      "Monitorizare: senzori în timp real + alerte automate",
      "Autonomie: peste 2 luni",
    ],
    images: [
      { src: aerisOasisHexDifuzorParfumInteligentImg, alt: "Difuzor de parfum Aeris Oasis Hex, hexagonal negru cu auriu, montat pe perete" },
    ],
    seo: { title: "Aeris Oasis Hex – Difuzor de parfum | Scentio Milano", description: "Aeris Oasis Hex: difuzor de parfum inteligent, acoperire până la 150 m². Instalare, parfumuri și întreținere în Moldova, de la Scentio Milano." },
  },
  {
    slug: "aeris-mini",
    name: "Aeris Mini",
    category: "Casă și birou",
    tagline: "Design elegant și funcționalitate avansată",
    shortDescription: "Aeris Mini poate fi folosit și în spații mici din casă — baie, hol, birou sau noptieră. Este silențios, portabil și funcționează atât pe baterie, cât și conectat la USB-C. Ideal pentru a parfuma discret zone mici.",
    coverage: "până la 10 m²",
    capacity: "10 ml / 30 ml",
    dimensions: "Ø70 × 133 mm",
    power: "5 V USB-C",
    mounting: "portabil (pe baterie sau USB-C)",
    coverageM2Max: 10,
    features: [
      "Autonomie: ≈2,5 ore (baterie)",
      "Culori: Alb / Negru",
    ],
    images: [
      { src: aerisMiniDifuzorParfumBirouCasaImg, alt: "Difuzor de parfum Aeris Mini, cilindru negru cu inel de lumină albastră, pe o masă" },
    ],
    seo: { title: "Aeris Mini – Difuzor de parfum | Scentio Milano", description: "Aeris Mini: difuzor de parfum pentru birou și casă, acoperire până la 10 m². Instalare, parfumuri și întreținere în Moldova, de la Scentio Milano." },
  },
  {
    slug: "aeris-ultra",
    name: "Aeris Ultra",
    category: "Spații mari",
    tagline: "Elegant și eficient în spații mari",
    shortDescription: "Aeris Ultra este un difuzor profesional de nivel industrial, conceput pentru integrare în sisteme HVAC. Cu două rezervoare de 2,5 l și tehnologie twin-fluid, oferă o difuzie puternică și uniformă pentru spații foarte mari — centre comerciale, hoteluri, săli de evenimente, săli de sport sau clădiri de birouri. Programarea pe 5 intervale și cele 20 de niveluri de intensitate permit un control precis al parfumării.",
    coverage: "1.700 m² / 5.100 m³",
    capacity: "2 × 2.500 ml",
    consumption: "0,40–8,0 g/h",
    dimensions: "255 × 153 × 157 mm",
    power: "25 W, alimentare DC 12 V",
    mounting: "integrare în sistemul HVAC",
    coverageM2Max: 1700,
    features: [
      "Nebulizare twin-fluid",
      "Material: aluminiu",
      "Programare: 5 intervale + 20 niveluri intensitate",
    ],
    images: [
      { src: aerisUltraSistemParfumareHvacImg, alt: "Sistem de parfumare HVAC Aeris Ultra, cu două rezervoare albe de 2,5 litri" },
    ],
    seo: { title: "Aeris Ultra – Sistem de parfumare HVAC | Scentio Milano", description: "Aeris Ultra: sistem de parfumare HVAC, acoperire 1.700 m² / 5.100 m³. Instalare, parfumuri și întreținere în Moldova, de la Scentio Milano." },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
