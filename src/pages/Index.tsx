import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpaceSection from "@/components/SpaceSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <BioSection />
      <SpecialtiesSection />
      <TestimonialsSection />
      <SpaceSection />
      <FooterSection />
    </main>
  );
};

export default Index;
