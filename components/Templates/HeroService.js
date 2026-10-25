import Image from "next/image";
import Link from "next/link";
import React from "react";

// Hero cu fotografie pentru paginile de segment: text pe ink în stânga, fotografia în dreapta (de la lg).
// Pe mobil fotografia apare sub text, întreagă.
const HeroSection = ({ eyebrow, imageSrc, imageAlt, title, description, buttonText, buttonHref }) => {
  return (
    <section className="bg-ink text-cream lg:grid lg:min-h-[88vh] lg:grid-cols-[1.15fr_1fr]">
      <div className="flex flex-col justify-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
        {eyebrow && (
          <p className="mb-5 text-[13px] uppercase tracking-eyebrow text-cream-muted">
            {eyebrow}
            <span aria-hidden className="ml-3 inline-block h-px w-8 bg-coral align-middle" />
          </p>
        )}
        <h1 className="mb-7 max-w-2xl font-serif text-[2.2rem] font-medium leading-[1.08] tracking-[-0.01em] sm:text-5xl xl:text-[3.6rem]">
          {title}
        </h1>
        <p className="mb-9 max-w-xl text-[15px] font-light leading-relaxed text-cream-muted sm:text-lg">{description}</p>
        <Link
          href={buttonHref}
          className="inline-block self-start rounded-sm bg-cream px-6 py-[14px] text-sm font-medium tracking-[0.03em] text-ink"
        >
          {buttonText}
        </Link>
      </div>

      <div className="relative h-[52vh] w-full lg:h-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 46vw, 100vw"
          placeholder="blur"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
