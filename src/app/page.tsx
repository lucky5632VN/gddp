import { Navbar } from "@/components/custom/navbar";
import { Hero } from "@/components/custom/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-heritage-turquoise/30">
      <Navbar />
      <Hero />
    </main>
  );
}
