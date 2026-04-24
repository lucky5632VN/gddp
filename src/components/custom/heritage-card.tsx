"use client";

import { motion } from "framer-motion";
import { HeritageItem } from "@/data/types";
import { Music, Calendar, Sparkles, Award } from "lucide-react";
import Image from "next/image";

interface HeritageCardProps {
  item: HeritageItem;
}

export function HeritageCard({ item }: HeritageCardProps) {
  const Icon = item.type === "audio" ? Music : 
               item.type === "festival" ? Calendar : Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-heritage-turquoise/40 transition-all duration-500 shadow-xl"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-heritage-turquoise/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={item.imageUrl || "/images/kinh_heritage.png"}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* National Heritage Badge */}
        {item.isNationalHeritage && (
          <div className="absolute top-6 left-6 z-10">
            <div className="flex items-center space-x-2 bg-national-gold backdrop-blur-md text-white px-4 py-1.5 rounded-full shadow-lg">
              <Award className="w-3.5 h-3.5 fill-white" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Di sản Quốc gia</span>
            </div>
          </div>
        )}

        {/* Type Icon Tag */}
        <div className="absolute bottom-6 left-6 z-10">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-md text-heritage-turquoise px-4 py-1.5 rounded-full border border-white/30 shadow-sm">
                <Icon className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                    {item.type === 'audio' ? 'Âm nhạc' : item.type === 'festival' ? 'Lễ hội' : 'Phong tục'}
                </span>
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 space-y-4 relative z-10">
        <h3 className="text-2xl font-heading font-bold text-slate-900 group-hover:text-heritage-turquoise transition-colors underline decoration-slate-100 underline-offset-8 group-hover:decoration-heritage-turquoise/30">
          {item.name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed font-serif italic">
          "{item.description}"
        </p>
      </div>

      {/* Decorative Border Glow on Hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-heritage-turquoise/0 via-heritage-turquoise/40 to-heritage-turquoise/0 opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10 pointer-events-none" />
    </motion.div>
  );
}
