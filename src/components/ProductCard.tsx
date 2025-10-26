import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price?: number;
  whatsappMessage: string;
}

export const ProductCard = ({ 
  name, 
  description,
  price,
  image, 
  whatsappMessage 
}: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const phone = "5551997418179";
    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <Card className="group overflow-hidden border-border/50 shadow-soft hover:shadow-hover transition-smooth bg-card h-[580px] flex flex-col">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-4 flex-grow">
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
          {price ? "Quero essa vela" : "Fazer orçamento"}
        </Button>
      </CardContent>
    </Card>
  );
};
