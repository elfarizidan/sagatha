"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        const aboutOffset = aboutEl.offsetTop - 100;
        if (window.scrollY >= aboutOffset) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        if (window.scrollY > window.innerHeight * 0.8) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang SAGATHA", href: "#about" },
    { name: "Cabang Lomba", href: "#lomba" },
    { name: "Galeri Lomba", href: "#galeri" },
    { name: "Pertanyaan (FAQ)", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`flex justify-between w-full fixed top-0 z-[60] transition-all duration-500 h-[60px] md:h-[72px] ${scrolled ? "bg-[#091c1f] shadow-2xl" : "bg-transparent"
          }`}
      >
        <div className="w-full px-4 lg:px-[60px] flex items-center justify-between py-2 md:py-4 lg:py-5">
          {/* Left Side: Animated Hamburger & Brand Logos */}
          <div className="flex items-center gap-x-4 lg:gap-x-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="group relative flex h-11 w-11 cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FB873]"
            >
              {/* Normal State Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 120 120"
                className="text-white lg:w-6 lg:h-6 w-[28px] h-[28px] cursor-pointer group-hover:opacity-0 transition-opacity duration-300"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                  d="M20 60h80M20 40h80M20 80h40"
                />
              </svg>

              {/* Group Hover State Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 120 120"
                className="text-[#1FB873] lg:w-6 lg:h-6 w-[28px] h-[28px] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1 left-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                  d="M20 60h80M20 40h40M20 80h60"
                />
              </svg>
            </button>

            {/* Brand Logos (logo1.png & logo2.PNG) */}
            <a
              href="#hero"
              className="cursor-pointer inline-flex items-center gap-2 lg:gap-3 absolute lg:static left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 top-1/2 lg:top-0 -translate-y-1/2 lg:translate-y-0"
            >
              <Image
                src="/content/logo1.png"
                alt="Logo SAGATHA 1"
                width={44}
                height={44}
                className="h-9 w-9 lg:h-11 lg:w-11 object-contain"
                priority
              />
              <Image
                src="/content/logo2.PNG"
                alt="Logo SAGATHA 2"
                width={44}
                height={44}
                className="h-9 w-9 lg:h-11 lg:w-11 object-contain"
                priority
              />
            </a>
          </div>

          {/* Right Side: CTA Button */}
          <div className="flex items-center gap-x-3 lg:gap-x-4">
            <a
              href="#lomba"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition-all duration-300 bg-[#0D816A] border border-[#1FB873] text-white hover:bg-[#1FB873] hover:text-[#091c1f] uppercase px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm shadow-lg gap-2"
            >
              <span>Daftar</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
          </div>
        </div>
      </header>

      {/* Slide-over Navigation Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[70] bg-[#091c1f]/95 backdrop-blur-xl animate-in fade-in duration-300 flex flex-col justify-between p-6 sm:p-12"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <Image
                src="/content/logo1.png"
                alt="Logo 1"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <Image
                src="/content/logo2.PNG"
                alt="Logo 2"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 rounded-full bg-[#136368] text-white hover:bg-[#1FB873] hover:text-[#091c1f] flex items-center justify-center transition"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
          </div>

          <div className="flex flex-col gap-6 my-auto max-w-xl">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl sm:text-4xl font-extrabold text-white/90 hover:text-[#1FB873] transition-all flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#248999] group-hover:text-[#1FB873]">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
            <span>&copy; 2026 SAGATHA. Semarak Artefak &amp; Gelar Talenta.</span>
            <a
              href="#lomba"
              onClick={() => setIsOpen(false)}
              className="btn-fun-primary px-6 py-2.5 text-xs text-center w-full sm:w-auto"
            >
              Pilih Cabang Lomba
            </a>
          </div>
        </div>
      )}
    </>
  );
}
