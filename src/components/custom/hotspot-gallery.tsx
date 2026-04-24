"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Hotspot {
  id: number;
  x: number;
  y: number;
  title: string;
  description: string;
}

export function HotspotGallery() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots: Hotspot[] = [
    {
      id: 1,
      x: 30,
      y: 40,
      title: "Kỹ thuật Chọc hốc",
      description: "Sử dụng gậy nhọn để tra hạt trên triền đồi dốc, bảo vệ cấu trúc đất và tránh xói mòn."
    },
    {
      id: 2,
      x: 70,
      y: 60,
      title: "Nghệ thuật Đan lát",
      description: "Các sản phẩm mây tre đan với hoa văn đan nong mốt, nong hai tinh xảo để vận chuyển lương thực."
    }
  ];

  return (
    <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-slate-200 bg-slate-100 group shadow-2xl">
      <Image
        src="/images/kho_mu_ethnography.png"
        alt="Dân tộc học Khơ Mú"
        fill
        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className="absolute"
          style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
        >
          <button
            onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
            className="group/btn relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-heritage-turquoise rounded-full shadow-lg shadow-heritage-turquoise/40 hover:scale-110 transition-transform"
          >
            <Plus className="text-white w-4 h-4 md:w-6 md:h-6" />
            <div className="absolute inset-0 bg-heritage-turquoise rounded-full animate-ping opacity-30" />
          </button>

          {activeHotspot === spot.id && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-64 p-6 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl z-20"
            >
              <h4 className="text-heritage-turquoise font-bold mb-2">{spot.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{spot.description}</p>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white/95" />
            </motion.div>
          )}
        </div>
      ))}

      <div className="absolute bottom-10 left-10 z-10">
        <span className="text-white font-bold bg-black/20 backdrop-blur-md px-4 py-2 rounded-full text-xs uppercase tracking-widest border border-white/10">
          Khám phá Trí tuệ Sinh thái
        </span>
      </div>
    </div>
  );
}
