import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header - aparece após scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "translate-y-0 opacity-100 bg-background/95 backdrop-blur-md shadow-soft"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-foreground hover:text-primary transition-smooth font-display"
            >
              Seraphim
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={scrollToTop}
                className="text-foreground/80 hover:text-primary transition-smooth"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-primary transition-smooth"
              >
                Sobre
              </button>
              {/* <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground/80 hover:text-primary transition-smooth"
              >
                Depoimentos
              </button> */}
              <button
                onClick={() => scrollToSection("catalogo")}
                className="text-foreground/80 hover:text-primary transition-smooth"
              >
                Catálogo
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground/80 hover:text-primary transition-smooth"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground/80 hover:text-primary transition-smooth"
              >
                Contato
              </button>
              
              {/* CTA WhatsApp */}
              <Button
                onClick={() => window.open("https://wa.me/5551997418179?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20as%20velas%20Seraphim", "_blank")}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-6 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                Fale Conosco
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-smooth"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 px-4 pb-6 bg-background/95 backdrop-blur-md border-t border-border/50">
            <button
              onClick={scrollToTop}
              className="text-foreground/80 hover:text-primary transition-smooth text-left py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-smooth text-left py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("catalogo")}
              className="text-foreground/80 hover:text-primary transition-smooth text-left py-2"
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground/80 hover:text-primary transition-smooth text-left py-2"
            >
              Contato
            </button>
            <Button
              onClick={() => {
                window.open("https://wa.me/5551997418179?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20as%20velas%20Seraphim", "_blank");
                setIsMobileMenuOpen(false);
              }}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-soft hover:shadow-hover transition-all duration-300 mt-2"
            >
              Fale Conosco
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};
