"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

/* 
  VENUE LOCATION CONFIGURATION
  The user can easily modify LATITUDE, LONGITUDE, and VENUE NAME below:
*/
export const VENUE_CONFIG = {
  latitude: -6.2847, // Default Latitude (Bekasi / West Java area)
  longitude: 107.0025, // Default Longitude
  zoom: 15,
  venueName: "SAGATHA Event Center - Thariq Boarding Campus",
  address: "Jl. Terusan KH. Noer Ali, Grand Galaxy City, Bekasi, Jawa Barat 17148",
};

export default function LeafletMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-80 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-400">
        <span>Loading Interactive Map...</span>
      </div>
    );
  }

  // Dynamically import React-Leaflet components to ensure clean SSR compatibility
  const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");
  const L = require("leaflet");

  // Fix default marker icon missing issue in webpack/Next.js builds
  const customMarkerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative z-0">
      <MapContainer
        center={[VENUE_CONFIG.latitude, VENUE_CONFIG.longitude]}
        zoom={VENUE_CONFIG.zoom}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[VENUE_CONFIG.latitude, VENUE_CONFIG.longitude]}
          icon={customMarkerIcon}
        >
          <Popup>
            <div className="p-1">
              <strong className="text-indigo-400 block font-bold text-sm">
                {VENUE_CONFIG.venueName}
              </strong>
              <p className="text-xs text-slate-300 mt-1">{VENUE_CONFIG.address}</p>
              <a
                href={`https://maps.google.com/?q=${VENUE_CONFIG.latitude},${VENUE_CONFIG.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-indigo-400 hover:underline mt-2 inline-block"
              >
                📍 Buka di Google Maps &rarr;
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
