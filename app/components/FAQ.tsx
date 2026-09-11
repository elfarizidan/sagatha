"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Apa itu SAGATHA IV?",
      answer:
        "SAGATHA (Saga Thariq) adalah event kompetisi tahunan tingkat pelajar SMP/MTs/Sederajat yang diselenggarakan untuk mengasah serta merayakan talenta di bidang olahraga (Futsal), kebahasaan (Speech), sains (Olimpiade Matematika), seni (Mural & Puisi), dan keagamaan (MHQ).",
    },
    {
      id: 2,
      question: "Siapa saja yang berhak mendaftar kompetisi SAGATHA IV?",
      answer:
        "Peserta terbuka untuk santri atau peserta didik aktif tingkat SMP/MTs/Sederaja dari berbagai sekolah di seluruh Indonesia khususnya Jawa Barat dan JaBoDeTaBek sesuai dengan kategori syarat yang tercantum di masing-masing cabang lomba.",
    },
    {
      id: 3,
      question: "Bagaimana cara melakukan pendaftaran dan pembayaran?",
      answer:
        "Pembayaran bisa melihat tampilan menu di atas dengan nama 'Metode Pembayaran' dan tinggal ikuti instruksi di dalamnya. Pendaftaran dilakukan secara langsung online dengan memilih cabang lomba pada website ini, klik 'Detail & Syarat', lalu tekan tombol 'Daftar' dan langsung terhubung dengan google form untuk mengisi pendaftaran lomba, atau bisa klik whatsapp untuk bertanya terlebih dahulu kepada panitia yang berasangkutan.",
    },
    {
      id: 4,
      question: "Apakah peserta mendapatkan sertifikat dan fasilitas?",
      answer:
        "Ya! Seluruh peserta dan pembimbing resmi yang terdaftar akan mendapatkan e-Sertifikat keikutsertaan berakreditasi event, id card peserta, snackbox/konsumsi, serta kesempatan memenangkan total hadiah uang tunai & piala/medali.",
    },
    {
      id: 5,
      question: "Dimana lokasi SAGATHA IV Dilaksanaan?",
      answer:
        "Seluruh rangkaian lomba dan final akan dilaksanakan di kampus SMAIT Thariq Bin Ziyad Boarding School. Detail petunjuk arah dan peta lokasi interaktif dapat dilihat pada bagian Footer di bawah.",
    },
    {
      id: 6,
      question: "Apakah supporter dan keluarga bisa datang menonton?",
      answer:
        "Sangat diperbolehkan! Supporter sekolah, sanak keluarga, dan umum dapat hadir meramaikan tribun penonton namun harus membayar tiket masuk dengan nominal yang di terakan panitia, atau menyaksikan melalui siaran Livestream Youtube kami.",
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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#091c1f]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-[#1FB873]">Questions</span>
          </h2>
          <p className="mt-4 text-base text-white/80">
            Temukan jawaban atas pertanyaan yang paling sering diajukan seputar event SAGATHA.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${isOpen
                    ? "border-[#1FB873] bg-[#0d2a2e] shadow-lg"
                    : "border-white/10 bg-[#0d2a2e]/60"
                  }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#136368] border border-white/10 text-[#1FB873] text-xs font-black flex items-center justify-center flex-shrink-0">
                      0{faq.id}
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#136368] flex items-center justify-center text-white transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#1FB873] text-[#091c1f]" : ""
                      }`}
                  >
                    <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-white/80 text-sm sm:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="border-t border-white/10 pt-4 mt-1 text-white/90">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#0d2a2e] border border-[#1FB873]/30">
          <p className="text-sm text-white/80">
            Punya pertanyaan lain yang belum terjawab? Hubungi langsung bantuan kami melalui WhatsApp!
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20SAGATHA,%20saya%20punya%20pertanyaan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fun-primary inline-flex items-center gap-2 mt-4 text-xs sm:text-sm py-2.5 px-6"
          >
            <span>Hubungi Bantuan</span>
          </a>
        </div>
      </div>
    </section>
  );
}
