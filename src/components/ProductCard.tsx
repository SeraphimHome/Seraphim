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
}

export const ProductCard = ({ 
  name, 
  description,
  price,
  image, 
  whatsappMessage,
  buttonText
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

  return (
    <Card className="group overflow-hidden border-border/50 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 bg-card flex flex-col h-full">
      <div className="aspect-square overflow-hidden bg-muted relative">
        <img
          src={images[currentImageIndex]}
          alt={`${name} - Imagem ${currentImageIndex + 1}`}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
        />
        
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
        <p className="text-muted-foreground mb-4 leading-relaxed min-h-[4.5rem] text-justify">
          {description}
        </p>
        
        {price && (
          <p className="text-xl font-semibold text-foreground mb-4">
            R$ {price.toFixed(2)}
          </p>
        )}
        
        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-smooth mt-auto"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          {buttonText || (price ? "Quero essa vela" : "Fazer orçamento")}
        </Button>
      </CardContent>
    </Card>
  );
};
