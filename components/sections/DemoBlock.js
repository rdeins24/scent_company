import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import img from "../../public/bawl.webp";

const c = {
  image: img,
  imageAlt: "Mâini care țin un bol cu petale de flori uscate, ingrediente de parfumerie",
  title: "CREEAZĂ EXPERIENȚE EMOȚIONALE CU AROMA SCENTIO MILANO",
  lead: "Marketingul olfactiv te poate ajuta să creezi experiențe pozitive, captivante și unice. Solicită o demonstrație.",
  cta: "Contactează-ne",
  note: "Experiența noastră ne permite să creăm arome personalizate care să răspundă nevoilor fiecărui business. Solicită un test gratuit de parfumare.",
};

// Secțiune închisă (ink): imagine + invitația la demonstrație. Folosită pe homepage, servicii, segmente, echipamente și contact.
export default function DemoBlock() {
  return (
    <section className="bg-ink px-5 py-20 text-cream sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src={c.image}
              alt={c.imageAlt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mb-6 text-[13px] font-normal tracking-eyebrow text-cream-muted">{c.title}</h2>
          <p className="font-serif text-3xl font-medium leading-[1.15] text-cream sm:text-[2.6rem]">{c.lead}</p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-sm border border-cream px-6 py-[14px] text-sm tracking-[0.03em] text-cream"
          >
            {c.cta}
          </Link>
          <p className="mt-10 max-w-lg text-base leading-relaxed text-cream-muted">{c.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
