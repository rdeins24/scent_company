// Bandă rulantă. Pista are două jumătăți identice și se deplasează cu -50%, deci bucla e continuă doar dacă
// o jumătate e mai lată decât ecranul. De aceea fiecare jumătate repetă lista de `repeat` ori.
// Doar prima apariție a listei e citită de cititoarele de ecran și de motoarele de căutare; restul e aria-hidden.
// `durationSeconds` = timpul pentru o trecere a listei; viteza rămâne aceeași indiferent de `repeat`.
export default function Marquee({ items, durationSeconds, itemClassName, spacingClassName = "pr-14", repeat = 5 }) {
  const half = Array.from({ length: repeat }, () => items).flat();

  return (
    <div className="marquee-track flex w-max" style={{ animationDuration: `${durationSeconds * repeat}s` }}>
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0">
          {half.map((item, i) => (
            <span
              key={i}
              className={`${itemClassName} ${spacingClassName}`}
              aria-hidden={copy > 0 || i >= items.length || undefined}
            >
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
