"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, User, Bot, Loader2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function HeritageAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages((prev) => [...prev, { role: "bot", content: data.text }]);
      } else {
        setMessages((prev) => [...prev, { role: "bot", content: "Tôi xin lỗi, bản thân đang bận việc bản một chút. Hãy thử lại sau nhé!" }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", content: "Có chút trục trặc khi kết nối với bản làng. Bạn kiểm tra lại mạng nhé!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-heritage-turquoise/20 rounded-xl">
                  <Sparkles className="w-5 h-5 text-heritage-turquoise" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm tracking-tight">Trưởng Bản Tri Thức</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">AI Trợ lý Di sản</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30">
              {messages.length === 0 && (
                <div className="text-center py-8 space-y-4">
                  <Bot className="w-12 h-12 text-slate-300 mx-auto" />
                  <p className="text-sm text-slate-500 italic px-4">
                    "Chào bạn, tôi là Trưởng bản tri thức. Bạn muốn tìm hiểu về phong tục nào của các dân tộc Nghệ An hôm nay?"
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Người Ơ Đu thờ gì?", "Lễ hội Bốc Mó", "Văn hóa dân tộc Mông"].map((q) => (
                      <button
                        key={q}
                        onClick={() => setInput(q)}
                        className="text-[10px] bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:border-heritage-turquoise hover:text-heritage-turquoise transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] flex items-start space-x-2 ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"}`}>
                    <div className={`p-2 rounded-lg ${msg.role === "user" ? "bg-slate-100" : "bg-heritage-turquoise/10"}`}>
                      {msg.role === "user" ? <User className="w-4 h-4 text-slate-600" /> : <Bot className="w-4 h-4 text-heritage-turquoise" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-slate-900 text-white rounded-tr-none" 
                        : "bg-white border border-slate-100 shadow-sm rounded-tl-none text-slate-700"
                    }`}>
                      <div className="markdown-content animate-in fade-in slide-in-from-bottom-1 duration-700">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 text-heritage-turquoise animate-spin" />
                    <span className="text-xs text-slate-500 italic">Đang tra cứu sử sách...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Hỏi Trưởng bản về di sản..."
                  className="flex-1 bg-slate-50 border-none focus:ring-1 focus:ring-heritage-turquoise/30 rounded-full px-5 py-3 text-sm"
                />
                <Button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="rounded-full w-10 h-10 p-0 bg-slate-900 hover:bg-heritage-turquoise transition-colors"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? "bg-slate-900 rotate-90" : "bg-heritage-turquoise"
        }`}
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageSquare className="text-white w-7 h-7" />}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-national-gold rounded-full flex items-center justify-center"
          >
            <Sparkles className="text-white w-3 h-3" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}
