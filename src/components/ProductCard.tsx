import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
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
  const handleWhatsAppClick = () => {
    const phone = "5551997418179";
    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <Card className="group overflow-hidden border-border/50 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 bg-card flex flex-col h-full">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
        />
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
