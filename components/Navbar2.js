import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarActivated, setNavbarActivated] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setNavbarActivated(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => {
      setNavbarActivated(window.scrollY > 0);
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 p-4 text-white transition-all duration-300 h-16 ${
        navbarActivated ? "bg-black bg-opacity-70" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/" onClick={closeMenu}>
            GUT UI<span className="text-red-600 text-xl"> .</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" onClick={closeMenu} className="hover:underline">
            Despre 
          </Link>
          <Link
            href="/services"
            onClick={closeMenu}
            className="hover:underline"
          >
            Services
          </Link>
          <Link href="/Contact" onClick={closeMenu} className="hover:underline">
            Contact
          </Link>
      
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black">
          <div className="max-w-[1240px] mx-auto p-4 flex items-center justify-between">
            <div className="text-xl font-bold text-white ">
              <Link href="/" onClick={closeMenu}>
              GUT UI<span className="text-red-600 text-xl"> .</span>
              </Link>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="text-white text-5xl mt-8 flex flex-col space-y-7 pl-5 items-center ">
          <Link
              href="/"
              onClick={closeMenu}
              className="hover:underline"
            >
              Despre 
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="hover:underline"
            >
              Servicii
            </Link>
            <Link
              href="/Contact"
              onClick={closeMenu}
              className="hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
