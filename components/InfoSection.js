import React from "react";
import Image from "next/image";
import Reveal from "./ui/Reveal";
import img from "../public/assets/img/pink.jpg";

const features = [
  {
    name: "Transformarea Spațiilor",
    description:
      "Misiunea noastră este să transformăm spațiile cotidiene în experiențe olfactive memorabile, oferind soluții inovatoare și personalizate de marketing olfactiv. Prin compoziții create în laboratorul din Grasse și difuzate profesional, ne propunem să îmbogățim mediul înconjurător și să aducem o notă de eleganță și rafinament în viața de zi cu zi.",
  },
  {
    name: "Conexiuni Emoționale",
    description:
      "Ne dedicăm să creăm conexiuni emoționale profunde prin intermediul miresmelor, stimulând simțurile și evocând amintiri plăcute. Fiecare proiect este unic și realizat cu atenție la detalii, pentru a reflecta identitatea și valorile fiecărui client, oferindu-le o experiență senzorială unică și personalizată.",
  },
  {
    name: "Partener de Încredere",
    description:
      "Prin angajamentul nostru de a aduce cele mai fine arome și tehnologii de difuzie de ultimă generație, ne dorim să redefinim modul în care percepem și interacționăm cu mediul înconjurător. Misiunea noastră este să fim partenerul de încredere al afacerilor din Moldova, ajutându-le să creeze atmosfere de neuitat și să îmbunătățească experiența clienților lor.",
  },
];

export default function Mission() {
  return (
    <section className="bg-cream-alt px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <h2 className="font-serif text-4xl font-medium sm:text-5xl">Misiunea noastră</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-strong">
              Scentio Milano este distribuitorul oficial Scent Company Milano în
              Republica Moldova.
            </p>
          </Reveal>
          <dl className="mt-12 border-t border-border">
            {features.map((feature) => (
              <Reveal key={feature.name} className="border-b border-border py-7">
                <dt className="mb-2 font-serif text-xl font-medium">{feature.name}</dt>
                <dd className="text-[15px] leading-relaxed text-muted-strong">{feature.description}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
        <Reveal className="lg:pt-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:sticky lg:top-28">
            <Image
              src={img}
              alt="Portret feminin înconjurat de flori, evocând emoția unui parfum"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
