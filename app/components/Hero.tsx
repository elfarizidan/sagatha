"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faCalendarAlt,
  faUsers,
  faMedal,
  faTv,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

/* 
  ====================================================================
  COUNTDOWN TARGET DATE CONFIGURATION 
  Change this string to set your own target date and time:
  Format: "YYYY-MM-DDTHH:mm:ss" (e.g. "2026-11-14T07:30:05")
  ====================================================================
*/
export const EVENT_TARGET_DATE = "2026-11-14T07:30:05";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Helper function to calculate exact time remaining until EVENT_TARGET_DATE
  const calculateTimeLeft = () => {
    const target = new Date(EVENT_TARGET_DATE).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-36 sm:pt-44 md:pt-48 pb-20 overflow-hidden bg-[#248999]"
    >
      {/* Full-bleed Background Image from public/content */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/content/hero-bg.png"
          alt="SAGATHA Event Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto w-full">
        {/* Main Hero Title */}
        <h1
          ref={titleRef}
          className="mt-6 sm:mt-10 md:mt-12 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight max-w-5xl leading-none text-center mx-auto"
        >
          <span className="text-[#ffffff] block text-center">SAGATHA IV</span>
        </h1>

        {/* Tagline */}
        <p
          ref={subtitleRef}
          className="mt-6 text-lg sm:text-2xl text-white max-w-3xl font-medium leading-relaxed"
        >
          Rooted in Purpose, Growing with Passion
        </p>

        {/* Countdown Timer Display */}
        <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-6 bg-[#136368] p-4 sm:p-6 rounded-2xl border border-[#1FB873]/50 shadow-2xl">
          <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
            <span className="text-2xl sm:text-4xl font-black text-[#1FB873]">{timeLeft.days}</span>
            <span className="text-[10px] sm:text-xs text-white uppercase tracking-widest font-semibold mt-1">Hari</span>
          </div>
          <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
            <span className="text-2xl sm:text-4xl font-black text-white">{timeLeft.hours}</span>
            <span className="text-[10px] sm:text-xs text-white uppercase tracking-widest font-semibold mt-1">Jam</span>
          </div>
          <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
            <span className="text-2xl sm:text-4xl font-black text-[#1FB873]">{timeLeft.minutes}</span>
            <span className="text-[10px] sm:text-xs text-white uppercase tracking-widest font-semibold mt-1">Menit</span>
          </div>
          <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
            <span className="text-2xl sm:text-4xl font-black text-white">{timeLeft.seconds}</span>
            <span className="text-[10px] sm:text-xs text-white uppercase tracking-widest font-semibold mt-1">Detik</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#lomba"
            className="btn-fun-primary w-full sm:w-auto text-base sm:text-lg flex items-center justify-center gap-3 py-4 px-8"
          >
            <FontAwesomeIcon icon={faTrophy} className="text-white" />
            <span>Lihat Cabang Lomba</span>
          </a>
          <a
            href="#livestream"
            className="btn-fun-secondary w-full sm:w-auto text-base sm:text-lg flex items-center justify-center gap-3 py-4 px-8"
          >
            <FontAwesomeIcon icon={faTv} className="text-[#1FB873]" />
            <span>Tonton Livestream</span>
          </a>
        </div>

        {/* Stats Counter Bar */}
        <div
          ref={statsRef}
          className="mt-14 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-[#136368] border border-[#1FB873]/30"
        >
          <div className="flex flex-col items-center p-3">
            <FontAwesomeIcon icon={faMedal} className="text-[#1FB873] text-2xl mb-2" />
            <span className="text-2xl sm:text-3xl font-black text-white">Rp 25.000.000+</span>
            <span className="text-xs text-white/90 font-medium">Total Hadiah</span>
          </div>
          <div className="flex flex-col items-center p-3 border-l border-white/20">
            <FontAwesomeIcon icon={faTrophy} className="text-[#1FB873] text-2xl mb-2" />
            <span className="text-2xl sm:text-3xl font-black text-white">6 Cabang Lomba</span>
            <span className="text-xs text-white/90 font-medium">Futsal, Speech, OSN MTK, MHQ, Mural, Puisi</span>
          </div>
          <div className="flex flex-col items-center p-3 border-l border-white/20">
            <FontAwesomeIcon icon={faUsers} className="text-[#1FB873] text-2xl mb-2" />
            <span className="text-2xl sm:text-3xl font-black text-white">500+</span>
            <span className="text-xs text-white/90 font-medium">Target Peserta</span>
          </div>
          <div className="flex flex-col items-center p-3 border-l border-white/20">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-[#1FB873] text-2xl mb-2" />
            <span className="text-2xl sm:text-3xl font-black text-white">13-15 NOV 2026</span>
            <span className="text-xs text-white/90 font-medium">Tanggal Event</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-12 text-[#1FB873] hover:text-white transition flex flex-col items-center gap-2 animate-bounce"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-white">Scroll Kebawah</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </div>
    </section>
  );
}
