import Link from "next/link";
import Seo from "../../components/Seo";
import ProductGallery from "../../components/products/ProductGallery";
import Reveal from "../../components/ui/Reveal";
import { products, getProduct } from "../../data/products";
import { specRows, suitableSegments, categoryId } from "../../lib/products";
import { productSchema, breadcrumbSchema } from "../../lib/schema";

export default function ProductPage({ product, specs, segments }) {
  const path = `/echipamente/${product.slug}`;
  const offerHref = `/contact?produs=${encodeURIComponent(product.name)}`;

  return (
    <div className="dore bg-cream text-ink">
      <Seo
        title={product.seo.title}
        description={product.seo.description}
        path={path}
        image={product.images[0].src.src}
        imageAlt={product.images[0].alt}
        imageWidth={product.images[0].src.width}
        imageHeight={product.images[0].src.height}
        jsonLd={[
          productSchema({
            name: product.name,
            description: product.shortDescription,
            path,
            images: product.images.map((image) => image.src.src),
            category: product.category,
            specs,
          }),
          breadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "Echipamente", path: "/echipamente" },
            { name: product.name, path },
          ]),
        ]}
      />

      <div className="px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs uppercase tracking-[0.12em] text-muted">
            <Link href="/echipamente">Echipamente</Link>
            <span aria-hidden="true" className="mx-3 inline-block h-px w-4 bg-coral align-middle" />
            <span>{product.category}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ProductGallery images={product.images} name={product.name} />

            <div className="lg:pt-6">
              <p className="text-[13px] uppercase tracking-eyebrow text-muted">{product.category}</p>
              <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-[-0.01em] sm:text-5xl">
                {product.name}
              </h1>
              {product.tagline && <p className="mt-4 font-serif text-xl italic text-muted-strong">{product.tagline}</p>}
              <p className="mt-6 text-lg leading-relaxed text-muted-strong">{product.shortDescription}</p>
              <Link
                href={offerHref}
                className="mt-10 inline-block rounded-sm bg-ink px-6 py-[14px] text-sm font-medium tracking-[0.03em] text-cream"
              >
                Solicită o ofertă
              </Link>
              <p className="mt-4 text-sm text-muted">Consultanța, instalarea și întreținerea sunt incluse.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cream-alt px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal as="section">
            <h2 className="mb-8 font-serif text-3xl font-medium sm:text-4xl">Specificații</h2>
            <table className="w-full border-t border-border text-left text-[15px]">
              <tbody>
                {specs.map(({ label, value }) => (
                  <tr key={label} className="border-b border-border">
                    <th scope="row" className="w-2/5 py-4 pr-6 align-top font-medium text-ink">
                      {label}
                    </th>
                    <td className="py-4 text-muted-strong">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <div className="space-y-16">
            {product.features.length > 0 && (
              <Reveal as="section">
                <h2 className="mb-8 font-serif text-3xl font-medium sm:text-4xl">Caracteristici</h2>
                <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-[15px] leading-relaxed text-muted-strong">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-coral" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal as="section">
              <h2 className="mb-8 font-serif text-3xl font-medium sm:text-4xl">Potrivit pentru</h2>
              {segments.length > 0 ? (
                <ul className="flex flex-wrap gap-3">
                  {(product.extraCategories || []).map((category) => (
                    <li key={category}>
                      <Link
                        href={`/echipamente#${categoryId(category)}`}
                        className="inline-block rounded-sm border border-line-dark/50 px-4 py-2 font-serif text-lg transition-colors hover:border-ink hover:opacity-100"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                  {segments.map((segment) => (
                    <li key={segment.slug}>
                      <Link
                        href={`/${segment.slug}`}
                        className="inline-block rounded-sm border border-line-dark/50 px-4 py-2 font-serif text-lg transition-colors hover:border-ink hover:opacity-100"
                      >
                        {segment.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[15px] leading-relaxed text-muted-strong">
                  Spații mici, de până la {product.coverageM2Max} m²: birou, hol, baie sau dormitor.
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl font-serif text-2xl font-medium leading-snug sm:text-3xl">
            Nu ești sigur ce echipament ți se potrivește? Te ajutăm să alegi.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={offerHref}
              className="inline-block rounded-sm bg-ink px-6 py-[14px] text-sm font-medium tracking-[0.03em] text-cream"
            >
              Solicită o ofertă
            </Link>
            <Link href="/echipamente" className="link-arrow text-sm">
              Toate echipamentele
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths({ locales = ["ro"] }) {
  const paths = locales.flatMap((locale) => products.map((p) => ({ params: { slug: p.slug }, locale })));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const product = getProduct(params.slug);
  if (!product) return { notFound: true };
  return { props: { product, specs: specRows(product), segments: suitableSegments(product, locale) } };
}
