"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faMicrophone,
  faCalculator,
  faBookQuran,
  faTrophy,
  faUsers,
  faMoneyBillWave,
  faTimes,
  faCheckCircle,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
}

export default function ListLomba() {
  const [selectedLomba, setSelectedLomba] = useState<Lomba | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const lombaList: Lomba[] = [
    {
      id: "futsal",
      title: "Futsal Championship",
      category: "Olahraga & Sportivitas",
      icon: faFutbol,
      image: "/content/lomba-futsal.png",
      target: "SMP / SMA / Sederajat",
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
      contactPerson: "Panitia Futsal (Kak Aris)",
      whatsappNumber: "6281234567890",
    },
    {
      id: "speech",
      title: "Speech Contest",
      category: "Kebahasaan & Public Speaking",
      icon: faMicrophone,
      image: "/content/lomba-speech.png",
      target: "SMP / SMA / Sederajat",
      prize: "Rp 5.000.000 + Sertifikat & Trofi",
      fee: "Rp 100.000 / Peserta",
      date: "21 Oktober 2026",
      description:
        "Ajang unjuk kebolehan public speaking dalam Bahasa Inggris & Indonesia. Sampaikan gagasan inspiratifmu mengenai kepemudaan dan teknologi di hadapan dewan juri expert!",
      rules: [
        "Tema pidato: 'Youth Leadership & Innovation in Digital Era'",
        "Durasi pidato 5-7 menit per peserta",
        "Penilaian meliputi: Oratory skill, Pronunciation, Content Structure, & Confidence",
        "Tidak diperkenankan membaca teks secara penuh saat tampil",
      ],
      contactPerson: "Panitia Speech (Kak Nadia)",
      whatsappNumber: "6281234567891",
    },
    {
      id: "olim-mtk",
      title: "Olimpiade Matematika",
      category: "Akademik & Sains",
      icon: faCalculator,
      image: "/content/lomba-olim-mtk.png",
      target: "SMP & SMA (Kategori Terpisah)",
      prize: "Rp 6.000.000 + Piala & Medali",
      fee: "Rp 85.000 / Peserta",
      date: "20 Oktober 2026",
      description:
        "Uji ketajaman logika dan pemecahan masalah dalam Olimpiade Matematika SAGATHA. Soal dirancang standar olimpiade nasional (OSN) untuk mengasah nalar kritis.",
      rules: [
        "Terdiri dari 2 Babak: Penyisihan (Pilihan Ganda & Isian) dan Final (Essay & Problem Solving)",
        "Peserta dilarang menggunakan kalkulator atau alat bantu elektronik",
        "Keputusan dewan juri bersifat mutlak dan tidak dapat diganggu gugat",
      ],
      contactPerson: "Panitia Olim (Kak Fikri)",
      whatsappNumber: "6281234567892",
    },
    {
      id: "mhq",
      title: "MHQ (Musabaqah Hifzhil Qur'an)",
      category: "Keagamaan & Keislaman",
      icon: faBookQuran,
      image: "/content/lomba-mhq.png",
      target: "Maksimal Juz 1-5 / 1-10",
      prize: "Rp 6.000.000 + Beasiswa & Trofi",
      fee: "Rp 90.000 / Peserta",
      date: "22 Oktober 2026",
      description:
        "Lomba hafalan Al-Qur'an untuk membentuk generasi penghafal Qur'an yang mutqin, fasih berhujjah, serta berakhlak mulia dengan lantunan suara yang merdu.",
      rules: [
        "Kategori Lomba: Juz 1-3 & Juz 1-5",
        "Kriteria Penilaian: Tajwid, Fashohah, Kelancaran Hafalan (Hifdz), dan Lagu/Irama",
        "Setiap peserta mengambil amplop soal acak saat pemanggilan di panggung main stage",
      ],
      contactPerson: "Panitia MHQ (Ust. Rahmat)",
      whatsappNumber: "6281234567893",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, scale: 0.9, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
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
      className="py-24 relative overflow-hidden bg-[#091c1f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d2a2e] border border-[#1FB873] text-[#1FB873] text-xs font-bold uppercase tracking-widest mb-4">
            <FontAwesomeIcon icon={faTrophy} className="text-[#1FB873]" />
            <span>CABANG KOMPETISI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            List Lomba <span className="text-[#1FB873]">SAGATHA 2026</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Pilih cabang lomba favoritmu, persiapkan tim terbaik, dan tunjukkan potensi luar biasamu!
          </p>
        </div>

        {/* Lomba Cards Grid */}
        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {lombaList.map((lomba) => (
            <div
              key={lomba.id}
              className="bg-[#0d2a2e] rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group border border-white/10"
            >
              <div>
                {/* Lomba Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-[#136368]">
                  <Image
                    src={lomba.image}
                    alt={lomba.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#091c1f] border border-[#1FB873] text-xs font-semibold text-[#1FB873] flex items-center gap-1.5 shadow-md">
                    <FontAwesomeIcon icon={lomba.icon} />
                    {lomba.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-black text-white group-hover:text-[#1FB873] transition-colors">
                    {lomba.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/80 line-clamp-3 leading-relaxed">
                    {lomba.description}
                  </p>

                  <div className="mt-6 space-y-2 text-xs font-medium text-white/80 border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faUsers} className="text-[#248999]" /> Target:
                      </span>
                      <span className="font-semibold text-white">{lomba.target}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faTrophy} className="text-[#1FB873]" /> Total Hadiah:
                      </span>
                      <span className="font-bold text-[#1FB873]">{lomba.prize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="text-[#0D816A]" /> Biaya:
                      </span>
                      <span className="font-semibold text-[#FFFFFF]">{lomba.fee}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Buttons */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedLomba(lomba)}
                  className="w-full btn-fun-primary py-3 text-sm flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span>Detail &amp; Syarat</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lomba Detail Modal Popup */}
      {selectedLomba && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#091c1f]/90 animate-in fade-in">
          <div className="bg-[#0d2a2e] border border-[#1FB873] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedLomba(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#136368] text-white hover:bg-[#248999] flex items-center justify-center transition"
            >
              <FontAwesomeIcon icon={faTimes} className="text-lg" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-[#136368]">
              <Image
                src={selectedLomba.image}
                alt={selectedLomba.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#091c1f]/90 p-3 rounded-xl border border-[#1FB873]">
                <span className="px-3 py-1 rounded-full bg-[#0D816A] text-xs font-bold text-white uppercase tracking-wider mb-1 inline-block">
                  {selectedLomba.category}
                </span>
                <h3 className="text-2xl font-black text-white">{selectedLomba.title}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              {selectedLomba.description}
            </p>

            {/* Key Information Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
              <div className="bg-[#136368] p-3 rounded-xl border border-white/10">
                <span className="text-[11px] text-white/70 block font-semibold uppercase">Total Hadiah</span>
                <span className="text-sm font-bold text-[#1FB873]">{selectedLomba.prize}</span>
              </div>
              <div className="bg-[#136368] p-3 rounded-xl border border-white/10">
                <span className="text-[11px] text-white/70 block font-semibold uppercase">Biaya Pendaftaran</span>
                <span className="text-sm font-bold text-white">{selectedLomba.fee}</span>
              </div>
              <div className="bg-[#136368] p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[11px] text-white/70 block font-semibold uppercase">Pelaksanaan</span>
                <span className="text-sm font-bold text-[#248999]">{selectedLomba.date}</span>
              </div>
            </div>

            {/* Rules & Requirements */}
            <div className="mb-6">
              <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#1FB873]" />
                Ketentuan &amp; Syarat Lomba:
              </h4>
              <ul className="space-y-2">
                {selectedLomba.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1FB873] mt-2 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons inside Modal */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/${selectedLomba.whatsappNumber}?text=Halo%20Panitia%20SAGATHA,%20saya%20inik%20mendaftar%20Lomba%20${encodeURIComponent(
                  selectedLomba.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fun-primary flex-1 py-3 text-center text-sm flex items-center justify-center gap-2 bg-[#0D816A] hover:bg-[#1FB873] hover:text-[#091c1f]"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                <span>Daftar via WhatsApp ({selectedLomba.contactPerson})</span>
              </a>
              <button
                onClick={() => setSelectedLomba(null)}
                className="btn-fun-secondary py-3 text-center text-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
