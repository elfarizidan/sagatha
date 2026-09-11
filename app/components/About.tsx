"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "4 +", label: "Cabang Lomba" },
    { value: "500 +", label: "Peserta Pelajar" },
    { value: "Rp.10JT", label: "Total Hadiah" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-16 lg:py-0 relative overflow-hidden bg-[#0D816A] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Looping Video */}
          <div ref={imageRef} className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full aspect-[4/5] max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl group max-h-[55vh] lg:max-h-[65vh]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              >
                <source src="/content/About.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right Column: Content & Stats matching reference layout */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-sm sm:text-base font-semibold text-white/90 tracking-wide uppercase mb-2 sm:mb-3 block">
              Tentang Kami
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight mb-4 sm:mb-6">
              Wadah Prestasi &amp; Gelar Talenta Generasi Muda.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              <strong className="text-white">SAGATHA (Semarak Artefak &amp; Gelar Talenta) 2026</strong> adalah ajang kompetisi bergengsi tingkat pelajar yang mempertemukan talenta-talenta terbaik di bidang olahraga, kebahasaan, sains, dan keagamaan. Kami hadir untuk memacu semangat keunggulan, sportivitas, dan kreativitas generasi masa depan.
            </p>

            {/* 3 Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col min-w-0">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-none mb-2 break-words">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white/80 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
