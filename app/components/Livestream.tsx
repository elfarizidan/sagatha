"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faPlay,
  faClock,
  faThumbsUp,
  faHeart,
  faFire,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Livestream() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [reactions, setReactions] = useState({ likes: 342, hearts: 518, fires: 289 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleReact = (type: "likes" | "hearts" | "fires") => {
    setReactions((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const scheduleList = [
    { time: "08:00 - 09:30 WIB", event: "Grand Opening & Opening Ceremony SAGATHA 2026", status: "Done" },
    { time: "09:45 - 12:00 WIB", event: "Futsal Semifinal Match 1 & 2", status: "Live Now", isLive: true },
    { time: "13:00 - 15:30 WIB", event: "Final Speech Contest & Presentation Stage", status: "Upcoming" },
    { time: "15:45 - 17:30 WIB", event: "Grand Final MHQ & Penutupan Pengungsian Hafalan", status: "Upcoming" },
    { time: "19:30 - 21:00 WIB", event: "Awarding Night & Special Cultural Performance", status: "Upcoming" },
  ];

  return (
    <section
      id="livestream"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#091c1f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d2a2e] border border-[#1FB873] text-[#1FB873] text-xs font-bold uppercase tracking-widest mb-4">
            <FontAwesomeIcon icon={faCircle} className="text-[#1FB873] text-[10px] animate-ping" />
            <span>SIARAN LANGSUNG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Livestream Stage <span className="text-[#1FB873]">SAGATHA 2026</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Dukung peserta favoritmu dan saksikan momen keseruan event secara real-time langsung dari layar kamu!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Stream Player (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#0d2a2e] border border-white/10 shadow-2xl group">
              {!isPlaying ? (
                <div className="relative w-full h-full">
                  <Image
                    src="/content/hero-bg.png"
                    alt="Livestream Thumbnail"
                    fill
                    className="object-cover filter brightness-50 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Top Live Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-[#0D816A] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 border border-[#1FB873]">
                      <span className="w-2 h-2 rounded-full bg-[#1FB873] animate-pulse" />
                      LIVE STAGE 1
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-[#091c1f] text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                      <FontAwesomeIcon icon={faUsers} className="text-[#1FB873]" />
                      1.420 Penonton
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group focus:outline-none"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0D816A] text-white flex items-center justify-center border-2 border-[#1FB873] group-hover:scale-110 group-hover:bg-[#1FB873] group-hover:text-[#091c1f] transition-all">
                      <FontAwesomeIcon icon={faPlay} className="text-2xl sm:text-3xl ml-1" />
                    </div>
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 bg-[#091c1f]/90 p-4 rounded-2xl border border-white/10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      🔴 MAIN STAGE: Futsal Semifinal &amp; Speech Showcase
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 mt-1">
                      Disiarkan langsung dari Main Sports Arena &amp; Auditorium SAGATHA
                    </p>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1"
                  title="SAGATHA 2026 Livestream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Viewer Reaction Bar */}
            <div className="bg-[#0d2a2e] p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
                  Kirim Semangat:
                </span>
                <button
                  onClick={() => handleReact("likes")}
                  className="px-3.5 py-2 rounded-xl bg-[#136368] hover:bg-[#248999] text-white text-xs font-bold flex items-center gap-2 transition active:scale-95"
                >
                  <FontAwesomeIcon icon={faThumbsUp} className="text-[#1FB873]" />
                  <span>{reactions.likes}</span>
                </button>
                <button
                  onClick={() => handleReact("hearts")}
                  className="px-3.5 py-2 rounded-xl bg-[#136368] hover:bg-[#248999] text-white text-xs font-bold flex items-center gap-2 transition active:scale-95"
                >
                  <FontAwesomeIcon icon={faHeart} className="text-[#1FB873]" />
                  <span>{reactions.hearts}</span>
                </button>
                <button
                  onClick={() => handleReact("fires")}
                  className="px-3.5 py-2 rounded-xl bg-[#136368] hover:bg-[#248999] text-white text-xs font-bold flex items-center gap-2 transition active:scale-95"
                >
                  <FontAwesomeIcon icon={faFire} className="text-[#1FB873]" />
                  <span>{reactions.fires}</span>
                </button>
              </div>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D816A] hover:bg-[#1FB873] hover:text-[#091c1f] transition"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-base" />
                <span>Buka di YouTube</span>
              </a>
            </div>
          </div>

          {/* Broadcast Schedule Timeline */}
          <div className="bg-[#0d2a2e] p-6 rounded-3xl flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center gap-2 text-[#1FB873] font-bold text-lg mb-4">
                <FontAwesomeIcon icon={faClock} />
                <h3>Jadwal Siaran Langsung</h3>
              </div>

              <div className="space-y-4">
                {scheduleList.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3.5 rounded-2xl border transition-all ${item.isLive
                        ? "bg-[#0D816A] border-[#1FB873] text-white shadow-lg"
                        : "bg-[#136368]/60 border-white/10 text-white/80"
                      }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-1">
                      <span className={item.isLive ? "text-[#FFFFFF]" : "text-white/70"}>
                        {item.time}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-black ${item.isLive
                            ? "bg-[#1FB873] text-[#091c1f]"
                            : item.status === "Done"
                              ? "bg-[#091c1f] text-white/50"
                              : "bg-[#248999] text-white"
                          }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs font-semibold line-clamp-2">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <span className="text-xs text-white/70">
                🔔 Pasang pengingat agar tidak ketinggalan momen final!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
