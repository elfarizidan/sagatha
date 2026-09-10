"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faTimes,
  faCamera,
  faArrowRight,
  faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* 
  ====================================================================
  GOOGLE DRIVE GALLERY LINK CONFIGURATION
  Update the link below to your event Google Drive folder:
  ====================================================================
*/
export const GOOGLE_DRIVE_GALLERY_LINK = "https://drive.google.com/drive/folders/15bXooiiQBnJGVQEnq5NvqpaZNVkXtDeI";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  desc: string;
}

export default function Galeri() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/content/gallery-1.png",
      title: "Semarak Antusiasme Penonton",
      desc: "Kemeriahan ribuan supporter sekolah saat grand opening SAGATHA.",
    },
    {
      id: 2,
      src: "/content/gallery-2.png",
      title: "Penyerahan Trofi Kejuaraan",
      desc: "Kebanggaan tim pemenang saat menerima piala bergilir kehormatan.",
    },
    {
      id: 3,
      src: "/content/gallery-3.png",
      title: "Futsal Championship",
      desc: "Pertandingan sengit dan kerja sama tim luar biasa di babak final.",
    },
    {
      id: 4,
      src: "/content/gallery-4.png",
      title: "Speech Contest Showcase",
      desc: "Presentasi memukau dari salah satu finalis lomba pidato di panggung utama.",
    },
    {
      id: 5,
      src: "/content/gallery-5.png",
      title: "Olimpiade Matematika",
      desc: "Fokus mendalam para peserta saat memecahkan tantangan nalar sains.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="galeri"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#248999]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#136368] border border-[#1FB873] text-[#1FB873] text-xs font-bold uppercase tracking-widest mb-4">
            <FontAwesomeIcon icon={faCamera} className="text-[#1FB873]" />
            <span>DOKUMENTASI EVENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Galeri <span className="text-[#1FB873]">SAGATHA</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white">
            Intip momen-momen emas, kerja keras, dan keceriaan dari setiap edisi pelaksanaan SAGATHA!
          </p>
        </div>

        {/* Expanding Accordion Gallery Wrap */}
        <div className="flex flex-col md:flex-row w-full h-[60vh] sm:h-[70vh] gap-3 rounded-3xl overflow-hidden p-2 bg-[#136368] border border-[#1FB873]/40 shadow-2xl">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="relative flex-1 hover:flex-[5] transition-all duration-700 ease-in-out cursor-pointer rounded-2xl overflow-hidden group h-full bg-[#248999] border border-white/10"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0D816A] text-[#1FB873] border border-[#1FB873] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <FontAwesomeIcon icon={faExpand} className="text-sm" />
              </div>

              {/* Title Overlay on Hover */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#136368] via-[#136368]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* "Lihat Lebih Banyak" Google Drive Button Card on the Right End - Ultra Compact Vertical */}
          <a
            href={GOOGLE_DRIVE_GALLERY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-1 md:flex-[0.18] hover:md:flex-[0.35] transition-all duration-700 ease-in-out cursor-pointer rounded-2xl overflow-hidden group h-full bg-[#0D816A] border border-[#1FB873] flex flex-col items-center justify-between p-2 py-4 text-center shadow-lg hover:bg-[#1FB873] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#136368] text-[#1FB873] group-hover:bg-[#248999] group-hover:text-white flex items-center justify-center text-xs group-hover:scale-110 transition-all border border-[#1FB873] flex-shrink-0">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="flex-1 flex items-center justify-center my-2">
              <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-extrabold text-white group-hover:text-[#248999] tracking-widest uppercase transition-colors whitespace-nowrap">
                Lihat Lebih Banyak
              </span>
            </div>

            <div className="text-white group-hover:text-[#248999] transition-colors flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
            </div>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#248999]/95 animate-in fade-in">
          <div className="relative max-w-4xl w-full bg-[#136368] rounded-3xl border border-[#1FB873] overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#0D816A] text-white hover:bg-[#1FB873] hover:text-[#248999] flex items-center justify-center transition"
            >
              <FontAwesomeIcon icon={faTimes} className="text-lg" />
            </button>

            <div className="relative h-[60vh] w-full bg-[#248999]">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-[#136368]">
              <h3 className="text-2xl font-black text-white">{activeImage.title}</h3>
              <p className="text-sm text-white mt-2">{activeImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
