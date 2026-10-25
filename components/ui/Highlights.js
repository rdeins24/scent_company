import Reveal from "./Reveal";

// Rândul de repere (stat row). Fiecare element are `value` și, opțional, `label`:
// - fapt:  { value: "Instalare și întreținere incluse" }
// - cifră: { value: "120+", label: "spații aromatizate în Moldova" }  → value apare mare, label dedesubt.
export default function Highlights({ items, dark = false }) {
  return (
    <div
      className={`grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4 ${dark ? "border-line-dark/40" : "border-border"}`}
    >
      {items.map((item) => (
        <Reveal
          key={item.value}
          className={`border-b py-7 sm:pr-8 lg:border-b-0 lg:py-8 ${dark ? "border-line-dark/40" : "border-border"}`}
        >
          <span aria-hidden className="mb-5 block h-px w-8 bg-coral" />
          <p
            className={`font-serif font-medium leading-snug ${
              item.label ? "text-6xl sm:text-7xl" : "text-[1.4rem] sm:text-2xl"
            } ${dark ? "text-cream" : "text-ink"}`}
          >
            {item.value}
          </p>
          {item.label && (
            <p className={`mt-3 max-w-[26ch] text-base leading-relaxed ${dark ? "text-cream-muted" : "text-muted-strong"}`}>
              {item.label}
            </p>
          )}
        </Reveal>
      ))}
    </div>
  );
}
