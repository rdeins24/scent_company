import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (window.scrollY > 0) {
        navbar.classList.add("bg-opacity-70"); 
      } else {
        navbar.classList.remove("bg-opacity-80");
      }
    };

  
    window.addEventListener("scroll", handleScroll);

    return () => {
   
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 p-4 bg-black text-white transition-all duration-300 h-16"
    >
      {/* Increased the height to h-16 */}
      <div className="max-w-[1240px] mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/" onClick={closeMenu}>
            GUT UI
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/services"
            onClick={closeMenu}
            className="hover:underline"
          >
            Services
          </Link>
          <Link href="/contact" onClick={closeMenu} className="hover:underline">
            Contact
          </Link>
          <Link href="#" onClick={closeMenu} className="hover:underline">
            About
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
            <div className="text-xl font-bold text-white"><Link href="/"   onClick={closeMenu}>GUT UI</Link></div>
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
          <div className="text-white text-xl mt-8 flex flex-col space-y-4 pl-5">
            <Link
              href="/services"
              onClick={closeMenu}
              className="hover:underline"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="hover:underline"
            >
              Contact
            </Link>
            <Link href="/contact" onClick={closeMenu} className="hover:underline">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
