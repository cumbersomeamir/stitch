import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import ScenariosSection from "@/components/ScenariosSection";
import ComparisonSection from "@/components/ComparisonSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-hero">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <ServicesSection />
      <ScenariosSection />
      <ComparisonSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

