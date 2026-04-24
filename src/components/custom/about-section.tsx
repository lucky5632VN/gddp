"use client";

import { motion } from "framer-motion";
import { CloudRain, Milestone, Landmark, Wind } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-background font-sans border-b border-slate-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/40 via-background to-background opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-national-gold text-sm uppercase tracking-[0.2em] font-bold mb-6">
              Không gian Địa lý & Sinh thái Xứ Nghệ
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
              Sức mạnh từ <span className="italic text-heritage-turquoise">khí hậu khắc nghiệt</span>
            </h2>
            
            <div className="text-slate-600 text-lg leading-relaxed space-y-6 font-serif">
              <p>
                Nghệ An là trung tâm khu vực Bắc Trung Bộ, nơi hội tụ địa hình phức tạp và đa dạng nhất. Với tổng diện tích đất nông nghiệp lên tới <strong className="text-slate-900">1.249.176,1 ha</strong> và quỹ đất phi nông nghiệp <strong className="text-slate-900">129.171,6 ha</strong>, đây là nền tảng của một nền kinh tế bám rễ sâu vào sinh tồn tự nhiên.
              </p>
              <p>
                Khí hậu nhiệt đới gió mùa khắc nghiệt với độ ẩm duy trì ở mức <strong className="text-slate-900">40%</strong>, áp suất <strong className="text-slate-900">1005 hPa</strong> và điểm ngưng tụ <strong className="text-slate-900">13°C</strong>. Sự tàn phá của <strong className="text-heritage-turquoise font-bold">Gió Lào</strong> và bão lũ đã tôi luyện nên ý chí kiên cường và bản sắc văn hóa kiên trung, bất khuất của cư dân xứ Nghệ.
              </p>
              <p className="text-sm italic text-slate-500">
                Làn điệu <strong className="text-heritage-turquoise underline decoration-heritage-turquoise/30 underline-offset-4">Dân ca Ví, Giặm</strong> - Di sản UNESCO - không chỉ là âm nhạc mà là nhịp điệu lao động, là "đặc sản chiến lược" gắn kết ngoại giao văn hóa của tỉnh.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <CloudRain className="text-heritage-turquoise mb-4" />
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Đất nông nghiệp</div>
                    <div className="text-xl font-bold text-slate-900">1.249.176 ha</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <Wind className="text-heritage-turquoise mb-4" />
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Áp suất khí quyển</div>
                    <div className="text-xl font-bold text-slate-900">1005 hPa</div>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-heritage-turquoise/20 to-national-gold/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white border border-slate-200 p-10 rounded-3xl shadow-xl">
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center">
                        <Landmark className="mr-3 text-national-gold" /> Tinh hoa Ẩm thực Tương tác
                    </h3>
                    <div className="space-y-4">
                        <div className="flex border-b border-slate-100 pb-4">
                            <div className="w-24 text-heritage-turquoise font-bold">Cháo Lươn</div>
                            <div className="text-sm text-slate-500">Tính ấm nóng giúp cơ thể thích ứng với thời tiết cực đoan miền Trung.</div>
                        </div>
                        <div className="flex border-b border-slate-100 pb-4">
                            <div className="w-24 text-heritage-turquoise font-bold">Nhút</div>
                            <div className="text-sm text-slate-500">Mít non muối mặn – biểu tượng của tính tằn tiện và sáng tạo trong gian khó.</div>
                        </div>
                        <div className="flex">
                            <div className="w-24 text-heritage-turquoise font-bold">Rươi</div>
                            <div className="text-sm text-slate-500">"Quà của đất" Hưng Nguyên, kết tinh từ nhịp điệu sinh thái đất sình lầy.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8 border-l-2 border-national-gold bg-slate-50">
                <h4 className="text-slate-900 font-bold mb-2 flex items-center">
                    <Milestone className="w-4 h-4 mr-2 text-national-gold" /> Địa linh nhân kiệt
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">
                    Nghệ An tự hào là quê hương của Chủ tịch Hồ Chí Minh - Danh nhân văn hóa thế giới. Nơi đây đã sản sinh ra vô số hào kiệt định hình vận mệnh đất nước.
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
