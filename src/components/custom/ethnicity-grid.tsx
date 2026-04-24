"use client";

import { ethnicities } from "@/data/ethnicities";
import { EthnicityCard } from "./ethnicity-card";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function EthnicityGrid() {
  return (
    <section id="ethnicities-grid" className="relative py-24 px-4 bg-background font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-heritage-turquoise text-sm uppercase tracking-widest font-bold mb-4"
          >
            Đa dạng tộc người miền Tây Nghệ An
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-slate-900 font-heading font-bold mb-6"
          >
            Bức tranh Đa Tộc người
          </motion.h2>
          <div className="w-24 h-1 bg-national-gold mx-auto mb-8 rounded-full" />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Hệ thống dữ liệu số cung cấp cái nhìn đối sánh trực quan về không gian cư trú và đặc trưng văn hóa cốt lõi của các cộng đồng.
          </p>
        </div>

        {/* Interactive Comparison Table */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl"
        >
          <div className="p-8 border-b border-slate-100 bg-slate-50">
             <h3 className="text-slate-900 font-bold text-xl">Bảng tổng hợp đối sánh trực quan</h3>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-100 hover:bg-transparent">
                  <TableHead className="text-heritage-turquoise font-bold uppercase tracking-wider text-[10px] w-[150px]">Tên Dân tộc</TableHead>
                  <TableHead className="text-heritage-turquoise font-bold uppercase tracking-wider text-[10px]">Đặc điểm Nhân khẩu & Không gian Cư trú</TableHead>
                  <TableHead className="text-heritage-turquoise font-bold uppercase tracking-wider text-[10px]">Điểm nhấn Đặc trưng trong Hệ thống Dữ liệu</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ethnicities.map((ethnicity) => (
                  <TableRow key={ethnicity.id} className="border-slate-50 hover:bg-slate-50 transition-colors group">
                    <TableCell className="font-heading font-bold text-slate-900 text-lg">{ethnicity.name}</TableCell>
                    <TableCell className="text-slate-600 text-sm py-6">
                      <div className="mb-2 font-bold text-slate-500">{ethnicity.location.join(", ")}</div>
                      <div className="text-xs italic text-slate-400">{ethnicity.population?.provinceStats}</div>
                    </TableCell>
                    <TableCell className="text-slate-600 text-sm leading-relaxed max-w-md">
                        {ethnicity.id === "kho-mu" && "Tập trung đông nhất tại Nghệ An; nghệ thuật đan lát thủ công, trang sức bạc không khép kín và kỹ thuật 'gậy chọc hốc'."}
                        {ethnicity.id === "tho" && "Bao gồm các nhóm Kẹo, Mọn, Cuối, Đan Lai; sự giao thoa mạnh mẽ trong phục trang và truyền thống tang lễ lộn ngược."}
                        {ethnicity.id === "mong" && "Cư trú vùng rẻo cao; văn hóa trồng lanh, dệt vải điêu luyện và Lễ hội Gầu Tào với Trục Vũ Trụ Cây Nêu linh thiêng."}
                        {ethnicity.id === "o-du" && "Dân số ít nhất Việt Nam; tín ngưỡng thờ Thần Sấm độc đáo và tính toán chu kỳ thời gian theo hiện tượng thiên nhiên."}
                        {ethnicity.id === "thai" && "Dân số đông nhất trong các dân tộc thiểu số; làm ruộng nước sớm nhất Đông Nam Á, ảnh hưởng sâu sắc đến văn hóa vùng."}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
          {ethnicities.map((ethnicity, index) => (
            <EthnicityCard key={ethnicity.id} ethnicity={ethnicity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
