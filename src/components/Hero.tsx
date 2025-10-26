import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-candles.jpg";

export const Hero = () => {
  const scrollToCatalog = () => {
    const catalog = document.getElementById("catalogo");
    catalog?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
          Seraphim
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
          Velas aromatizadas feitas com carinho e propósito
        </p>
        <Button 
          size="lg"
          onClick={scrollToCatalog}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-soft hover:shadow-hover transition-smooth"
        >
          Ver Catálogo
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};
