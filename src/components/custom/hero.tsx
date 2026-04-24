"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center"
    >
      {/* Background Layer with subtle movement */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0 bg-[url('/images/nghean_hero.png')] bg-cover bg-center opacity-80"
      />

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-background" />

      {/* Content Layer */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-heritage-turquoise font-serif italic text-xl md:text-2xl mb-4 tracking-wider"
        >
          Hành trình di sản vùng biên viễn
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-8xl font-heading text-slate-900 font-bold leading-tight mb-8"
        >
          DI SẢN <br />
          <span className="text-transparent bg-clip-text bg-national-gold uppercase">NGHỆ AN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Khám phá vẻ đẹp vĩnh cửu và tinh hoa văn hóa của các dân tộc Thổ, Khơ Mú, Thái, và Ơ Đu nơi miền Tây xứ Nghệ.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <Button
            size="lg"
            className="rounded-full px-12 py-8 text-lg font-bold uppercase tracking-widest bg-slate-900 text-white hover:bg-heritage-turquoise transition-all duration-300 shadow-2xl"
            onClick={() => document.getElementById("ethnicities-grid")?.scrollIntoView({ behavior: "smooth" })}
          >
            Khám phá tinh hoa
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
