import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Hero />
      <About />
      <Catalog />
      <Footer />
    </div>
  );
};

export default Index;
