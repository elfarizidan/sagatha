"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hero", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "List Lomba", href: "#lomba" },
    { name: "Livestream", href: "#livestream" },
    { name: "Galeri", href: "#galeri" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3 shadow-2xl" : "bg-[#091c1f]/90 py-5 border-b border-white/10"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-wider text-white flex items-center gap-1.5">
                SAGATHA<span className="text-[#1FB873] text-sm font-extrabold px-2 py-0.5 rounded bg-[#136368] border border-[#248999]">2026</span>
              </span>
              <span className="text-[10px] text-[#248999] uppercase font-semibold tracking-widest -mt-0.5">
                Youth Competition Event
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0d2a2e] p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-white hover:text-[#1FB873] hover:bg-[#136368] rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button - Retains FontAwesome icon */}
          <div className="hidden md:block">
            <a
              href="#lomba"
              className="btn-fun-primary text-sm flex items-center gap-2"
            >
              <span>Daftar Sekarang</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-xl bg-[#0d2a2e] border border-white/10 text-white hover:bg-[#136368] transition"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-lg w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-[#091c1f] border-b border-[#0D816A] p-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base font-semibold text-white hover:bg-[#136368] rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#lomba"
              onClick={() => setIsOpen(false)}
              className="btn-fun-primary mt-3 text-center flex items-center justify-center gap-2 py-3"
            >
              <span>Daftar Sekarang</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
