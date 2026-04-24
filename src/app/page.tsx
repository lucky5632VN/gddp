import { Hero } from "@/components/custom/hero";
import { AboutSection } from "@/components/custom/about-section";
import { EthnicityGrid } from "@/components/custom/ethnicity-grid";
import { SacredThunder } from "@/components/custom/sacred-thunder";
import { BocMoTimeline } from "@/components/custom/boc-mo-timeline";
import { Navbar } from "@/components/custom/navbar";
import Script from "next/script";


export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Di sản Nghệ An | Nghe An Heritage",
    "description": "Nền tảng bảo tồn và giới thiệu di sản văn hóa các dân tộc tại Nghệ An.",
    "breadcrumb": "Trang chủ",
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-heritage-turquoise/30">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />

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
      <footer className="py-24 px-4 bg-slate-50 border-t border-slate-200 font-sans text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-3xl font-heading font-bold text-slate-900 mb-8 uppercase">
            DI SẢN <span className="text-heritage-turquoise">NGHỆ AN</span>
          </div>
          <p className="text-slate-600 max-w-xl mx-auto mb-12 italic">
            "Nơi hội tụ những giá trị vĩnh cửu, tôn vinh bản sắc và khát vọng vươn xa của các dân tộc miền Tây Nghệ An."
          </p>
          <div className="flex justify-center space-x-6 text-slate-500 mb-12">
            <a href="#" className="hover:text-heritage-turquoise transition-colors">Facebook</a>
            <a href="#" className="hover:text-heritage-turquoise transition-colors">YouTube</a>
            <a href="#" className="hover:text-heritage-turquoise transition-colors">Instagram</a>
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-widest">
            © 2026 Nền tảng Di sản Số Nghệ An. Bảo lưu mọi quyền.
          </div>
        </div>
      </footer>
    </main>
  );
}
