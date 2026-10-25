import { SITE_URL, site, absoluteUrl } from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#localbusiness`;

const postalAddress = () => {
  const address = {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressCountry: site.address.countryCode,
  };
  if (site.address.postalCode) address.postalCode = site.address.postalCode;
  return address;
};

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: site.name,
  alternateName: `${site.name} | ${site.tagline}`,
  url: SITE_URL,
  logo: absoluteUrl(site.logo),
  email: site.email,
  telephone: site.phoneE164,
  address: postalAddress(),
  sameAs: [site.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneE164,
    email: site.email,
    contactType: "customer service",
    areaServed: "MD",
    availableLanguage: ["ro", "ru"],
  },
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: site.name,
  description: site.description,
  url: SITE_URL,
  image: absoluteUrl(site.defaultOgImage),
  logo: absoluteUrl(site.logo),
  telephone: site.phoneE164,
  email: site.email,
  address: postalAddress(),
  areaServed: { "@type": "Country", name: "Moldova" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days,
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
  ],
  parentOrganization: { "@id": ORG_ID },
  sameAs: [site.instagram],
});

export const serviceSchema = ({ name, description, path, serviceType, audience }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType,
  url: absoluteUrl(path),
  provider: { "@id": BUSINESS_ID },
  areaServed: { "@type": "Country", name: "Moldova" },
  ...(audience ? { audience: { "@type": "BusinessAudience", name: audience } } : {}),
});

// Fără preț și fără marcă/producător, intenționat
export const productSchema = ({ name, description, path, images, category, specs }) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  url: absoluteUrl(path),
  image: images.map(absoluteUrl),
  category: `Difuzoare de parfum – ${category}`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const articleSchema = ({ title, description, path, image, datePublished, dateModified, author }) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  url: absoluteUrl(path),
  mainEntityOfPage: absoluteUrl(path),
  image: absoluteUrl(image),
  datePublished,
  dateModified: dateModified || datePublished,
  inLanguage: "ro",
  author: { "@type": "Person", name: author },
  publisher: { "@id": ORG_ID },
});
