"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export function ClothingComparison() {
  return (
    <div className="py-16 px-6 bg-slate-900/50 rounded-[3rem] border border-white/5 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-heading font-bold text-white mb-6 underline decoration-heritage-turquoise underline-offset-8">
            Nghịch lý Kỹ thuật & Sự tiếp biến
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed font-serif">
            Người Thổ dù trồng bông nhưng mua váy người Thái-Thanh để sử dụng, sau đó thực hiện các "tùy chỉnh cấu trúc" để tạo bản sắc riêng. Sự khác biệt này được giải thích qua truyền thuyết đầy tính nhân văn về tình chị em Thái-Thổ.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start bg-white/5 p-6 rounded-2xl border border-white/5 group hover:border-heritage-turquoise/30 transition-colors">
               <div className="w-24 font-bold text-xs uppercase text-heritage-turquoise mt-1">Váy Thái (Nguyên bản)</div>
               <div className="text-xs text-slate-300">Áo ngắn đặc trưng do người chị Thái-Thanh cắt phần vạt dưới tặng cho em gái.</div>
            </div>
            <div className="flex justify-center">
              <MoveRight className="text-national-gold animate-bounce-x" />
            </div>
            <div className="flex items-start bg-heritage-turquoise/5 p-6 rounded-2xl border border-heritage-turquoise/20 group hover:border-heritage-turquoise transition-colors">
               <div className="w-24 font-bold text-xs uppercase text-heritage-turquoise mt-1">Váy Thổ (Cải biên)</div>
               <div className="text-xs text-slate-200">
                  <p className="mb-2 font-bold font-heading italic text-national-gold">"Cô em gái lấy chồng người Thổ nghèo khó..."</p>
                  <ul className="list-disc pl-4 space-y-1 opacity-80">
                    <li>Khâu đệm vải trắng bên trong để giữ nếp váy luôn thẳng.</li>
                    <li>Nối thêm <span className="text-white font-bold">30cm vải trắng</span> làm cạp váy ở phần trên.</li>
                    <li>Phối với yếm trắng và thắt lưng lụa xanh/vàng.</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>

        <div className="relative space-y-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
               {/* Conceptual representation using patterns */}
               <div className="absolute inset-0 bg-slate-800 flex">
                  <div className="w-1/2 h-full bg-[repeating-linear-gradient(0deg,_#334155_0px,_#334155_2px,_transparent_2px,_transparent_10px)] flex flex-col items-center justify-center p-8 border-r border-white/5">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-bold">Thái - Thanh</span>
                    <div className="w-24 h-40 bg-slate-900 border-b-4 border-heritage-turquoise shadow-2xl scale-90" />
                  </div>
                  <div className="w-1/2 h-full bg-slate-950 flex flex-col items-center justify-center p-8">
                    <span className="text-[10px] uppercase tracking-widest text-heritage-turquoise mb-4 font-bold">Phụ nữ Thổ</span>
                    <div className="w-24 h-40 bg-slate-900 border-t-[20px] border-t-white border-b-4 border-heritage-turquoise shadow-2xl relative">
                        <div className="absolute inset-0 bg-white/5" />
                        <div className="absolute -top-1 w-full h-1 bg-national-gold/50" />
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-red-950/20 border border-red-500/20 p-8 rounded-2xl backdrop-blur-sm">
                <h4 className="text-red-500 font-bold uppercase text-[10px] tracking-widest mb-3">Tâm linh Tang lễ (Trật tự đảo lộn)</h4>
                <p className="text-xs text-slate-400 leading-relaxed italic border-l border-red-500/30 pl-4">
                    "Đường kim may lộn ngược ra ngoài, gấu áo để xổ chỉ te tua biểu thị cho sự hỗn mang, đảo lộn của trật tự không gian sống khi cái chết ập đến."
                </p>
            </div>
        </div>
      </div>

      <div className="mt-12 p-8 border-t border-white/5 text-slate-400 text-sm font-serif">
        <span className="text-national-gold font-bold">Ghi chú Dân tộc học:</span> Sự vay mượn phục trang Thái phản ánh quá trình tiếp biến văn hóa mạnh mẽ của người Thổ tại vùng đồi núi thấp Nghệ An.
      </div>
    </div>
  );
}
