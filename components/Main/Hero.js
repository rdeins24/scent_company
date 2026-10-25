import Image from "next/image";
import Link from "next/link";
import img3 from "../../public/assets/main/interior3.jpg";
import { site } from "../../lib/site";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden bg-ink px-5 pb-12 pt-32 text-cream sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
      {/* Pe mobil poza e fundal (estompat); de la lg e coloana din dreapta. */}
      <div className="absolute inset-0 lg:left-auto lg:w-[40%]">
        <Image
          src={img3}
          alt="Interior minimalist luminos, cu arcade albe și lumină naturală"
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          placeholder="blur"
          fill
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/75 lg:bg-gradient-to-r lg:from-ink lg:via-ink/10 lg:to-transparent" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] -top-[20%] h-[60vw] max-h-[700px] w-[60vw] max-w-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(244, 238, 230, 0.12), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-3xl lg:max-w-[56%]">
        <p className="mb-5 text-[13px] uppercase tracking-eyebrow text-cream-muted">
          {site.tagline}
          <span aria-hidden className="ml-3 inline-block h-px w-8 bg-coral align-middle" />
        </p>
        <h1 className="mb-7 font-serif text-[2.4rem] font-medium leading-[1.06] tracking-[-0.01em] sm:text-6xl xl:text-[4.6rem]">
          Marketing olfactiv în Chișinău: parfumul semnătură al afacerii tale
        </h1>
        <p className="mb-9 max-w-xl text-[15px] font-light leading-relaxed text-cream-muted sm:text-lg">
          Explorează arta marketingului olfactiv și creează o atmosferă unică în
          spațiul tău. Cu expertiza noastră în arhitectura senzorială, aducem
          arome care evocă emoții și îmbunătățesc experiența clienților. Lasă-te
          ghidat de specialiștii noștri pentru a transforma fiecare colț într-o
          experiență memorabilă.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-sm bg-cream px-6 py-[14px] text-sm font-medium tracking-[0.03em] text-ink"
        >
          Consultație gratuită
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
