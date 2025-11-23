import HeroSection from "./components/HeroSection";
import CreatorPainPointsSection from "./components/CreatorPainPointsSection";
import ProcessTimeline from "./components/ProcessTimeline";
import StepBreakdown from "./components/StepBreakdown";
import StyleBibleExplainer from "./components/StyleBibleExplainer";
import PodsExplainer from "./components/PodsExplainer";
import ToolsAndWorkflowSection from "./components/ToolsAndWorkflowSection";
import WhyItWorksSection from "./components/WhyItWorksSection";
import FinalCTA from "./components/FinalCTA";
import BackgroundEffects from "./components/BackgroundEffects";

export const metadata = {
  title: "How It Works | Stitch - The Editing Pipeline",
  description: "A cinematic walkthrough of the Stitch editing process.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-bg-dark-hero text-white overflow-hidden">
      <BackgroundEffects />
      <HeroSection />
      <CreatorPainPointsSection />
      <ProcessTimeline />
      <StepBreakdown />
      <StyleBibleExplainer />
      <PodsExplainer />
      <ToolsAndWorkflowSection />
      <WhyItWorksSection />
      <FinalCTA />
    </main>
  );
}

