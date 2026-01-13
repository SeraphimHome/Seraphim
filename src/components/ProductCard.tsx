import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string | string[];
  price?: number;
  whatsappMessage: string;
  buttonText?: string;
  category?: string;
  specs?: {
    size?: string;
    burnTime?: string;
    wax?: string;
    duration?: string;
    formula?: string;
  };
  badge?: {
    text: string;
    color: string;
  } | null;
}

export const ProductCard = ({ 
  name, 
  description,
  price,
  image, 
  whatsappMessage,
  buttonText,
  specs,
  badge
}: ProductCardProps) => {
  const images = Array.isArray(image) ? image : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleWhatsAppClick = () => {
    const phone = "5551997418179";
    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const badgeColors = {
    red: "bg-red-500/90",
    gold: "bg-amber-500/90",
    purple: "bg-purple-500/90",
    green: "bg-green-500/90",
    pink: "bg-pink-500/90",
  };

  return (
    <Card className="group overflow-hidden border-border/50 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 bg-card flex flex-col h-full">
      <div className="aspect-square overflow-hidden bg-muted relative">
        <img
          src={images[currentImageIndex]}
          alt={`${name} - Imagem ${currentImageIndex + 1}`}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
          loading="lazy"
        />
        
        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 left-3 ${badgeColors[badge.color as keyof typeof badgeColors] || badgeColors.gold} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm z-10`}>
            {badge.text}
          </div>
        )}

        {/* Multiple Images Indicator */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
            📷 {images.length}
          </div>
        )}
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed text-left">
          {description}
        </p>

        {/* Specs */}
        {specs && (
          <div className="flex flex-wrap gap-2 mb-4 text-xs text-muted-foreground">
            {specs.size && (
              <span className="bg-muted/60 px-2 py-1 rounded-md">
                📏 {specs.size}
              </span>
            )}
            {specs.burnTime && (
              <span className="bg-muted/60 px-2 py-1 rounded-md">
                🕐 {specs.burnTime}
              </span>
            )}
            {specs.duration && (
              <span className="bg-muted/60 px-2 py-1 rounded-md">
                🕐 {specs.duration}
              </span>
            )}
            {specs.wax && (
              <span className="bg-muted/60 px-2 py-1 rounded-md">
                🥥 {specs.wax}
              </span>
            )}
            {specs.formula && (
              <span className="bg-muted/60 px-2 py-1 rounded-md">
                💧 {specs.formula}
              </span>
            )}
          </div>
        )}
        
        {/* Price with better contrast */}
        {price && (
          <div className="mb-4">
            <span className="inline-block bg-primary/10 text-primary text-2xl font-bold px-4 py-2 rounded-full">
              R$ {price.toFixed(2)}
            </span>
          </div>
        )}
        
        {/* WhatsApp CTA */}
        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full transition-all duration-300 hover:scale-105 shadow-soft hover:shadow-hover mt-auto group"
        >
          <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
          {buttonText || (price ? "Quero essa vela" : "Fazer orçamento")}
        </Button>
      </CardContent>
    </Card>
  );
};
