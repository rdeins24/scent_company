import { useState } from "react";
import Image from "next/image";

// Galerie: imaginea principală + miniaturi (variante de culoare, dacă există)
export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream-alt">
        <Image
          key={current.src.src}
          src={current.src}
          alt={current.alt}
          fill
          priority={active === 0}
          placeholder="blur"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap items-center gap-3" role="group" aria-label={`Variante ${name}`}>
          {images.map((image, index) => (
            <button
              key={image.src.src}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              className={`relative h-20 w-16 overflow-hidden rounded-sm border transition-colors ${
                index === active ? "border-ink" : "border-border hover:border-line-dark"
              }`}
            >
              <Image src={image.src} alt={image.alt} fill sizes="64px" className="object-cover" />
            </button>
          ))}
          {current.variant && (
            <p className="ml-2 text-xs uppercase tracking-[0.12em] text-muted">Varianta: {current.variant}</p>
          )}
        </div>
      )}
    </div>
  );
}
