import Preloader from "@/components/Preloader";
import HeroSection from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Preloader />
      <HeroSection />
      <section className="w-full h-[1000px] bg-white">w</section>
    </main>
  );
}
