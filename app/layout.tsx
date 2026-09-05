import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAGATHA 2026 | Semarak Artefak & Gelar Talenta Youth Competition Event",
  description:
    "Official website SAGATHA 2026. Kompetisi Futsal Championship, Speech Contest, Olimpiade Matematika, dan Musabaqah Hifzhil Qur'an (MHQ). Total Hadiah Puluhan Juta Rupiah!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#0b0f19] text-slate-100 min-h-screen antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}