import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAGATHA",
  description: "Official website SAGATHA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#091c1f] text-slate-100 min-h-screen antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
