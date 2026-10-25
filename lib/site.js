// Date centrale despre companie — folosite în footer, contact, meta tags și JSON-LD.
// Orice modificare de contact/adresă/program se face DOAR aici.

export const SITE_URL = "https://www.scentiomilano.com";

export const site = {
  name: "Scentio Milano",
  tagline: "Distribuitor Oficial Scent Company Milano",
  description:
    "Marketing olfactiv profesional în Chișinău: sisteme de difuzare a parfumului, compoziții create în Grasse și întreținere inclusă.",
  email: "info@scentiomilano.com",
  phone: "+373 68 818 239",
  phoneHref: "tel:+37368818239",
  phoneE164: "+37368818239",
  instagram: "https://www.instagram.com/scentio_milano/",
  logo: "/assets/logo/scentio.png",
  defaultOgImage: "/og/og-default.jpg",
  catalogPdf: "/catalog-scentio-milano.pdf",
  defaultOgImageAlt: "Difuzor de parfum profesional într-un lobby elegant",
  address: {
    street: "str. Mihai Eminescu 72, of. 207",
    city: "Chișinău",
    country: "Republica Moldova",
    countryCode: "MD",
    postalCode: "", // necunoscut — lăsat gol intenționat
  },
  hours: {
    label: "Luni–Vineri: 09:00–18:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.country}`;

export const mapEmbedUrl = `https://maps.google.com/maps?hl=ro&q=${encodeURIComponent(
  "strada Mihai Eminescu 72, Chișinău, Moldova"
)}&z=17&output=embed`;

export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_URL}${path === "/" ? "" : path}`;
