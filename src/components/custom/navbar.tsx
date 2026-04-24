"use client";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/60 border-b border-black/5 shadow-sm">
      <div className="text-2xl font-heading font-bold text-slate-900 tracking-tight">
        DI SẢN <span className="text-heritage-turquoise uppercase">NGHỆ AN</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-sans uppercase tracking-widest font-bold text-slate-600">
        <a href="/#ethnicities-grid" className="hover:text-heritage-turquoise transition-colors">Dân tộc</a>
        <a href="/#sacred-thunder" className="hover:text-heritage-turquoise transition-colors">Di sản</a>
        <a href="/#boc-mo-timeline" className="hover:text-heritage-turquoise transition-colors">Lễ hội</a>
      </div>
      <button 
        onClick={() => document.getElementById("ethnicities-grid")?.scrollIntoView({ behavior: "smooth" })}
        className="px-6 py-2 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-heritage-turquoise transition-all duration-300 shadow-lg"
      >
        Khám phá ngay
      </button>
    </nav>
  );
}
