"use client";

import { useEffect, useRef, useState } from "react";
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
      {/* Full-bleed Background Looping Video from public/content */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/content/Hero.mp4" type="video/mp4"/>
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto w-full">
        {/* Main Hero Title */}
        <h1
          ref={titleRef}
          className="mt-6 sm:mt-10 md:mt-12 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight max-w-5xl leading-none text-center mx-auto"
        >
          <span className="text-[#ffffff] block text-center">SAGATHA IV</span>
        </h1>


        {/* Animated Rolling Slot Countdown Display (Without Background) */}
        <div className="mt-8 sm:mt-12 flex items-center justify-center gap-2 sm:gap-4 md:gap-6 bg-transparent py-2 px-2 sm:px-6">
          <TimePart value={timeLeft.days} colorClass="text-[#1FB873]" />
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white/40 select-none">
            :
          </div>
          <TimePart value={timeLeft.hours} colorClass="text-white" />
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white/40 select-none">
            :
          </div>
          <TimePart value={timeLeft.minutes} colorClass="text-[#1FB873]" />
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white/40 select-none">
            :
          </div>
          <TimePart value={timeLeft.seconds} colorClass="text-white" />
        </div>
      </div>
    </section>
  );
}

/* Helper Component for Rolling Digit Slot Animation */
function DigitSlot({ digit, colorClass = "text-[#1FB873]" }: { digit: number; colorClass?: string }) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="h-12 sm:h-16 md:h-20 lg:h-24 overflow-hidden relative inline-block select-none">
      <div
        className="transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col items-center"
        style={{ transform: `translateY(-${digit * 10}%)` }}
      >
        {digits.map((num) => (
          <div
            key={num}
            className={`h-12 sm:h-16 md:h-20 lg:h-24 flex items-center justify-center font-black ${colorClass} text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none px-0.5 sm:px-1`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Helper Component for Each Time Part (Days, Hours, Minutes, Seconds) */
function TimePart({ value, colorClass = "text-white" }: { value: number; colorClass?: string }) {
  const padded = String(Math.max(0, value)).padStart(2, "0");
  const digitChars = padded.split("");

  return (
    <div className="flex items-center justify-center">
      {digitChars.map((ch, idx) => (
        <DigitSlot key={idx} digit={parseInt(ch, 10) || 0} colorClass={colorClass} />
      ))}
    </div>
  );
}
