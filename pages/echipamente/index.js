import Seo from "../../components/Seo";
import PageHero from "../../components/sections/PageHero";
import DemoBlock from "../../components/sections/DemoBlock";
import Reveal from "../../components/ui/Reveal";
import ProductCard from "../../components/products/ProductCard";
import { productsByCategory } from "../../lib/products";
import { breadcrumbSchema } from "../../lib/schema";
import { site } from "../../lib/site";

const categoryIntro = {
  "Spații mari": "Peste 500 m²: soluții de mare acoperire și sisteme HVAC pentru hoteluri, mall-uri, showroom-uri și săli de sport.",
  Afaceri: "Spații mici și medii: recepții, birouri, magazine, clinici și restaurante.",
  "Casă și birou": "Difuzoare compacte pentru spații mici: birou, hol, baie sau dormitor.",
};

export default function Echipamente({ groups }) {
  return (
    <div className="dore bg-cream text-ink">
      <Seo
        title="Difuzoare de Parfum Profesionale | Scentio Milano"
        description="Catalogul de difuzoare de parfum Scentio Milano: echipamente pentru afaceri, spații mari și HVAC, casă și birou. Instalare și întreținere în Moldova."
        path="/echipamente"
        jsonLd={[breadcrumbSchema([{ name: "Acasă", path: "/" }, { name: "Echipamente", path: "/echipamente" }])]}
      />

      <PageHero
        eyebrow="Echipamente"
        title="Echipamente de difuzare a parfumului"
        description="De la difuzoare discrete pentru un birou până la sisteme HVAC pentru mii de metri pătrați. Alegem împreună echipamentul potrivit spațiului tău, îl instalăm și ne ocupăm de întreținere."
      >
        <a
          href={site.catalogPdf}
          download
          className="mt-10 inline-block rounded-sm border border-line-dark px-6 py-[14px] text-sm tracking-[0.03em] text-ink"
        >
          Descarcă catalogul (PDF)
        </a>
      </PageHero>

      {groups.map(({ category, id, products }, index) => (
        <section
          key={category}
          id={id}
          aria-labelledby={`${id}-titlu`}
          className={`scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-14 ${index % 2 === 0 ? "bg-cream-alt" : "bg-cream"}`}
        >
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12">
              <h2 id={`${id}-titlu`} className="font-serif text-3xl font-medium sm:text-4xl">
                {category}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-strong">{categoryIntro[category]}</p>
            </Reveal>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {products.map((product) => (
                <Reveal key={product.slug}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <DemoBlock />
    </div>
  );
}

export async function getStaticProps() {
  return { props: { groups: productsByCategory() } };
}
