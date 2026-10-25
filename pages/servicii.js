import React from "react";
import Image from "next/image";
import Link from "next/link";
import Seo from "../components/Seo";
import PageHero from "../components/sections/PageHero";
import Process from "../components/sections/Process";
import DemoBlock from "../components/sections/DemoBlock";
import Reveal from "../components/ui/Reveal";
import { getSegments } from "../lib/content";
import { serviceSchema, breadcrumbSchema } from "../lib/schema";

const description =
  "Aromatizare spații comerciale în Moldova: consultanță, parfumuri create în Grasse, difuzoare profesionale, instalare și întreținere inclusă.";

const Servicii = ({ segments }) => {
  return (
    <div className="dore bg-cream text-ink">
      <Seo
        title="Servicii de Aromatizare Spații Comerciale | Scentio Milano"
        description={description}
        path="/servicii"
        jsonLd={[
          serviceSchema({
            name: "Marketing olfactiv și aromatizare profesională",
            description,
            path: "/servicii",
            serviceType: "Marketing olfactiv",
          }),
          breadcrumbSchema([{ name: "Acasă", path: "/" }, { name: "Servicii", path: "/servicii" }]),
        ]}
      />

      <PageHero
        eyebrow="Servicii"
        title="Servicii de marketing olfactiv pentru afacerea ta"
        description="De la alegerea parfumului până la instalarea difuzoarelor și întreținerea lor, ne ocupăm de tot. Tu primești o semnătură olfactivă constantă, adaptată fiecărui spațiu."
      />

      <section className="bg-cream-alt px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="mb-12 font-serif text-3xl font-medium sm:text-4xl">Soluții pe domenii</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {segments.map((segment) => (
              <Reveal key={segment.slug}>
                <Link href={`/${segment.slug}`} className="group block hover:opacity-100">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-border">
                    <Image
                      src={segment.image}
                      alt={segment.imageAlt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium transition-colors group-hover:text-muted-strong">
                    {segment.navLabel}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-strong">{segment.seo.description}</p>
                  <span className="link-arrow mt-4 inline-block text-sm">Detalii →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <DemoBlock />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  const segments = getSegments(locale).map(({ slug, navLabel, image, imageAlt, seo }) => ({
    slug,
    navLabel,
    image,
    imageAlt,
    seo,
  }));
  return { props: { segments } };
}

export default Servicii;
