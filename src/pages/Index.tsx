import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Catalog } from "@/components/Catalog";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Hero />
      <About />
      {/* <Testimonials /> */}
      <Catalog />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
