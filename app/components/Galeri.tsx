"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faTimes,
  faArrowRight,
  faArrowUpRightFromSquare,
  faImages
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const GOOGLE_DRIVE_GALLERY_LINK = "https://drive.google.com";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  desc: string;
}

export default function Galeri() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/content/gallery-1.png",
      title: "Semarak Panitia",
      desc: "Semangatnya panitia SAGATHA dalam menyelenggarakan dan menyambut seluruh peserta.",
    },
    {
      id: 2,
      src: "/content/gallery-2.png",
      title: "Penyerahan Trofi Kejuaraan",
      desc: "Kebanggaan pemenang saat menerima piala penghargaan.",
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
      title: "Kemeriahan Bazzar Sagatha",
      desc: "Ramainya Bazzar tenant UMKM, mendukung semangat peserta dan tim.",
    },
    {
      id: 5,
      src: "/content/gallery-5.png",
      title: "Olimpiade Matematika",
      desc: "Fokus mendalam para peserta saat memecahkan tantangan nalar sains.",
    },
    {
      id: 6,
      src: "/content/gallery-6.png",
      title: "Musabaqah Hifzhil Qur'an",
      desc: "Lantunan ayat suci Al-Qur'an nan merdu merengkuh kedamaian di panggung MHQ.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (trackRef.current && wrapperRef.current && sectionRef.current) {
        const getScrollAmount = () => {
          return -(trackRef.current!.scrollWidth - wrapperRef.current!.clientWidth);
        };

        gsap.to(trackRef.current, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="galeri"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center py-16 lg:py-0 relative overflow-hidden bg-[#248999] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-6 lg:mb-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/20 pb-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Album <span className="text-[#1FB873]">SAGATHA 2026</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/90 max-w-md">
            Scroll untuk menjelajahi seluruh dokumentasi keseruan, kerja keras, dan selebrasi di SAGATHA!
          </p>
        </div>
      </div>

      {/* Pinned Horizontal Scroll Section */}
      <div ref={wrapperRef} className="w-full overflow-hidden relative z-10 py-4">
        <div ref={trackRef} className="flex items-center gap-6 sm:gap-8 px-4 sm:px-12 w-max">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="relative w-[300px] sm:w-[460px] lg:w-[540px] h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group cursor-pointer flex-shrink-0 bg-[#136368] transform-gpu"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 300px, 540px"
              />

              {/* Seamless Dark Gradient Overlay */}
              <div className="absolute -inset-[1px] bg-gradient-to-t from-[#091c1f] via-[#091c1f]/75 to-transparent z-10 pointer-events-none" />

              {/* Expand Icon Badge */}
              <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#0D816A] text-[#1FB873] border border-[#1FB873] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <FontAwesomeIcon icon={faExpand} className="text-sm" />
              </div>

              {/* Description Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-20 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug group-hover:text-[#1FB873] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 mt-2 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Dedicated Google Drive Extra Card at the end of track */}
          <a
            href={GOOGLE_DRIVE_GALLERY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[280px] sm:w-[360px] h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1FB873] bg-[#0D816A] hover:bg-[#1FB873] transition-colors duration-500 group cursor-pointer flex-shrink-0 flex flex-col justify-between p-8 text-white hover:text-[#091c1f]"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#136368] text-[#1FB873] group-hover:bg-[#091c1f] group-hover:text-white flex items-center justify-center text-xl shadow-lg border border-[#1FB873]">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-white/80 group-hover:text-[#091c1f]/80 block mb-2">
                Arsip Lengkap
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                Lihat Lebih Banyak Dokumentasi
              </h3>
              <p className="text-xs sm:text-sm mt-3 opacity-90 leading-relaxed">
                Akses ribuan foto &amp; video resolusi tinggi langsung dari Google Drive resmi SAGATHA.
              </p>
            </div>

            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
              <span>Buka album sekarang</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
            </div>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#091c1f]/95 backdrop-blur-md animate-in fade-in cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#136368] rounded-3xl border border-[#1FB873] overflow-hidden shadow-2xl cursor-default"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0D816A] text-white hover:bg-[#1FB873] hover:text-[#091c1f] flex items-center justify-center transition"
            >
              <FontAwesomeIcon icon={faTimes} className="text-lg" />
            </button>

            <div className="relative h-[60vh] w-full bg-[#091c1f]">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#136368]">
              <h3 className="text-2xl font-black text-white">{activeImage.title}</h3>
              <p className="text-sm text-white/90 mt-2">{activeImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
