import Seo from "../components/Seo";
import SegmentPage from "../components/SegmentPage";
import { getSegments, getSegment } from "../lib/content";
import { serviceSchema, breadcrumbSchema } from "../lib/schema";
import { recommendedProducts } from "../lib/products";

export default function Segment({ segment, otherSegments, products }) {
  const path = `/${segment.slug}`;

  return (
    <>
      <Seo
        title={segment.seo.title}
        description={segment.seo.description}
        path={path}
        image={segment.ogImage}
        imageAlt={segment.imageAlt}
        jsonLd={[
          serviceSchema({
            name: segment.hero.title,
            description: segment.seo.description,
            path,
            serviceType: segment.serviceType,
            audience: segment.audience,
          }),
          breadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "Servicii", path: "/servicii" },
            { name: segment.navLabel, path },
          ]),
        ]}
      />
      <SegmentPage segment={segment} otherSegments={otherSegments} products={products} />
    </>
  );
}

export async function getStaticPaths({ locales = ["ro"] }) {
  const paths = locales.flatMap((locale) =>
    getSegments(locale).map((s) => ({ params: { segment: s.slug }, locale }))
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const segment = getSegment(params.segment, locale);
  if (!segment) return { notFound: true };

  const otherSegments = getSegments(locale)
    .filter((s) => s.slug !== segment.slug)
    .map(({ slug, navLabel }) => ({ slug, navLabel }));

  return { props: { segment, otherSegments, products: recommendedProducts(segment.slug) } };
}
