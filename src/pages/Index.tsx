import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";
import { ChristmasLights } from "@/components/ChristmasLights";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ChristmasLights />
      <Hero />
      <About />
      <Catalog />
      <Footer />
    </div>
  );
};

export default Index;
