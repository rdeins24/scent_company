import Link from "next/link";
import { useRouter } from "next/router";
import { FaInstagram } from "react-icons/fa";
import { site, fullAddress } from "../lib/site";
import { getSegments } from "../lib/content";
import { Logo } from "./Navbar2";

const usefulLinks = [
  { name: "Acasă", href: "/" },
  { name: "Servicii", href: "/servicii" },
  { name: "Echipamente", href: "/echipamente" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const columnTitle = "mb-4 text-[11px] uppercase tracking-[0.12em] text-cream-muted/70";
const linkClass = "transition-colors hover:text-cream hover:opacity-100";

function Footer1() {
  const { locale } = useRouter();
  const segments = getSegments(locale);

  return (
    <footer className="dore bg-ink px-5 py-14 text-cream sm:px-8 lg:px-14 lg:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/">
              <Logo className="text-lg text-cream" />
            </Link>
            <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-cream-muted">{site.tagline}</p>
            <address className="mt-6 space-y-2 text-sm not-italic leading-relaxed text-cream-muted">
              <p>{fullAddress}</p>
              <p>
                <a href={site.phoneHref} className={linkClass}>
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className={columnTitle}>Program</h2>
            <p className="text-[13px] leading-relaxed text-cream-muted">{site.hours.label}</p>
          </div>

          <nav aria-label="Domenii">
            <h2 className={columnTitle}>Aromatizare pentru</h2>
            <ul className="flex flex-col gap-2.5 text-[13px] text-cream-muted">
              {segments.map((segment) => (
                <li key={segment.slug}>
                  <Link href={`/${segment.slug}`} className={linkClass}>
                    {segment.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Link-uri utile">
            <h2 className={columnTitle}>Link-uri utile</h2>
            <ul className="flex flex-col gap-2.5 text-[13px] text-cream-muted">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line-dark/30 pt-8">
          <p className="text-xs text-cream-muted/70" suppressHydrationWarning>
            © {new Date().getFullYear()} {site.name}
          </p>
          <a
            href={site.instagram}
            className="text-cream-muted transition-colors hover:text-coral hover:opacity-100"
            aria-label="Scentio Milano pe Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
