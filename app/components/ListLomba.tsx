"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faMicrophone,
  faCalculator,
  faBookQuran,
  faUsers,
  faMoneyBillWave,
  faTimes,
  faCheckCircle,
  faInfoCircle,
  faArrowRight,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Lomba {
  id: string;
  title: string;
  category: string;
  icon: any;
  image: string;
  target: string;
  prize: string;
  fee: string;
  date: string;
  description: string;
  rules: string[];
  contactPerson: string;
  whatsappNumber: string;
  driveUrl?: string;
}

export default function ListLomba() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedLomba, setSelectedLomba] = useState<Lomba | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const lombaList: Lomba[] = [
    {
      id: "futsal",
      title: "Futsal",
      category: "Olahraga & Sportivitas",
      icon: faFutbol,
      image: "/content/lomba-futsal.png",
      target: "SMP / Sederajat",
      prize: "Rp 8.000.000 + Trofi & Medali",
      fee: "Rp 250.000 / Tim",
      date: "20 - 21 Oktober 2026",
      description:
        "Turnamen futsal antar pelajar tingkat regional. Pertandingan sengit, lapangan standar nasional, wasit berlisensi PSSI, dan atmosfer pendukung yang meriah!",
      rules: [
        "Sistem gugur (Knockout system) 2x15 menit",
        "Setiap tim terdiri dari 5 pemain inti dan maksimal 7 pemain cadangan",
        "Wajib menggunakan Jersey bernomor punggung dan Shin Guard",
        "Melampirkan Kartu Pelajar aktif saat registrasi ulang",
      ],
      contactPerson: "via form",
      whatsappNumber: "6281234567890",
      driveUrl: "https://drive.google.com",
    },
    {
      id: "speech",
      title: "Pidato Bahasa Inggris",
      category: "Kebahasaan & Public Speaking",
      icon: faMicrophone,
      image: "/content/lomba-speech.png",
      target: "SMP / Sederajat",
      prize: "Rp 5.000.000 + Sertifikat & Trofi",
      fee: "Rp 100.000 / Peserta",
      date: "21 Oktober 2026",
      description:
        "Ajang unjuk kebolehan public speaking dalam Bahasa Inggris & Indonesia. Sampaikan gagasan inspiratifmu mengenai kepemudaan dan teknologi!",
      rules: [
        "Tema pidato: 'Youth Leadership & Innovation in Digital Era'",
        "Durasi pidato 5-7 menit per peserta",
        "Penilaian meliputi: Oratory skill, Pronunciation, Content Structure, & Confidence",
        "Tidak diperkenankan membaca teks secara penuh saat tampil",
      ],
      contactPerson: "Panitia Speech (Kak Nadia)",
      whatsappNumber: "6281234567891",
      driveUrl: "https://drive.google.com",
    },
    {
      id: "olim-mtk",
      title: "OSN",
      category: "Akademik & Sains",
      icon: faCalculator,
      image: "/content/lomba-olim-mtk.png",
      target: "SMP / Sederajat",
      prize: "Rp 6.000.000 + Piala & Medali",
      fee: "Rp 85.000 / Peserta",
      date: "20 Oktober 2026",
      description:
        "Uji ketajaman logika dan pemecahan masalah dalam Olimpiade Matematika SAGATHA dengan soal standar olimpiade nasional (OSN).",
      rules: [
        "Terdiri dari 2 Babak: Penyisihan (Pilihan Ganda & Isian) dan Final (Essay & Problem Solving)",
        "Peserta dilarang menggunakan kalkulator atau alat bantu elektronik",
        "Keputusan dewan juri bersifat mutlak dan tidak dapat diganggu gugat",
      ],
      contactPerson: "Panitia Olim (Kak Fikri)",
      whatsappNumber: "6281234567892",
      driveUrl: "https://drive.google.com",
    },
    {
      id: "mhq",
      title: "MHQ",
      category: "Keagamaan & Keislaman",
      icon: faBookQuran,
      image: "/content/lomba-mhq.png",
      target: "SMP / Sederatat",
      prize: "Rp 6.000.000 + Beasiswa & Trofi",
      fee: "Rp 90.000 / Peserta",
      date: "22 Oktober 2026",
      description:
        "Lomba hafalan Al-Qur'an untuk membentuk generasi penghafal Qur'an yang mutqin, fasih berhujjah, serta berakhlak mulia.",
      rules: [
        "Kategori Lomba: Juz 1-3 & Juz 1-5",
        "Kriteria Penilaian: Tajwid, Fashohah, Kelancaran Hafalan (Hifdz), dan Lagu/Irama",
        "Setiap peserta mengambil amplop soal acak saat pemanggilan di panggung main stage",
      ],
      contactPerson: "Panitia MHQ (Ust. Rahmat)",
      whatsappNumber: "6281234567893",
      driveUrl: "https://drive.google.com",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current.children,
          { opacity: 0, scale: 0.95, y: 30 },
          {
            opacity: 1,
            scale: 1,
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

  return (
    <section
      id="lomba"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center py-16 lg:py-0 relative overflow-hidden bg-[#091c1f] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight relative pb-4 uppercase">
            List Lomba <span className="text-[#1FB873]">SAGATHA 2026</span>
          </h2>
        </div>
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row gap-4 lg:gap-6 min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] max-h-[65vh] w-full"
        >
          {lombaList.map((lomba, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={lomba.id}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end p-6 sm:p-8 bg-[#091c1f] group transform-gpu ${isActive
                    ? "flex-[3.5] lg:flex-[4] min-h-[380px] md:min-h-0"
                    : "flex-1 min-h-[140px] md:min-h-0"
                  }`}
              >
                <div
                  className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${lomba.image})` }}
                />

                <div className="absolute -inset-[1px] bg-gradient-to-t from-black via-black/85 via-50% to-transparent z-10 pointer-events-none" />

                <div className="relative z-20 transition-all duration-500 ease-in-out">
                  <h3
                    className={`font-black text-white transition-all duration-300 ${isActive
                        ? "text-2xl sm:text-3xl lg:text-4xl mb-2 text-[#1FB873]"
                        : "text-lg sm:text-xl lg:text-2xl text-white/90 group-hover:text-white"
                      }`}
                  >
                    {lomba.title}
                  </h3>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive
                        ? "max-h-[300px] opacity-100 translate-y-0 mt-2"
                        : "max-h-0 opacity-0 translate-y-6 md:translate-y-8 pointer-events-none"
                      }`}
                  >
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 max-w-xl">
                      {lomba.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-white/90 font-medium mb-6 pt-3 border-t border-white/15">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#1FB873] font-bold uppercase tracking-wider text-[11px]">Total Hadiah:</span>
                        <span>{lomba.prize}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="text-[#248999]" />
                        <span>{lomba.fee}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faUsers} className="text-white/70" />
                        <span>{lomba.target}</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedLomba(lomba);
                      }}
                      className="btn-fun-primary text-xs sm:text-sm py-2.5 px-6 inline-flex items-center gap-2 shadow-lg cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      <span>Lihat Detail &amp; Syarat</span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedLomba && (
        <div
          onClick={() => setSelectedLomba(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#091c1f]/90 backdrop-blur-sm animate-in fade-in cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0d2a2e] border border-[#1FB873] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative cursor-default"
          >
            <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-[#136368]">
              <Image
                src={selectedLomba.image}
                alt={selectedLomba.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#091c1f]/90 p-3 rounded-xl border border-[#1FB873]">
                <h3 className="text-2xl font-black text-white">{selectedLomba.title}</h3>
              </div>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              {selectedLomba.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
              <div className="bg-[#136368] p-3 rounded-xl border border-white/10">
                <span className="text-[11px] text-white/70 block font-semibold uppercase">Total Hadiah</span>
                <span className="text-sm font-bold text-white">{selectedLomba.prize}</span>
              </div>
              <div className="bg-[#136368] p-3 rounded-xl border border-white/10">
                <span className="text-[11px] text-white/70 block font-semibold uppercase">Biaya Pendaftaran</span>
                <span className="text-sm font-bold text-white">{selectedLomba.fee}</span>
              </div>
              <div className="bg-[#136368] p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[11px] text-white/70 block font-semibold uppercase">Pelaksanaan</span>
                <span className="text-sm font-bold text-white">{selectedLomba.date}</span>
              </div>
            </div>

            <div className="mb-6">
              <ul className="space-y-2">
                {selectedLomba.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1FB873] mt-2 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href={selectedLomba.driveUrl || "https://drive.google.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fun-secondary py-3 px-4 text-center text-sm flex items-center justify-center gap-2 hover:border-[#1FB873] hover:text-[#1FB873]"
              >
                <span>Buku Syarat</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs opacity-70" />
              </a>
              <a
                href={`https://wa.me/${selectedLomba.whatsappNumber}?text=Halo%20Panitia%20SAGATHA,%20saya%20ingin%20mendaftar%20Lomba%20${encodeURIComponent(
                  selectedLomba.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fun-primary flex-1 py-3 text-center text-sm flex items-center justify-center gap-2 bg-[#0D816A] hover:bg-[#1FB873] hover:text-[#091c1f]"
              >
                <span>Daftar {selectedLomba.contactPerson}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
