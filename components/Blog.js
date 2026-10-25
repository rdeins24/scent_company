import Link from "next/link";
import Image from "next/image";
import Reveal from "./ui/Reveal";
import { formatDateRo } from "../lib/format";

// Lista de articole de pe /blog (pagina are propriul H1, deci titlurile articolelor sunt h2).
// Cardurile sunt aceleași ca în components/home/BlogPreview.js (DESIGN-SYSTEM.md §12).
export default function Blog({ posts }) {
  return (
    <section className="bg-cream-alt px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {posts.map((post) => (
          <Reveal key={post.slug} as="article">
            <Link href={`/blog/${post.slug}`} className="group block hover:opacity-100">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-border">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-muted">
                <time dateTime={post.datePublished}>{formatDateRo(post.datePublished)}</time>
                <span aria-hidden className="h-px w-4 bg-coral" />
                <span>{post.category}</span>
              </div>
              <h2 className="mt-3 font-serif text-xl font-medium leading-snug transition-colors group-hover:text-muted-strong">
                {post.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-strong">{post.description}</p>
              <p className="mt-4 text-xs tracking-[0.04em] text-muted">{post.author}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
