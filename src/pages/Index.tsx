import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpaceSection from "@/components/SpaceSection";
import FooterSection from "@/components/FooterSection";
import { useEffect } from "react";
import { prefetchContentPages } from "@/lib/prefetch";

const Index = () => {
  useEffect(() => {
    prefetchContentPages();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <BioSection />
      <SpecialtiesSection />
      <ProductsSection />
      <TestimonialsSection />
      <SpaceSection />
      <FooterSection />
    </main>
  );
};

export default Index;
