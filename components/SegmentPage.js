import Link from "next/link";
import HeroService from "./Templates/HeroService";
import DemoBlock from "./sections/DemoBlock";
import Reveal from "./ui/Reveal";
import ProductCard from "./products/ProductCard";

const container = "mx-auto max-w-6xl";
const sectionPad = "px-5 py-20 sm:px-8 sm:py-28 lg:px-14";

// Pagină de segment (hoteluri, clinici etc.), construită din content/<locale>/segments.js
export default function SegmentPage({ segment, otherSegments, products = [] }) {
  const { hero, benefits, spaces, faq, image, imageAlt } = segment;

  return (
    <div className="dore bg-cream text-ink">
      <HeroService
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.lead}
        imageSrc={image}
        imageAlt={imageAlt}
        buttonText="Programează o consultație gratuită"
        buttonHref="/contact"
      />

      <section className={sectionPad}>
        <div className={container}>
          <Reveal>
            <h2 className="mb-12 max-w-2xl font-serif text-3xl font-medium sm:text-4xl">{benefits.title}</h2>
          </Reveal>
          <div className="grid grid-cols-1 border-t border-border md:grid-cols-2 md:gap-x-16">
            {benefits.items.map((item, i) => (
              <Reveal key={item.title} className="border-b border-border py-8">
                <span className="mb-4 block font-serif text-base text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-3 font-serif text-xl font-medium">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-strong">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-cream-alt ${sectionPad}`}>
        <div className={`${container} grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20`}>
          <Reveal>
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">{spaces.title}</h2>
          </Reveal>
          <ul className="border-t border-border">
            {spaces.items.map((item) => (
              <li key={item} className="flex items-center gap-4 border-b border-border py-4 font-serif text-lg sm:text-xl">
                <span aria-hidden className="h-px w-5 shrink-0 bg-coral" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={sectionPad}>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="mb-8 font-serif text-3xl font-medium sm:text-4xl">Întrebări frecvente</h2>
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-lg font-medium">{item.q}</h3>
                  <span aria-hidden className="shrink-0 text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-strong">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {products.length > 0 && (
        <section className={`bg-cream-alt ${sectionPad}`}>
          <div className={container}>
            <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-serif text-3xl font-medium sm:text-4xl">Echipamente recomandate</h2>
              <Link href="/echipamente" className="link-arrow text-sm">
                Toate echipamentele
              </Link>
            </Reveal>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <DemoBlock />

      <nav aria-label="Alte domenii" className="border-t border-border px-5 py-14 sm:px-8 lg:px-14">
        <div className={container}>
          <h2 className="mb-6 text-[13px] font-normal uppercase tracking-eyebrow text-muted">Aromatizăm și alte spații</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherSegments.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="block rounded-sm border border-border px-5 py-4 font-serif text-lg transition-colors hover:border-ink hover:opacity-100"
                >
                  {s.navLabel} <span aria-hidden className="text-muted">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
