"use client";

import { useEffect, useRef } from "react";
import { ethnicities } from "@/data/ethnicities";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
    ArrowLeft, 
    MapPin, 
    Info, 
    Music, 
    Calendar, 
    Utensils, 
    Users, 
    Leaf, 
    Sparkles, 
    CloudLightning,
    Heart
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BocMoTimeline } from "@/components/custom/boc-mo-timeline";
import { SacredThunder } from "@/components/custom/sacred-thunder";
import { HotspotGallery } from "@/components/custom/hotspot-gallery";
import { ParallaxAxisMundi } from "@/components/custom/parallax-axis-mundi";
import { ClothingComparison } from "@/components/custom/clothing-comparison";
import { HeritageCard } from "@/components/custom/heritage-card";
import { Button } from "@/components/ui/button";

export default function EthnicityDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const ethnicity = ethnicities.find((e) => e.slug === slug);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Tích hợp tiếng sấm cho người Ơ Đu
    if (ethnicity?.id === "o-du") {
      audioRef.current = new Audio("https://www.soundjay.com/nature/thunder-01.mp3");
      audioRef.current.volume = 0.3;
      
      const playThunder = () => {
        audioRef.current?.play().catch(e => console.log("Audio play blocked by browser"));
      };

      const timeout = setTimeout(playThunder, 2000);
      return () => {
        clearTimeout(timeout);
        audioRef.current?.pause();
      }
    }
  }, [ethnicity]);

  if (!ethnicity) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 text-center">
        <h1 className="text-4xl font-heading mb-4">Không tìm thấy dữ liệu di sản</h1>
        <Link href="/">
          <Button variant="outline" className="rounded-full">Quay lại Trang chủ</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-heritage-turquoise/30 font-sans">
      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-slate-950/40 border-b border-white/5">
        <Link href="/" className="flex items-center text-sm font-sans uppercase tracking-widest font-bold text-slate-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          QUAY LẠI
        </Link>
        <div className="text-xl font-heading font-bold text-white tracking-tighter">
          NGHEAN<span className="text-heritage-turquoise">HERITAGE</span>
        </div>
        <div className="w-20 hidden md:block" />
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-end pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={ethnicity.imageUrl}
            alt={ethnicity.name}
            fill
            sizes="100vw"
            className="object-cover opacity-50 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center text-heritage-turquoise text-sm font-bold uppercase tracking-widest mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              {ethnicity.location.join(" & ")}
            </div>
            <h1 className="text-7xl md:text-9xl font-heading font-bold text-white mb-6 tracking-tighter">
              {ethnicity.name}
            </h1>
            {ethnicity.population && (
                <div className="flex flex-col md:flex-row md:items-center text-slate-400 text-xs font-sans uppercase tracking-[0.2em] space-y-2 md:space-y-0 md:space-x-8">
                    <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-national-gold" />
                        {ethnicity.population.provinceStats}
                    </div>
                    {ethnicity.population.details && (
                        <div className="flex items-center text-heritage-turquoise border-l border-white/10 md:pl-8">
                            {ethnicity.population.details}
                        </div>
                    )}
                </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Encyclopedia Content Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-10 border-l-4 border-heritage-turquoise pl-6 uppercase tracking-wider">
                TẬP TỤC & VĂN HÓA
              </h2>
              <div className="text-xl text-slate-300 leading-relaxed font-serif space-y-8">
                <p className="dropcap first-letter:text-7xl first-letter:font-heading first-letter:float-left first-letter:mr-4 first-letter:text-heritage-turquoise">
                  {ethnicity.longDescription}
                </p>
                
                {ethnicity.ecologicalLogic && (
                    <div className="bg-white/5 border-l-2 border-heritage-turquoise p-8 rounded-r-3xl my-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-heritage-turquoise/5 rounded-full blur-3xl group-hover:bg-heritage-turquoise/10 transition-colors" />
                        <h4 className="flex items-center text-heritage-turquoise font-bold uppercase text-xs tracking-widest mb-4">
                            <Leaf className="w-4 h-4 mr-2" /> Trí tuệ sinh thái (Ecological Intelligence)
                        </h4>
                        <p className="text-slate-200 text-lg italic relative z-10">{ethnicity.ecologicalLogic}</p>
                    </div>
                )}

                <p className="text-lg text-slate-400">
                  {ethnicity.history}
                </p>

                {ethnicity.culturalNarrative && (
                    <div className="py-12 border-y border-white/5 my-12">
                        <blockquote className="text-2xl font-serif italic text-slate-300 border-l-4 border-national-gold pl-8">
                            "{ethnicity.culturalNarrative}"
                        </blockquote>
                    </div>
                )}

                {/* Hotspot Gallery integration for Khơ Mú */}
                {ethnicity.id === "kho-mu" && (
                    <div className="mt-16">
                        <h4 className="text-white font-bold mb-6 flex items-center">
                            <Sparkles className="w-4 h-4 mr-2 text-national-gold" /> Trực quan hóa Nghiệp vụ Sinh tồn
                        </h4>
                        <HotspotGallery />
                    </div>
                )}
              </div>
            </motion.div>

            <div className="space-y-8">
              {/* Costume & Jewelry Detail */}
              <div className="bg-slate-900 border border-white/10 p-10 rounded-3xl backdrop-blur-sm shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1 bg-gradient-to-b from-heritage-turquoise to-transparent h-full opacity-50" />
                <h3 className="text-xs uppercase tracking-widest text-heritage-turquoise font-bold mb-8 flex items-center">
                  <Info className="w-4 h-4 mr-2" /> BẢN SẮC PHỤC TRANG
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  {ethnicity.costumeInfo.description}
                </p>
                
                {ethnicity.costumeInfo.jewelryNote && (
                    <div className="mb-8 p-6 bg-white/5 rounded-2xl border-l-2 border-national-gold">
                        <div className="text-[10px] text-national-gold font-bold mb-2 uppercase tracking-widest">Ghi chú trang sức</div>
                        <p className="text-xs text-slate-400 italic leading-relaxed">{ethnicity.costumeInfo.jewelryNote}</p>
                    </div>
                )}

                {ethnicity.costumeInfo.funeralNote && (
                    <div className="mb-8 p-6 bg-red-500/5 rounded-2xl border-l-2 border-red-500/50">
                        <div className="text-[10px] text-red-500 font-bold mb-2 uppercase tracking-widest">Nghi lễ tang lễ</div>
                        <p className="text-xs text-slate-400 italic leading-relaxed">{ethnicity.costumeInfo.funeralNote}</p>
                    </div>
                )}

                <div className="flex space-x-3 pt-4 border-t border-white/5">
                  {ethnicity.costumeInfo.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border border-white/20 shadow-inner group relative"
                      style={{ backgroundColor: color }}
                    >
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white whitespace-nowrap bg-slate-800 px-2 py-1 rounded">
                            {color}
                        </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ritual & Philosophy */}
              {ethnicity.ritualPhilosophy && (
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="bg-heritage-turquoise/10 border border-heritage-turquoise/30 p-10 rounded-3xl relative overflow-hidden shadow-2xl"
                >
                  <Sparkles className="absolute bottom-4 right-4 text-heritage-turquoise/20 w-16 h-16" />
                  <span className="inline-block text-[10px] bg-heritage-turquoise text-slate-950 font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
                    {ethnicity.id === 'o-du' ? 'Cảm thức thời gian' : 'Triết lý Tâm linh'}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-tighter">
                    {ethnicity.id === 'o-du' ? 'TIẾNG SẤM GỌI MÙA' : 'Tín ngưỡng & Phong tục'}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed italic">{ethnicity.ritualPhilosophy}</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* New Heritage & Festivals Section */}
          {ethnicity.heritage && ethnicity.heritage.length > 0 && (
            <div className="mt-32">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
                    Di sản & <span className="text-heritage-turquoise">Lễ hội</span>
                  </h2>
                  <p className="text-slate-500 uppercase tracking-[0.3em] text-xs font-bold">
                    Gìn giữ những giá trị văn hóa truyền thống qua nhiều thế kỷ
                  </p>
                </div>
                <div className="h-px flex-1 bg-white/10 hidden md:block mb-4 ml-8" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {ethnicity.heritage.map((item) => (
                  <HeritageCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Specialty Sections */}
      {ethnicity.id === "tho" && (
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-heading font-bold text-white mb-16 px-6 flex items-center">
              <Sparkles className="text-national-gold mr-6 w-10 h-10" /> Truyền thuyết & Tiếp biến
            </h2>
            <ClothingComparison />
            <div className="mt-24">
                <h3 className="text-3xl font-heading font-bold text-white mb-16 px-6 flex items-center">
                    <Calendar className="text-festival-orange mr-6 w-8 h-8" /> Di sản Lễ hội Bốc Mó
                </h3>
                <BocMoTimeline />
            </div>
          </div>
        </section>
      )}

      {ethnicity.id === "mong" && (
          <ParallaxAxisMundi />
      )}

      {/* Cuisines Section */}
      {ethnicity.cuisines && ethnicity.cuisines.length > 0 && (
        <section className="py-32 px-6 border-t border-white/5 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center mb-20 space-y-4 md:space-y-0">
               <Utensils className="text-heritage-turquoise w-16 h-16 mr-8" />
               <div className="space-y-2">
                 <h2 className="text-5xl md:text-7xl font-heading font-bold text-white">Ẩm thực Di sản</h2>
                 <p className="text-slate-500 uppercase tracking-[0.3em] text-xs font-bold">Kết tinh trí tuệ sinh thái & Dược lý tự nhiên</p>
               </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {ethnicity.cuisines.map((cuisine) => (
                <div key={cuisine.id} className="group relative overflow-hidden rounded-[3.5rem] bg-slate-900 border border-white/10 hover:border-heritage-turquoise/30 transition-all flex flex-col md:flex-row shadow-2xl">
                  <div className="relative h-80 md:h-auto md:w-2/5 overflow-hidden">
                    <Image
                      src={cuisine.imageUrl || "/images/khomu_heritage.png"}
                      alt={cuisine.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      loading="eager"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-12 md:w-3/5 flex flex-col justify-center bg-slate-900/40 backdrop-blur-md">
                    <h3 className="text-3xl font-heading font-bold text-white mb-6 underline decoration-heritage-turquoise/30 underline-offset-8">
                        {cuisine.name}
                    </h3>
                    <p className="text-slate-300 font-serif text-lg leading-relaxed mb-8 italic">
                        "{cuisine.description}"
                    </p>
                    {cuisine.ingredients && (
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {cuisine.ingredients.map((ing, idx) => (
                          <span key={idx} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-heritage-turquoise/5 border border-heritage-turquoise/20 text-heritage-turquoise rounded-full">
                            {ing}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {ethnicity.id === "o-du" && (
        <section className="py-32 bg-slate-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-24 space-y-6">
               <div className="p-6 bg-national-gold/10 rounded-full">
                <Music className="text-national-gold w-12 h-12" />
               </div>
               <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight uppercase">Không gian Chăm Phtrong</h2>
               <p className="text-slate-500 max-w-2xl font-serif text-xl italic">"Gột rửa những muộn phiền của năm cũ để mở lòng đón sinh khí thịnh vượng của năm mới tại dòng suối Nậm Ngân."</p>
            </div>
            <SacredThunder />
          </div>
        </section>
      )}

      {/* Footer Branding */}
      <footer className="py-32 px-6 border-t border-white/5 text-center bg-slate-950 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-heritage-turquoise/5 via-transparent to-transparent opacity-30" />
        <div className="relative z-10 space-y-8">
            <div className="flex justify-center items-center space-x-4 mb-4">
                <Heart className="text-red-500 fill-red-500 w-4 h-4 animate-pulse" />
                <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Bảo tồn bởi Nghe An Digital Heritage Team</span>
            </div>
            <div className="text-slate-600 text-[10px] uppercase tracking-[0.6em] font-bold">
            NGHE AN ETHNIC ETHNOGRAPHY | PHIÊN BẢN SỐ 2.0
            </div>
        </div>
      </footer>
    </main>
  );
}
