// Bandă rulantă. Elementele apar de două ori pentru o buclă continuă; a doua copie e aria-hidden,
// ca cititoarele de ecran și motoarele de căutare să citească fiecare element o singură dată.
export default function Marquee({ items, durationSeconds, itemClassName, spacingClassName = "pr-14" }) {
  return (
    <div className="marquee-track flex w-max" style={{ animationDuration: `${durationSeconds}s` }}>
      {[false, true].map((isClone) => (
        <div key={String(isClone)} className="flex shrink-0" aria-hidden={isClone || undefined}>
          {items.map((item) => (
            <span key={item} className={`${itemClassName} ${spacingClassName}`}>
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
