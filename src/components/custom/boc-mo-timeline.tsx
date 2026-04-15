"use client";

import { motion } from "framer-motion";
import { ethnicities } from "@/data/ethnicities";
import { HeritageItem } from "@/data/types";

export function BocMoTimeline() {
  const tho = ethnicities.find((e) => e.id === "tho");
  const bocMo = tho?.heritage.find((h: HeritageItem) => h.id === "boc-mo");

  if (!bocMo || !bocMo.timeline) return null;

  return (
    <section className="py-24 px-4 bg-slate-950 font-sans border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-white font-heading font-bold mb-6">
            Lễ hội Bốc Mó <br />
            <span className="italic text-festival-orange opacity-80">(Dân tộc Thổ)</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
            Mỗi giai đoạn của lễ hội là một bước ngoặt tâm linh trong đời sống nông nghiệp người Thổ, gắn liền với niềm tin vào sự che chở của mẹ thiên nhiên.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-800 rounded-full" />

          <div className="space-y-16">
            {bocMo.timeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "flex-row-reverse text-right" : "flex-row text-left"
                }`}
              >
                <div className="w-5/12 hidden md:block">
                  {/* Empty space for alternating layout */}
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-festival-orange shadow-[0_0_15px_rgba(255,140,0,0.5)] z-10 border-4 border-slate-950" />

                <div className="w-full md:w-5/12 p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-festival-orange/40 transition-colors shadow-lg">
                  <span className="text-xs font-bold text-festival-orange uppercase tracking-widest mb-2 block">
                    Giai đoạn {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed italic">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
