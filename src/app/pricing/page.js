import PricingHero from "./components/PricingHero";
import PricingCards from "./components/PricingCards";
import AddOnsSection from "./components/AddOnsSection";
import WhyMonthlySection from "./components/WhyMonthlySection";
import PricingCTA from "./components/PricingCTA";

export const metadata = {
  title: "Pricing | Stitch - Scalable Editing Plans",
  description: "Simple, transparent pricing built for creators who want to scale.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-bg-dark-hero text-white overflow-hidden">
      <PricingHero />
      <PricingCards />
      <AddOnsSection />
      <WhyMonthlySection />
      <PricingCTA />
    </main>
  );
}

