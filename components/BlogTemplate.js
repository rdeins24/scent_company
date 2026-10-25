import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateRo } from "../lib/format";

const BlogTemplate = ({ post }) => {
  const { title, datePublished, category, author, image, imageAlt, intro, sections, related } = post;

  return (
    <article className="px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-14">
      <header className="mx-auto max-w-3xl">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-muted">
          <Link href="/blog">Blog</Link>
          <span aria-hidden className="h-px w-4 bg-coral" />
          <span>{category}</span>
        </p>
        <h1 className="mb-6 font-serif text-4xl font-medium leading-[1.08] tracking-[-0.01em] sm:text-5xl">{title}</h1>
        <p className="text-sm text-muted">
          <time dateTime={datePublished}>{formatDateRo(datePublished)}</time> · {author}
        </p>
      </header>

      <div className="relative mx-auto my-12 aspect-video w-full max-w-5xl overflow-hidden rounded-sm sm:my-16">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          placeholder="blur"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-3xl">
        <p className="mb-14 font-serif text-2xl leading-snug text-ink sm:text-[1.7rem]">{intro}</p>

        {sections.map((section) => (
          <section key={section.heading} className="mb-12">
            <h2 className="mb-5 font-serif text-2xl font-medium sm:text-3xl">{section.heading}</h2>
            {section.paragraphs?.map((text) => (
              <p key={text} className="mb-4 text-base leading-relaxed text-muted-strong sm:text-[17px]">
                {text}
              </p>
            ))}
            {section.items && (
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-4 text-base leading-relaxed text-muted-strong sm:text-[17px]">
                    <span aria-hidden className="mt-[0.75em] h-px w-4 shrink-0 bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <aside className="mt-16 border-t border-border pt-12">
          <h2 className="mb-6 text-[13px] font-normal uppercase tracking-eyebrow text-muted">Află mai multe</h2>
          <ul className="mb-12 divide-y divide-border border-y border-border">
            {related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between gap-4 py-4 font-serif text-lg transition-colors hover:text-muted-strong hover:opacity-100"
                >
                  {link.label} <span aria-hidden className="text-muted">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-ink px-6 py-[14px] text-sm font-medium tracking-[0.03em] text-cream"
          >
            Programează o consultație gratuită
          </Link>
        </aside>
      </div>
    </article>
  );
};

export default BlogTemplate;
