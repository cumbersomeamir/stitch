import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-hero">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <BenefitsSection />
    </main>
  );
}

