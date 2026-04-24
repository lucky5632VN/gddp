"use client";

import { motion } from "framer-motion";
import { Play, Volume2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

export function SacredThunder() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulated waveform data
  const bars = useMemo(() => Array.from({ length: 48 }, () => Math.random() * 0.9 + 0.1), []);

  return (
    <section className="py-32 px-4 bg-background border-y border-slate-100 font-sans relative overflow-hidden">
      {/* Dynamic background lighting */}
      <motion.div 
        animate={{ opacity: isPlaying ? [0, 0.3, 0] : 0 }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute inset-0 bg-heritage-turquoise/5 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-heritage-turquoise/5 text-heritage-turquoise border border-heritage-turquoise/30 mb-8 backdrop-blur-md">
            <Volume2 className="w-4 h-4 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Trải nghiệm thính giác dân tộc học</span>
          </div>
          <h2 className="text-5xl md:text-7xl text-slate-900 font-heading font-bold mb-8 leading-tight">
            Thần Sấm & <br />
            <span className="text-national-gold italic">Chu kỳ vĩnh cửu</span>
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-serif max-w-xl">
            <p className="dropcap">
              Đối với người Ơ Đu, thời gian không được đo bằng con số mà bằng <strong className="text-slate-900">tiếng sấm đầu tiên</strong> trong năm. Thần Sấm là vị thần tối cao, biểu tượng của uy quyền và sự sống khởi nguồn.
            </p>
            <p>
              Trong <strong className="text-heritage-turquoise italic">Lễ hội Chăm Phtrong</strong>, tiếng sấm đánh thức vạn vật, mở ra mùa tra hạt. Người dân gõ ống tre xuống đất mô phỏng âm thanh này, mời gọi sự sinh sôi nảy nở của mầm mống trên nương rẫy.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-8 text-xl rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Volume2 className="mr-3 w-6 h-6" /> : <Play className="mr-3 w-6 h-6 fill-current" />}
              {isPlaying ? "Đang lắng nghe..." : "Mời gọi Thần Sấm"}
            </Button>
            <div className="flex flex-col justify-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Trạng thái</span>
                <span className={`text-xs font-bold ${isPlaying ? 'text-heritage-turquoise' : 'text-slate-600'}`}>
                    {isPlaying ? "Đang cử hành nghi lễ" : "Đang chờ đợi tín hiệu"}
                </span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl bg-white p-12 rounded-[4rem] border border-slate-100 shadow-2xl relative group">
          <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-br from-heritage-turquoise/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-1">
                <span className="text-slate-400 text-[10px] font-mono tracking-widest block uppercase">Dấu bản âm thanh</span>
                <h4 className="text-slate-900 font-bold text-sm tracking-widest uppercase">Tiếng sấm thiêng (Ơ Đu)</h4>
            </div>
            <div className={`w-3 h-3 rounded-full ${isPlaying ? "bg-heritage-turquoise animate-[ping_1.5s_infinite]" : "bg-slate-800"} shadow-[0_0_20px_#67e8f9]`} />
          </div>
          
          <div className="flex items-end justify-between h-56 gap-1 mb-12">
            {bars.map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: "5%" }}
                animate={{ 
                  height: isPlaying ? `${height * 100}%` : "10%",
                }}
                transition={{ 
                  duration: isPlaying ? 0.05 + Math.random() * 0.1 : 0.5, 
                  ease: "easeInOut",
                  repeat: isPlaying ? Infinity : 0,
                  repeatType: "reverse"
                }}
                className={`w-full rounded-full transition-colors duration-500 ${isPlaying ? 'bg-heritage-turquoise shadow-[0_0_10px_rgba(103,232,249,0.5)]' : 'bg-slate-100'}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 relative z-10">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] text-slate-400 uppercase block mb-2">Tần số</span>
                <span className="text-slate-900 font-mono text-lg">{isPlaying ? "432 Hz" : "--"}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] text-slate-400 uppercase block mb-2">Ý nghĩa</span>
                <span className="text-slate-900 font-bold text-xs">{isPlaying ? "Sự sống tỉnh giấc" : "Tĩnh lặng chờ đợi"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
