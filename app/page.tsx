import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ListLomba from "./components/ListLomba";
import Livestream from "./components/Livestream";
import Galeri from "./components/Galeri";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white selection:bg-indigo-600 selection:text-white">
      {/* Hero Navbar */}
      <Navbar />

      {/* 1. Hero Page */}
      <Hero />

      {/* 2. About */}
      <About />

      {/* 3. List Lomba */}
      <ListLomba />

      {/* 4. Livestream */}
      {/* <Livestream /> */}

      {/* 5. Galeri */}
      <Galeri />

      {/* 6. FAQ (Accordion Style) */}
      <FAQ />

      {/* Footer (Contact, Social Media, Address & Leaflet Map) */}
      <Footer />
    </main>
  );
}
