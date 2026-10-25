import Image from "next/image";
import Reveal from "../ui/Reveal";
import img1 from "../../public/assets/img/interior1.jpg";

const pillars = [
  { title: "SURPRINDE", text: "cu experiențe multi-senzoriale" },
  { title: "EVOCĂ", text: "stări și acțiuni" },
  { title: "CONSTRUIEȘTE", text: "conexiuni profunde" },
];

export default function ExampleComponent() {
  return (
    <section className="bg-cream px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={img1}
              alt="Spațiu interior minimalist cu bonsai și lumină naturală"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-3xl font-medium tracking-[0.04em] sm:text-4xl">FASCINAȚIA UNEI FRAGANȚE</h2>
          <p className="mt-3 font-serif text-2xl italic text-muted-strong sm:text-3xl">pentru a-ți crea identitatea</p>
          <p className="mt-8 text-base leading-relaxed text-muted-strong sm:text-lg">
            Forța persuasivă a unei esențe deschide porțile către universuri
            ascunse, pline de senzații inconștiente, dorințe și amintiri
            învăluitoare. Crearea unui logo olfactiv dezvăluie identitatea
            brandului tău prin simțuri și îl transformă într-o emoție puternică,
            capabilă să depășească raționalul. Aceasta este o călătorie de
            neuitat, care cucerește și convinge fără cuvinte.
          </p>

          <div className="mt-12 grid grid-cols-1 border-t border-border sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border-b border-border py-6 sm:border-b-0 sm:pr-6">
                <span aria-hidden className="mb-4 block h-px w-6 bg-coral" />
                <h3 className="font-serif text-lg font-medium tracking-[0.06em]">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-strong">{pillar.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
