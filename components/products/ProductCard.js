import Image from "next/image";
import Link from "next/link";

// Card de produs (DESIGN-SYSTEM.md §12): imagine fără chenar, titlu serif, acoperire, link „Detalii”.
export default function ProductCard({ product, headingLevel = "h3" }) {
  const Heading = headingLevel;
  const href = `/echipamente/${product.slug}`;

  return (
    <article className="group flex flex-col">
      <Link
        href={href}
        className="relative block aspect-square overflow-hidden rounded-sm bg-cream-alt hover:opacity-100"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <Heading className="mt-5 font-serif text-xl font-medium">
        <Link href={href}>{product.name}</Link>
      </Heading>
      {product.coverage && (
        <p className="mt-1.5 text-sm text-muted-strong">
          <span className="text-muted">Acoperire:</span> {product.coverage}
        </p>
      )}
      <Link href={href} className="link-arrow mt-4 self-start text-sm" aria-label={`Detalii despre ${product.name}`}>
        Detalii →
      </Link>
    </article>
  );
}
