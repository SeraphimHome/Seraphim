import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-candles.jpg";

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrolled = window.scrollY;
      const parallaxSpeed = 0.5; // Quanto menor, mais lento o movimento
      
      // Aplica o efeito parallax apenas se estiver na viewport
      if (scrolled < window.innerHeight) {
        parallaxRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Background Image with Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: 'translateY(0)',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-wider scale-in" style={{
          textShadow: '0 2px 10px rgba(158, 138, 105, 0.3), 0 4px 20px rgba(158, 138, 105, 0.15)',
          letterSpacing: '0.05em'
        }}>
          Seraphim
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Velas aromatizadas feitas com carinho e propósito
        </p>
        <div className="fade-in flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto sm:max-w-none" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg"
            onClick={scrollToCatalog}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-semibold rounded-full shadow-hover hover:shadow-[0_8px_30px_rgba(158,138,105,0.3)] transition-all duration-300 hover:scale-110 w-full sm:w-auto"
          >
            Explorar Velas ✨
          </Button>

          <Button 
            size="lg"
            onClick={scrollToAbout}
            variant="outline"
            className="border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 text-foreground px-8 py-7 text-lg rounded-full shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Conheça a Seraphim
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
