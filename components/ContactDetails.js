import { FaInstagram } from "react-icons/fa";
import { site, fullAddress } from "../lib/site";

const labelClass = "mb-1 block text-xs uppercase tracking-[0.12em] text-muted";

// Antetul paginii de contact: H1 + invitație în stânga, datele de contact în dreapta.
function ContactDetails() {
  return (
    <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-14 lg:pb-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        <div>
          <p className="mb-4 text-[13px] uppercase tracking-eyebrow text-muted">
            Consultație gratuită
            <span aria-hidden className="ml-3 inline-block h-px w-8 bg-coral align-middle" />
          </p>
          <h1 className="mb-6 font-serif text-4xl font-medium leading-[1.08] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
            Contactează-ne
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-strong sm:text-lg">
            Suntem aici pentru tine. Dacă ai întrebări sau vrei să afli cum ar
            arăta parfumul semnătură al afacerii tale, programează o consultație
            gratuită. Venim la tine, testăm aroma în spațiul tău și îți propunem
            soluția potrivită.
          </p>
        </div>

        <div className="lg:pt-10">
          <h2 className="mb-6 text-[13px] font-normal uppercase tracking-eyebrow text-muted">CONTACTE</h2>
          <address className="not-italic">
            <ul className="divide-y divide-border border-y border-border">
              <li className="py-4">
                <span className={labelClass}>Email</span>
                <a href={`mailto:${site.email}`} className="font-serif text-xl">
                  {site.email}
                </a>
              </li>
              <li className="py-4">
                <span className={labelClass}>Telefon</span>
                <a href={site.phoneHref} className="font-serif text-xl">
                  {site.phone}
                </a>
              </li>
              <li className="py-4">
                <span className={labelClass}>Adresa</span>
                <p className="text-[15px] leading-relaxed text-muted-strong">{fullAddress}</p>
              </li>
              <li className="py-4">
                <span className={labelClass}>Program</span>
                <p className="text-[15px] leading-relaxed text-muted-strong">{site.hours.label}</p>
              </li>
            </ul>
            <a
              href={site.instagram}
              className="mt-6 inline-flex items-center gap-3 text-sm text-muted-strong transition-colors hover:text-coral hover:opacity-100"
              aria-label="Scentio Milano pe Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={22} aria-hidden />
              <span aria-hidden>@scentio_milano</span>
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
