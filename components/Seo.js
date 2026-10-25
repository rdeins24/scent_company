import Head from "next/head";
import { useRouter } from "next/router";
import { site, absoluteUrl } from "../lib/site";

const OG_LOCALES = { ro: "ro_RO", ru: "ru_RU" };

// Meta tags complete pentru o pagină: title, description, canonical, Open Graph, Twitter Card și JSON-LD.
// `path` este calea canonică a paginii (fără domeniu), ex. "/aromatizare-hoteluri".
export default function Seo({
  title,
  description,
  path = "/",
  image = site.defaultOgImage,
  imageAlt = "",
  imageWidth = 1200,
  imageHeight = 630,
  type = "website",
  jsonLd = [],
  noindex = false,
}) {
  const { locale = "ro" } = useRouter();
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={OG_LOCALES[locale] || "ro_RO"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={imageAlt || title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt || title} />

      {jsonLd.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
