"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
    <footer className="bg-[#102a2e] text-white pt-10 pb-6 border-t border-[#1FB873]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-white/20">
          {/* Col 1: Brand Info & Social Media & Quick Contact (5 cols) */}
          <div className="lg:col-span-5 flex h-full flex-col">
            <div className="flex items-center gap-3">
              <Image
                src="/content/logo1.png"
                alt="Logo SAGATHA 1"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <Image
                src="/content/logo2.PNG"
                alt="Logo SAGATHA 2"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-xl font-black tracking-wider text-white">SAGATHA</span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-white leading-relaxed">
              Semarak Artefak &amp; Gelar Talenta — Ajang kejuaraan pelajar bergengsi menghadirkan kompetisi Futsal, Speech, Olimpiade Matematika, dan MHQ.
            </p>

            {/* Social Media Links & Contact Badges Side-by-Side */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#1FB873] mb-2">
                  Ikuti Kami di Media Sosial:
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com/sagatha.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram SAGATHA"
                    className="w-9 h-9 rounded-xl bg-[#136368] flex items-center justify-center text-white hover:bg-[#1FB873] hover:text-[#248999] transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-base" />
                  </a>
                  <a
                    href="https://youtube.com/@sagathaofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube SAGATHA"
                    className="w-9 h-9 rounded-xl bg-[#136368] flex items-center justify-center text-white hover:bg-[#1FB873] hover:text-[#248999] transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="text-base" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="mt-auto pt-8">
              <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#1FB873] mb-3">
                Hubungi Kami:
              </h4>
              <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hubungi SAGATHA melalui WhatsApp"
                  title="WhatsApp SAGATHA"
                  className="inline-flex items-center gap-2 text-white transition hover:text-[#1FB873] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FB873]"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl text-[#1FB873]" />
                  <span className="text-xs font-semibold whitespace-nowrap">+62 812-3456-7890</span>
                </a>

                <a
                  href="mailto:info@sagatha-event.id"
                  aria-label="Kirim email ke SAGATHA"
                  title="Email SAGATHA"
                  className="inline-flex items-center gap-2 text-white transition hover:text-[#1FB873] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FB873]"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl text-[#1FB873]" />
                  <span className="text-xs font-semibold whitespace-nowrap">info@sagatha-event.id</span>
                </a>
              </div>
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
              className="hover:underline p-4 rounded-xl transition-all duration-200 group cursor-pointer text-xs leading-relaxed space-y-1.5 w-full break-words"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-extrabold text-[#1FB873] text-xs sm:text-sm md:text-base block leading-tight break-words">
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
