"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Sparkles, ArrowDown } from "lucide-react";

export function ParallaxAxisMundi() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const treeHeight = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);
  const treeGlow = useTransform(smoothProgress, [0.1, 0.5, 0.9], [0, 1, 0.5]);

  const ritualSteps = [
    {
      title: "Khởi tạo Tâm linh",
      description: "Cây Nêu được dựng lên tại trung tâm lễ hội Gầu Tào, đóng vai trò là 'Trục Vũ Trụ' (Axis Mundi) kết nối Đất và Trời.",
      label: "Giai đoạn 1",
      img: "/images/rituals/khoi_tao_tam_linh.png",
      pos: 0.2
    },
    {
      title: "Gà trống - Sứ giả của Thần",
      description: "Được treo trên đỉnh cây Nêu, tiếng gáy của gà trống gọi mặt trời, xua tan bóng tối và mời gọi các vị thần giáng thế.",
      label: "Vật phẩm 1",
      img: "/images/rituals/ga_trong_icon.png",
      pos: 0.4
    },
    {
      title: "Rượu ngô & Linh hồn Đất",
      description: "Dâng lên linh hồn tổ tiên và thần linh, rượu ngô là biểu tượng của sự no ấm và lòng biết ơn của người Mông.",
      label: "Vật phẩm 2",
      img: "/images/rituals/ruou_ngo_icon.png",
      pos: 0.6
    },
    {
      title: "Kết nối Thiên - Địa",
      description: "Giấy bản và nước suối thanh khiết hoàn tất nghi lễ, mở ra không gian giao tiếp linh thiêng giữa con người và vũ trụ.",
      label: "Giai đoạn cuối",
      img: "/images/rituals/ket_noi_thien_dia.png",
      pos: 0.8
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-background">
      {/* Sticky Visualization Layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/axis_mundi_bg.png" 
            alt="Không gian tâm linh" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-heritage-turquoise/10 via-transparent to-transparent opacity-60" />
        
        <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center gap-12">
          {/* Left: The Tree (Axis Mundi) */}
          <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative flex items-center justify-center">
            <div className="relative h-full w-4 md:w-16 bg-slate-100/50 rounded-full shadow-inner overflow-hidden border border-white/20">
                {/* The Growing Core - Now with a detailed image */}
                <motion.div 
                    style={{ height: treeHeight }}
                    className="absolute bottom-0 left-0 w-full z-10"
                >
                    <div className="relative w-full h-[80vh] md:h-[100vh]">
                        <Image 
                            src="/images/detailed_cay_neu.png" 
                            alt="Cây Nêu Thiêng" 
                            fill 
                            className="object-cover object-bottom"
                        />
                    </div>
                </motion.div>
                
                {/* Fallback/Glow Layer */}
                <motion.div 
                    style={{ height: treeHeight, opacity: treeGlow }}
                    className="absolute bottom-0 left-0 w-full bg-heritage-turquoise blur-lg -z-10"
                />
            </div>

            {/* Floating Ritual Icons (Appear as they scroll) */}
            {ritualSteps.map((step, i) => (
                step.img && (
                    <motion.div
                        key={i}
                        style={{
                            opacity: useTransform(smoothProgress, [step.pos - 0.1, step.pos, step.pos + 0.1], [0, 1, 0]),
                            scale: useTransform(smoothProgress, [step.pos - 0.1, step.pos, step.pos + 0.1], [0.5, 1.2, 0.5]),
                            x: useTransform(smoothProgress, [step.pos - 0.1, step.pos], [100, 0]),
                        }}
                        className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-12"
                    >
                        <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-national-gold/30 bg-white shadow-2xl p-2">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <Image src={step.img} alt={step.title} fill className="object-cover" />
                            </div>
                            <div className="absolute -top-2 -right-2 bg-national-gold p-2 rounded-full shadow-lg">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </motion.div>
                )
            ))}

            {/* Central Light Beam */}
            <motion.div 
                style={{ opacity: treeGlow }}
                className="absolute inset-y-0 w-32 bg-heritage-turquoise/5 blur-3xl -z-10"
            />
          </div>

          {/* Right: The Narrative Content */}
          <div className="w-full md:w-1/2 relative h-64 flex flex-col justify-center">
            {ritualSteps.map((step, i) => (
                <motion.div
                    key={i}
                    style={{
                        opacity: useTransform(smoothProgress, [step.pos - 0.1, step.pos, step.pos + 0.1], [0, 1, 0]),
                        y: useTransform(smoothProgress, [step.pos - 0.1, step.pos, step.pos + 0.1], [20, 0, -20]),
                    }}
                    className="absolute inset-0 flex flex-col justify-center"
                >
                    <span className="text-heritage-turquoise font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                        {step.label}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                        {step.title}
                    </h3>
                    <p className="text-slate-600 text-lg md:text-xl font-serif italic leading-relaxed border-l-4 border-national-gold pl-6">
                        {step.description}
                    </p>
                </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Intro Overlay */}
      <motion.div 
        style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
        className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-30 pointer-events-none"
      >
        <div className="text-center px-6">
            <h2 className="text-6xl md:text-9xl font-heading font-bold text-slate-900 mb-8 tracking-tight">
                TRỤC <br />
                <span className="text-transparent bg-clip-text bg-national-gold uppercase">Vũ Trụ</span>
            </h2>
            <div className="flex flex-col items-center gap-4">
                <p className="text-slate-500 uppercase tracking-[0.5em] text-xs font-bold">Cuộn để hành lễ dựng nêu</p>
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ArrowDown className="text-heritage-turquoise w-6 h-6" />
                </motion.div>
            </div>
        </div>
      </motion.div>

      {/* Outro Overlay */}
      <motion.div 
        style={{ opacity: useTransform(smoothProgress, [0.9, 1], [0, 1]) }}
        className="absolute bottom-0 left-0 w-full h-screen flex items-center justify-center z-30 pointer-events-none bg-background"
      >
        <div className="text-center px-6 max-w-3xl">
            <h2 className="text-4xl md:text-7xl font-heading font-bold text-slate-900 mb-8">Nghi lễ Hoàn tất</h2>
            <p className="text-slate-600 text-xl font-serif italic">"Lời cầu nguyện đã được gửi đi, kết nối giữa con người và thần linh đã được thiết lập thông qua cây Nêu thiêng liêng."</p>
        </div>
      </motion.div>
    </section>
  );
}
