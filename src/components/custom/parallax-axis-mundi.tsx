"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ParallaxAxisMundi() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const treeHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div ref={containerRef} className="relative h-[150vh] w-full bg-slate-950 overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 text-center max-w-2xl px-6"
      >
        <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
          Trục Vũ Trụ <span className="text-national-gold italic">(Axis Mundi)</span>
        </h3>
        <p className="text-slate-400 text-lg leading-relaxed font-serif">
          Cây Nêu là trung tâm của Lễ hội Gầu Tào, một điểm kết nối linh thiêng mở đường cho thần linh giáng trần giao tiếp với con người.
        </p>
      </motion.div>

      {/* The Rising Tree (Stylized) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 md:w-12 h-full z-0 flex flex-col items-center">
        <motion.div 
          style={{ height: treeHeight }}
          className="w-full bg-gradient-to-t from-national-gold via-heritage-turquoise to-transparent rounded-t-full shadow-[0_0_100px_rgba(234,179,8,0.2)]"
        />
        
        {/* Ritual labels along the tree */}
        {[
            { label: "Gà trống (Sứ giả)", pos: 20, img: "/images/rituals/ga_trong_icon.png" },
            { label: "Rượu ngô (Linh hồn)", pos: 40, img: "/images/rituals/ruou_ngo_icon.png" },
            { label: "Nước suối (Thanh khiết)", pos: 60 },
            { label: "Giấy bản (Kết nối)", pos: 80 }
        ].map((item, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: i % 2 === 0 ? 80 : -80 }}
                viewport={{ once: false, amount: 0.5 }}
                className="absolute flex items-center space-x-4 group"
                style={{ bottom: `${item.pos}%` }}
            >
                {i % 2 !== 0 && (
                    <div className="flex items-center space-x-3 bg-slate-900/80 px-4 py-2 rounded-full border border-national-gold/30 backdrop-blur-md">
                        {item.img && (
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-national-gold/50">
                                <Image src={item.img} alt={item.label} fill className="object-cover" />
                            </div>
                        )}
                        <span className="text-[10px] font-bold text-national-gold uppercase tracking-widest">{item.label}</span>
                    </div>
                )}
                <div className="w-5 h-5 rounded-full bg-national-gold shadow-[0_0_20px_#bf953f] group-hover:scale-125 transition-transform" />
                {i % 2 === 0 && (
                    <div className="flex items-center space-x-3 bg-slate-900/80 px-4 py-2 rounded-full border border-national-gold/30 backdrop-blur-md">
                        <span className="text-[10px] font-bold text-national-gold uppercase tracking-widest">{item.label}</span>
                        {item.img && (
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-national-gold/50">
                                <Image src={item.img} alt={item.label} fill className="object-cover" />
                            </div>
                        )}
                    </div>
                )}
            </motion.div>
        ))}

        {/* Decor segments */}
        {[...Array(8)].map((_, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ bottom: `${(i + 1) * 12}%` }}
                className={`absolute w-16 h-1 md:w-32 md:h-2 bg-white/10 rounded-full ${i % 2 === 0 ? '-rotate-12 translate-x-12' : 'rotate-12 -translate-x-12'}`}
            />
        ))}
      </div>

      {/* Ritual imagery overlay */}
      <div className="absolute top-1/4 left-10 md:left-24 w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/5 opacity-40">
        <Image 
            src="/images/nghean_nature.png" 
            alt="Nghi lễ Gầu Tào" 
            fill 
            className="object-cover"
        />
      </div>
      
      <div className="absolute bottom-1/4 right-10 md:right-24 w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/5 opacity-40">
        <Image 
            src="/images/khomu_heritage.png" 
            alt="Văn hóa Mông" 
            fill 
            className="object-cover"
        />
      </div>

      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center">
        <span className="text-[10px] text-slate-500 uppercase tracking-[0.5em] font-bold">Cuộn để hành lễ dựng nêu</span>
      </div>
    </div>
  );
}
