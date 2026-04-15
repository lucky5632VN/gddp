"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lock, User, ArrowRight } from "lucide-react";
import { useState } from "react";

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic xác thực sẽ được tích hợp với Insforge tại đây
    console.log("Đăng nhập với:", email, password);
    alert("Hệ thống Demo: Chức năng đăng nhập sẽ được kết nối với Insforge.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-heritage-turquoise/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-festival-orange/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <div className="text-3xl font-heading font-bold text-white mb-2 tracking-tighter">
            NGHEAN<span className="text-heritage-turquoise">HERITAGE</span>
          </div>
          <p className="text-slate-500 font-medium">Hệ thống Quản trị Di sản Kỹ thuật số</p>
        </div>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-heritage-turquoise via-festival-orange to-national-gold" />
          <CardHeader className="pt-8 text-center">
            <CardTitle className="text-2xl text-white font-heading">Đăng nhập</CardTitle>
            <CardDescription className="text-slate-400">
              Vui lòng nhập thông tin để truy cập hệ thống quản trị.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Email</label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-heritage-turquoise transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-heritage-turquoise transition-all"
                    placeholder="admin@heritage.vn"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Mật khẩu</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-festival-orange transition-colors" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-festival-orange transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-white hover:bg-heritage-turquoise hover:text-white text-slate-950 font-bold py-6 rounded-xl transition-all group"
              >
                Tiếp tục
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 text-center">
              <a href="/" className="text-sm text-slate-600 hover:text-slate-400 transition-colors inline-flex items-center">
                Quay lại Trang chủ
              </a>
            </div>
          </CardContent>
        </Card>

        <p className="text-center mt-8 text-xs text-slate-700 uppercase tracking-widest">
          Phát triển bởi Antigravity System
        </p>
      </motion.div>
    </div>
  );
}
