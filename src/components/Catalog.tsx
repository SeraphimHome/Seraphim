import { ProductCard } from "./ProductCard";
import baunilha from "@/assets/baunilha.jpg";
import capimlimao from "@/assets/capimlimao.jpg"
import pinklemonade from"@/assets/pinklemonade.jpg"
import lembranca from "@/assets/lembranca.jpg"
import capimlimaospray from "@/assets/capimlimaospray.jpg"

const products = [
  {
    name: "Baunilha",
    price: 40,
    description: "A base de baunilha e fava tonka oferece uma suavidade cremosa e envolvente, com um toque ambarado que confere profundidade e calor à composição.",
    image: baunilha,
    whatsappMessage: "Olá! Tenho interesse na vela de Baunilha!"
  },
  {
    name: "Capim Limão",
    price: 45,
    description: "Uma mistura cítrica e refrescante de capim-limão, cidreira e bergamota, com um toque suave de musk que cria uma sensação de tranquilidade e limpeza.",
    image: capimlimao,
    whatsappMessage: "Olá! Tenho interesse na vela de Capim Limão!"
  },
  {
    name: "Pink Lemonade",
    price: 50,
    description: "Uma fusão refrescante e doce de limão siciliano, morango e framboesa, equilibrada por notas de jasmim, musk e âmbar, que perfuma o ambiente com leveza.",
    image: pinklemonade,
    whatsappMessage: "Olá! Tenho interesse na vela de Pink Lemonade!"
  },
  {
    name: "Lembrancinhas",
    description: "Nossas mini velas são feitas para eternizar momentos especiais. Personalizamos cada detalhe conforme o seu evento, seja casamento, chá ou formatura.",
    image: lembranca,
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento!"
  },
  // {
  //   name: "Spray de Capim Limão",
  //   price: 34.90,
  //   description: "Nossas mini velas são feitas para eternizar momentos especiais. Personalizamos cada detalhe conforme o seu evento, seja casamento, chá ou formatura.",
  //   image: capimlimaospray,
  //   whatsappMessage: "Olá! Gostaria de solicitar um orçamento!"
  // },
];

export const Catalog = () => {
  return (
    <section id="catalogo" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso Catálogo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra aromas únicos que transformam ambientes e criam memórias especiais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.name} 
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
