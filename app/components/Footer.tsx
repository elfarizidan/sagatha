"use client";

import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faEnvelope,
  faMapMarkerAlt,
  faExternalLinkAlt,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { VENUE_CONFIG } from "./LeafletMap";

// Dynamic import for LeafletMap to bypass SSR window undefined errors
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-48 sm:h-56 rounded-2xl bg-[#0d2a2e] flex items-center justify-center text-white/70">
      <span>Memuat Peta Lokasi...</span>
    </div>
  ),
});

export default function Footer() {
  return (
    <footer className="bg-[#248999] text-white pt-10 pb-6 border-t border-[#1FB873]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-white/20">
          {/* Col 1: Brand Info & Social Media & Quick Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0D816A] border border-[#1FB873] flex items-center justify-center text-white shadow-lg">
                <FontAwesomeIcon icon={faTrophy} className="text-lg" />
              </div>
              <span className="text-xl font-black tracking-wider text-white">
                SAGATHA <span className="text-[#1FB873] text-xs font-bold">2026</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white leading-relaxed">
              Semarak Artefak &amp; Gelar Talenta — Ajang kejuaraan pelajar bergengsi menghadirkan kompetisi Futsal, Speech, Olimpiade Matematika, dan MHQ.
            </p>

            {/* Social Media Links & Contact Badges Side-by-Side */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#1FB873] mb-2">
                  Social Media:
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com/sagatha.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram SAGATHA"
                    className="w-9 h-9 rounded-xl bg-[#136368] border border-[#1FB873]/40 flex items-center justify-center text-white hover:bg-[#1FB873] hover:text-[#248999] transition-all duration-300 shadow-md"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-base" />
                  </a>
                  <a
                    href="https://youtube.com/@sagathaofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube SAGATHA"
                    className="w-9 h-9 rounded-xl bg-[#136368] border border-[#1FB873]/40 flex items-center justify-center text-white hover:bg-[#1FB873] hover:text-[#248999] transition-all duration-300 shadow-md"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="text-base" />
                  </a>
                </div>
              </div>
            </div>

            {/* Compact Quick Contact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#136368] border border-[#1FB873]/30 hover:border-[#1FB873] transition group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0D816A] text-white flex items-center justify-center border border-[#1FB873] flex-shrink-0">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xs" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-white/80 block font-semibold leading-tight">WhatsApp</span>
                  <span className="text-xs font-bold text-white group-hover:text-[#1FB873] transition truncate block">
                    +62 812-3456-7890
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@sagatha-event.id"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#136368] border border-[#1FB873]/30 hover:border-[#1FB873] transition group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0D816A] text-white flex items-center justify-center border border-[#1FB873] flex-shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-white/80 block font-semibold leading-tight">Email</span>
                  <span className="text-xs font-bold text-white group-hover:text-[#1FB873] transition truncate block">
                    info@sagatha-event.id
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 2: Address & Leaflet Map (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1FB873] border-b border-white/20 pb-1.5 flex items-center gap-2">
              Lokasi &amp; Peta Venue Event
            </h4>

            <a
              href={`https://maps.app.goo.gl/1XFKN8uMYX37kq756`}
              target="_blank"
              rel="noopener noreferrer"
              title="Buka lokasi di Google Maps"
              className="block bg-[#136368] p-4 rounded-xl border border-[#1FB873]/30 hover:border-[#1FB873] transition-all duration-200 group cursor-pointer text-xs leading-relaxed space-y-1.5 w-full break-words shadow-md"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-extrabold text-[#1FB873] text-xs sm:text-sm md:text-base block leading-tight break-words group-hover:underline">
                  {VENUE_CONFIG.venueName}
                </span>
              </div>
              <p className="text-white text-xs leading-normal break-words">{VENUE_CONFIG.address}</p>
            </a>

            {/* Compact Interactive Leaflet Map Component */}
            <LeafletMap />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/90">
          <p>© 2026 SAGATHA Competition Event. All rights reserved.</p>
          <p className="flex items-center gap-1">SAGATHA IT Team</p>
        </div>
      </div>
    </footer>
  );
}
