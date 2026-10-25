// Antetul paginilor interioare fără fotografie: eyebrow, H1, descriere. Lasă loc meniului fix (pt-32).
export default function PageHero({ eyebrow, title, description, dark = false, children }) {
  return (
    <section
      className={`px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-14 lg:pb-24 ${dark ? "bg-ink text-cream" : "bg-cream text-ink"}`}
    >
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <p className={`mb-4 text-[13px] uppercase tracking-eyebrow ${dark ? "text-cream-muted" : "text-muted"}`}>
            {eyebrow}
            <span aria-hidden className="ml-3 inline-block h-px w-8 bg-coral align-middle" />
          </p>
        )}
        <h1 className="mb-6 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-cream-muted" : "text-muted-strong"}`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
