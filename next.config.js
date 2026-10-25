/** @type {import('next').NextConfig} */

// Pagini șterse (template / fără legătură cu parfumurile) -> homepage
const removedPages = [
  "/about",
  "/marketing-digital",
  "/website-custom",
  "/magazin-online-shopify",
  "/applications/:path*",
];

// URL-uri vechi -> URL-uri noi în română
const movedPages = [
  ["/hotele", "/aromatizare-hoteluri"],
  ["/gym", "/aromatizare-fitness"],
  ["/automotive", "/aromatizare-showroom-auto"],
  ["/retail", "/aromatizare-retail"],
  ["/restaurante", "/aromatizare-restaurante"],
  ["/blog/1", "/blog/ghid-marketing-olfactiv-pentru-afaceri"],
  ["/blog/2", "/blog/marketing-olfactiv-in-hoteluri"],
  ["/blog/3", "/blog/marketing-olfactiv-in-restaurante"],
];

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Redirect-urile se potrivesc case-sensitive, altfel „/Contact” -> „/contact” intră în buclă
    caseSensitiveRoutes: true,
  },
  // Structură pregătită pentru rusă: se adaugă "ru" în locales și conținutul în content/ru/
  i18n: {
    locales: ["ro"],
    defaultLocale: "ro",
    localeDetection: false,
  },
  images: {
    // AVIF rămâne dezactivat până la upgrade-ul la Next 15.5.24+ (advisory critic pe optimizatorul de imagini cu AVIF în Next 14)
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      ...removedPages.map((source) => ({ source, destination: "/", statusCode: 301 })),
      ...movedPages.map(([source, destination]) => ({ source, destination, statusCode: 301 })),
      { source: "/Contact", destination: "/contact", statusCode: 301 },
    ];
  },
};

module.exports = nextConfig;
