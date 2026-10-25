import Reveal from "../ui/Reveal";

const steps = [
  {
    id: 1,
    title: "Evaluarea Locației",
    description: "Echipa noastră de arhitecți senzoriali efectuează o analiză completă a spațiului unde va fi implementat marketingul olfactiv. Aceasta include evaluarea fluxului de trafic și a modului de utilizare pentru a maximiza impactul mirosului."
  },
  {
    id: 2,
    title: "Înțelegerea Obiectivelor",
    description: "Lucrăm strâns cu clienții noștri pentru a identifica și înțelege obiectivele lor legate de marketingul olfactiv. Acest lucru ne permite să aliniem strategia noastră cu nevoile specifice."
  },
  {
    id: 3,
    title: "Identificarea Zonelor Cheie",
    description: "Folosind cunoștințele noastre specializate, identificăm zonele cheie din spațiu unde instalarea difuzoarelor de arome va avea cel mai mare impact."
  },
  {
    id: 4,
    title: "Planificare și Implementare",
    description: "Dezvoltăm un plan detaliat pentru instalarea sistemelor de difuzare a aromelor, asigurând o implementare fără probleme."
  },
  {
    id: 5,
    title: "Întreținere Inclusă",
    description: "Reumplerea, verificarea echipamentelor și ajustarea intensității sunt incluse, pentru o aromă constantă și de înaltă calitate în spațiu."
  },
  {
    id: 6,
    title: "Îmbunătățiri Continue și Ajustări",
    description: "Echipa noastră este pregătită să facă ajustări în funcție de rezultate și feedback pentru a îmbunătăți strategia în timp."
  },
];

// Procesul în rânduri numerotate (stilul „how it works”).
export default function Process() {
  return (
    <section className="bg-cream px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-12 font-serif text-3xl font-medium tracking-[0.04em] sm:text-4xl">ARHITECTURĂ OLFACTIVĂ</h2>
        </Reveal>
        <div className="border-t border-border">
          {steps.map((step) => (
            <Reveal key={step.id}>
              <div className="grid grid-cols-[2.5rem_1fr] gap-x-6 gap-y-2 border-b border-border py-7 sm:grid-cols-[3rem_minmax(180px,280px)_1fr] sm:items-baseline sm:gap-x-10">
                <span className="font-serif text-base text-muted">{String(step.id).padStart(2, "0")}</span>
                <h3 className="font-serif text-xl font-medium">{step.title}</h3>
                <p className="col-span-2 text-[15px] leading-relaxed text-muted-strong sm:col-span-1">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
