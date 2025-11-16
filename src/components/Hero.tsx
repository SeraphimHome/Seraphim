import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-candles.jpg";

export const Hero = () => {
  const scrollToCatalog = () => {
    const catalog = document.getElementById("catalogo");
    catalog?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    about?.scrollIntoView({ behavior: "smooth" })
  }

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
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight scale-in">
          Seraphim
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light fade-in" style={{ animationDelay: '0.2s' }}>
          Velas aromatizadas feitas com carinho e propósito
        </p>
        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto sm:max-w-none" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg"
            onClick={scrollToCatalog}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-110 w-full sm:w-auto"
          >
            Ver Catálogo
          </Button>

          <Button 
            size="lg"
            onClick={scrollToAbout}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-110 w-full sm:w-auto"
          >
            Nossa História
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float">
        <ChevronDown className="w-8 h-8 text-primary pulse-soft" />
      </div>
    </section>
  );
};
