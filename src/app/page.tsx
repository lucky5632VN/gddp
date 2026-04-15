"use client";

import { Hero } from "@/components/custom/hero";
import { AboutSection } from "@/components/custom/about-section";
import { EthnicityGrid } from "@/components/custom/ethnicity-grid";
import { SacredThunder } from "@/components/custom/sacred-thunder";
import { BocMoTimeline } from "@/components/custom/boc-mo-timeline";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Di sản Nghệ An | Nghe An Heritage",
    "description": "Nền tảng bảo tồn và giới thiệu di sản văn hóa các dân tộc tại Nghệ An.",
    "breadcrumb": "Home",
  };

  return (
    <main className="min-h-screen bg-slate-950 text-foreground selection:bg-heritage-turquoise/30 selection:text-white">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Visual Header / Navigation (Floating) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-slate-950/20 border-b border-white/5">
        <div className="text-2xl font-heading font-bold text-white tracking-tighter">
          NGHEAN<span className="text-heritage-turquoise">HERITAGE</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-sans uppercase tracking-widest font-bold text-slate-400">
          <a href="/#ethnicities-grid" className="hover:text-white transition-colors">Dân tộc</a>
          <a href="/#sacred-thunder" className="hover:text-white transition-colors">Di sản</a>
          <a href="/#boc-mo-timeline" className="hover:text-white transition-colors">Lễ hội</a>
        </div>
        <button 
          onClick={() => document.getElementById("ethnicities-grid")?.scrollIntoView({ behavior: "smooth" })}
          className="px-6 py-2 bg-white text-slate-950 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-heritage-turquoise hover:text-white transition-all duration-300"
        >
          Khám phá ngay
        </button>
      </nav>

      {/* Main Sections */}
      <Hero />
      <AboutSection />
      <EthnicityGrid />
      <div id="sacred-thunder">
        <SacredThunder />
      </div>
      <div id="boc-mo-timeline">
        <BocMoTimeline />
      </div>

      {/* Footer */}
      <footer className="py-16 px-4 bg-slate-950 border-t border-slate-900 font-sans text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-3xl font-heading font-bold text-white mb-8">
            NGHE AN <span className="text-heritage-turquoise">HERITAGE</span>
          </div>
          <p className="text-slate-500 max-w-xl mx-auto mb-12 italic">
            "Nơi hội tụ những giá trị vĩnh cửu, tôn vinh bản sắc và khát vọng vươn xa của các dân tộc miền Tây Nghệ An."
          </p>
          <div className="flex justify-center space-x-6 text-slate-400 mb-12">
            <a href="#" className="hover:text-heritage-turquoise transition-colors">Facebook</a>
            <a href="#" className="hover:text-heritage-turquoise transition-colors">YouTube</a>
            <a href="#" className="hover:text-heritage-turquoise transition-colors">Instagram</a>
          </div>
          <div className="text-xs text-slate-600 uppercase tracking-widest">
            © 2026 Nghe An Digital Heritage Platform. Bảo lưu mọi quyền.
          </div>
        </div>
      </footer>
    </main>
  );
}
