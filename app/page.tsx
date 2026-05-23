import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import TestimonialCard from "@/components/TestimonialCard";
import DetailedCards from "@/components/DetailedCards";
import { AnimatedTooltipPreview } from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-4xl font-bold">Welcome to My Next.js App!</h1> */}
      <HeroSection />
      <Featured/>
      <WhyChooseUs/>
      <TestimonialCard/>
      <DetailedCards/>
      <AnimatedTooltipPreview/>
      <Footer/>
      
    </main>
  );
}
