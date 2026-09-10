"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faShieldHalved,
  faCertificate,
  faTv,
  faStar,
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
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

  const features = [
    {
      icon: faTrophy,
      title: "Hadiah & Trofi",
      description:
        "Total hadiah tunai puluhan juta rupiah, medali kejuaraan, sertifikat resmi, dan piala bergilir SAGATHA.",
      bgColor: "bg-[#0D816A]",
      iconColor: "text-[#FFFFFF]",
    },
    {
      icon: faShieldHalved,
      title: "Juri Profesional & Objektif",
      description:
        "Penilaian dilakukan transparan dan ketat oleh juri berpengalaman dan kompeten di masing-masing cabang lomba.",
      bgColor: "bg-[#136368]",
      iconColor: "text-[#1FB873]",
    },
    {
      icon: faTv,
      title: "Live Streaming",
      description:
        "Seluruh pertandingan utama disiarkan secara live stream sebagai bukti dan supporter dari keluarga dan seluruh penjuru sosial media.",
      bgColor: "bg-[#248999]",
      iconColor: "text-[#FFFFFF]",
    },
    {
      icon: faCertificate,
      title: "Sertifikat Penghargaan",
      description:
        "Setiap peserta mendapatkan sertifikat apresiasi resmi yang berharga untuk portofolio/CV prestasi akademis & non-akademis.",
      bgColor: "bg-[#1FB873]",
      iconColor: "text-[#091c1f]",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#091c1f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d2a2e] border border-[#1FB873] text-[#1FB873] text-xs font-bold uppercase tracking-widest mb-4">
            <FontAwesomeIcon icon={faStar} className="text-[#1FB873]" />
            <span>TENTANG EVENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Apa Itu <span className="text-[#1FB873]">SAGATHA IV 2026?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            <strong className="text-white">SAGATHA IV (Saga Thariq IV)</strong> adalah ajang kompetisi tahunan bergengsi yang mewadahi minat, bakat, serta kreativitas generasi muda di bidang olahraga, kebahasaan, sains, sasatra, dan keagamaan.
          </p>
        </div>

        {/* Info Highlights Card Grid */}
        <div
          ref={cardsRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl transition-all duration-300 shadow-xl border border-white/10 group bg-[#0d2a2e]"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center text-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform`}
              >
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement Box */}
        <div className="mt-16 bg-[#0d2a2e] border border-[#1FB873]/30 p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[#1FB873] font-extrabold text-sm uppercase tracking-wider">
                <FontAwesomeIcon icon={faBolt} />
                Visi &amp; Komitmen Kami
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Mencetak Generasi Berprestasi, Sportif &amp; Berkarakter
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Melalui kompetisi Futsal, Puisi, Mural, Speech, Olimpiade Matematika, dan Musabaqah Hifzhil Qur'an (MHQ), SAGATHA 2026 berkomitmen menghadirkan atmosfer kompetisi yang positif, sehat, dan memacu keunggulan intelektual serta spiritual.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="#lomba"
                className="btn-fun-primary text-center px-8 py-3.5 text-sm"
              >
                Pilih Cabang Lomba
              </a>
              <a
                href="#faq"
                className="btn-fun-secondary text-center px-8 py-3.5 text-sm"
              >
                Pertanyaan Umum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
