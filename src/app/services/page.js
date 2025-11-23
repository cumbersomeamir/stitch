import ServicesHero from "./components/ServicesHero";
import LongFormSection from "./components/LongFormSection";
import ShortFormSection from "./components/ShortFormSection";
import RepurposingSection from "./components/RepurposingSection";
import BrandDealSection from "./components/BrandDealSection";
import PodcastSection from "./components/PodcastSection";
import ThumbnailsSection from "./components/ThumbnailsSection";
import PodModelSection from "./components/PodModelSection";
import GrowthSection from "./components/GrowthSection";
import OnDemandSection from "./components/OnDemandSection";

export const metadata = {
  title: "Services | Stitch - Complete Editing Backbone",
  description: "Your edits, your style, delivered at the speed your growth demands.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg-dark-hero text-white overflow-hidden">
      <ServicesHero />
      <LongFormSection />
      <ShortFormSection />
      <RepurposingSection />
      <BrandDealSection />
      <PodcastSection />
      <ThumbnailsSection />
      <PodModelSection />
      <GrowthSection />
      <OnDemandSection />
    </main>
  );
}

