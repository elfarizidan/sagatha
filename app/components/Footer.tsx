"use client";

import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faEnvelope,
  faMapMarkerAlt,
  faHeart,
  faArrowRight
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
    <div className="w-full h-80 rounded-2xl bg-[#0d2a2e] flex items-center justify-center text-white/70">
      <span>Memuat Peta Lokasi...</span>
    </div>
  ),
});

export default function Footer() {
  return (
    <footer className="bg-[#091c1f] text-white/90 pt-20 pb-10 border-t border-[#1FB873]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info & Social Media (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D816A] border border-[#1FB873] flex items-center justify-center text-white shadow-lg">
                <FontAwesomeIcon icon={faTrophy} className="text-xl" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white">
                SAGATHA <span className="text-[#1FB873] text-sm font-bold">2026</span>
              </span>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              Semarak Artefak &amp; Gelar Talenta — Ajang kejuaraan pelajar bergengsi menghadirkan kompetisi Futsal, Speech, Olimpiade Matematika, dan MHQ.
            </p>

            {/* Social Media Links */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1FB873] mb-3">
                Ikuti Media Sosial Kami:
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/sagatha.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram SAGATHA"
                  className="w-11 h-11 rounded-xl bg-[#0d2a2e] border border-white/10 flex items-center justify-center text-[#1FB873] hover:bg-[#1FB873] hover:text-[#091c1f] transition-all duration-300 shadow-md"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                </a>
                <a
                  href="https://youtube.com/@sagathaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube SAGATHA"
                  className="w-11 h-11 rounded-xl bg-[#0d2a2e] border border-white/10 flex items-center justify-center text-[#1FB873] hover:bg-[#1FB873] hover:text-[#091c1f] transition-all duration-300 shadow-md"
                >
                  <FontAwesomeIcon icon={faYoutube} className="text-xl" />
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp SAGATHA"
                  className="w-11 h-11 rounded-xl bg-[#0d2a2e] border border-white/10 flex items-center justify-center text-[#1FB873] hover:bg-[#1FB873] hover:text-[#091c1f] transition-all duration-300 shadow-md"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                </a>
              </div>
            </div>

            {/* Quick Contact Badges */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#0d2a2e] border border-white/10 hover:border-[#1FB873] transition group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0D816A] text-white flex items-center justify-center border border-[#1FB873]">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                </div>
                <div>
                  <span className="text-[11px] text-white/70 block font-semibold">WhatsApp Helpdesk</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#1FB873] transition">
                    +62 812-3456-7890
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@sagatha-event.id"
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#0d2a2e] border border-white/10 hover:border-[#1FB873] transition group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#136368] text-white flex items-center justify-center border border-[#248999]">
                  <FontAwesomeIcon icon={faEnvelope} className="text-base" />
                </div>
                <div>
                  <span className="text-[11px] text-white/70 block font-semibold">Email Resmi</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#1FB873] transition">
                    info@sagatha-event.id
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#1FB873] border-b border-white/10 pb-2">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                { name: "Hero Page", href: "#hero" },
                { name: "About SAGATHA", href: "#about" },
                { name: "List Lomba (Futsal, Speech, Olim, MHQ)", href: "#lomba" },
                { name: "Livestream Stage", href: "#livestream" },
                { name: "Galeri Dokumentasi", href: "#galeri" },
                { name: "FAQ Accordion", href: "#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#1FB873] transition flex items-center gap-2 text-white/80"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#1FB873]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Address & Leaflet Map (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#1FB873] border-b border-white/10 pb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#1FB873]" />
              Lokasi &amp; Peta Venue Event
            </h4>

            <div className="bg-[#0d2a2e] p-4 rounded-2xl border border-white/10 text-xs leading-relaxed space-y-2">
              <span className="font-bold text-[#1FB873] text-sm block">
                📍 {VENUE_CONFIG.venueName}
              </span>
              <p className="text-white/80">{VENUE_CONFIG.address}</p>
              <div className="text-[11px] text-white/60 pt-1 font-mono">
                Koordinat Maps: {VENUE_CONFIG.latitude}, {VENUE_CONFIG.longitude} (Dapat disesuaikan)
              </div>
            </div>

            {/* Interactive Leaflet Map Component */}
            <LeafletMap />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 SAGATHA Competition Event. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FontAwesomeIcon icon={faHeart} className="text-[#1FB873]" /> for SAGATHA Event
          </p>
        </div>
      </div>
    </footer>
  );
}
