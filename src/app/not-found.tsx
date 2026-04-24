import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-heading mb-6 text-national-gold">404</h1>
        <h2 className="text-2xl font-serif mb-4 italic">Hành trình lạc lối...</h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Hành trình khám phá văn hóa không có điểm dừng, nhưng dường như bản làng này chưa nằm trên bản đồ của chúng ta. Hãy tìm đường quay về với cội nguồn.
        </p>
        <Link href="/">
          <Button variant="outline" className="rounded-full border-slate-700 hover:bg-slate-800 text-white px-8">
            Quay về Trang chủ
          </Button>
        </Link>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-heritage-turquoise/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-national-gold/10 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}
