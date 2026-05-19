"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/menu", label: "Menu" },
  { href: "/galleria", label: "Galleria" },
  { href: "/contatti", label: "Contatti" },
  { href: "/prenotazioni", label: "Prenotazioni" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary-light ${
                  pathname === link.href
                    ? "text-primary-light"
                    : "text-text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/prenotazioni"
              className="ml-4 px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-sm tracking-widest uppercase rounded transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Prenota
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-12 h-12 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-[#0a0a0a]/98 backdrop-blur-lg transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "80px" }}
      >
        <nav className="flex flex-col items-center justify-center gap-8 h-full pb-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg tracking-widest uppercase transition-all duration-300 hover:text-primary-light ${
                pathname === link.href
                  ? "text-primary-light"
                  : "text-text-muted"
              }`}
              style={{
                transitionDelay: `${i * 50}ms`,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
