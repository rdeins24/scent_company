import React from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import Highlights from "../ui/Highlights";

const DiscoverSection = ({ title, description, buttonText, highlights }) => {
  return (
    <section className="bg-cream px-5 py-20 text-ink sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 grid gap-10 sm:mb-24 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="max-w-2xl font-serif text-4xl font-medium leading-[1.1] sm:text-5xl">{title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-strong">{description}</p>
          </div>
          <Link
            href="/contact"
            className="self-start rounded-sm bg-ink px-6 py-[14px] text-sm font-medium tracking-[0.03em] text-cream lg:self-end"
          >
            {buttonText}
          </Link>
        </Reveal>
        {highlights?.length > 0 && <Highlights items={highlights} />}
      </div>
    </section>
  );
};

export default DiscoverSection;
