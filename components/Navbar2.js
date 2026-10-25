import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/echipamente", label: "Echipamente" },
  { href: "/blog", label: "Blog" },
];

export const Logo = ({ className = "" }) => (
  <span className={`font-serif tracking-[0.06em] ${className}`}>
    Scentio Milano<span className="text-coral"> .</span>
  </span>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, events } = useRouter();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    events.on("routeChangeStart", closeMenu);
    return () => events.off("routeChangeStart", closeMenu);
  }, [events]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header id="navbar" className="dore fixed inset-x-0 top-0 z-50 bg-cream text-ink">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6 sm:py-5 lg:px-10">
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Logo className="text-[17px] font-medium sm:text-xl" />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`whitespace-nowrap border-b pb-0.5 text-[13px] tracking-[0.04em] transition-colors hover:border-coral hover:opacity-100 ${
                isActive(link.href) ? "border-coral" : "border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className="whitespace-nowrap rounded-sm bg-ink px-5 py-2.5 text-[13px] font-medium tracking-[0.03em] text-cream"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="flex flex-col gap-[5px] p-2 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={menuOpen}
        >
          <span className={`h-[1.5px] w-6 bg-ink transition-transform ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-[1.5px] bg-ink transition-transform ${menuOpen ? "w-6 -translate-y-[6.5px] -rotate-45" : "w-4"}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="flex max-h-[calc(100vh-4rem)] flex-col overflow-y-auto border-b border-border bg-cream px-5 pb-6 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="border-b border-border/60 py-3 font-serif text-lg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-5 rounded-sm bg-ink px-5 py-3 text-center text-sm font-medium tracking-[0.03em] text-cream"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
