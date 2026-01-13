import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import baunilha from "@/assets/baunilha.jpeg";
import capimlimao from "@/assets/capimlimao.jpg"
import pinklemonade from"@/assets/pinklemonade.jpg"
import lembrancinhas from "@/assets/lembrancinhas.jpeg"
import cookie from "@/assets/natal1.jpeg"
import CipresteEuropeu from "@/assets/natal2.jpeg"
import CerejaeAvela from "@/assets/natal3.jpeg"
import spraynatal1 from "@/assets/spraynatal1.jpeg"
import spraynatal2 from "@/assets/spraynatal2.jpeg"
import spraynatal3 from "@/assets/spraynatal3.jpeg"
import lembrancinhas2 from "@/assets/lembrancinhas2.jpeg"
import latanoel1 from "@/assets/latanoel1.jpeg"
import latanoel2 from "@/assets/latanoel2.jpeg"
import latabiscoito1 from "@/assets/latabiscoito1.jpeg"
import latabiscoito2 from "@/assets/latabiscoito2.jpeg"
import latarena1 from "@/assets/latarena1.jpeg"
import latarena2 from "@/assets/latarena2.jpeg"
import latapreta1 from "@/assets/latapreta1.jpeg"
import latapreta2 from "@/assets/latapreta2.jpeg"
import kit1 from "@/assets/kit1.jpeg"

const products = [
  {
    name: "Baunilha",
    price: 40,
    description: "A base de baunilha e fava tonka oferece uma suavidade cremosa e envolvente, com um toque ambarado que confere profundidade e calor à composição.",
    image: baunilha,
    whatsappMessage: "Olá! Tenho interesse na vela de Baunilha!",
    category: "velas",
    specs: { size: "100g", burnTime: "~12h", wax: "Cera de coco" },
    badge: null
  },
  {
    name: "Capim Limão",
    price: 45,
    description: "Uma mistura cítrica e refrescante de capim-limão, cidreira e bergamota, com um toque suave de musk que cria uma sensação de tranquilidade e limpeza.",
    image: capimlimao,
    whatsappMessage: "Olá! Tenho interesse na vela de Capim Limão!",
    category: "velas",
    specs: { size: "100g", burnTime: "~12h", wax: "Cera de coco" },
    badge: null
  },
  {
    name: "Pink Lemonade",
    price: 50,
    description: "Uma fusão refrescante e doce de limão siciliano, morango e framboesa, equilibrada por notas de jasmim, musk e âmbar, que perfuma o ambiente com leveza.",
    image: pinklemonade,
    whatsappMessage: "Olá! Tenho interesse na vela de Pink Lemonade!",
    category: "velas",
    specs: { size: "100g", burnTime: "~12h", wax: "Cera de coco" },
    badge: null
  },
  {
    name: "Lembrancinhas Personalizadas",
    description: "Nossas mini velas são feitas para eternizar momentos especiais. Personalizamos cada detalhe conforme o seu evento, seja casamento, chá ou formatura.",
    image: [ lembrancinhas2, lembrancinhas ],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para lembrancinhas!",
    category: "presentes",
    specs: { size: "Sob encomenda", burnTime: "Variável", wax: "Cera de coco" },
    badge: { text: "Sob Encomenda", color: "purple" }
  },
  {
    name: "Cookies de Natal",
    price: 34.90,
    description: "Cheiro de cookies quentinhos saindo do forno. Doce, confortável e cheio de clima natalino, perfeito para deixar a casa acolhedora.",
    image: cookie,
    whatsappMessage: "Olá! Tenho interesse nos Cookies de Natal!",
    category: "natal",
    specs: { size: "100g", burnTime: "~12h", wax: "Cera de coco" },
    badge: { text: "Blind Date", color: "red" }
  },
  {
    name: "Cipreste Europeu",
    price: 34.90,
    description: "Aroma fresco e elegante de floresta. Une o verde do cipreste com o amadeirado do pinho e um fundo suave de baunilha, um clássico de Natal.",
    image: CipresteEuropeu,
    whatsappMessage: "Olá! Tenho interesse no Cipreste Europeu!",
    category: "natal",
    specs: { size: "100g", burnTime: "~12h", wax: "Cera de coco" },
    badge: { text: "Blind Date", color: "red" }
  },
  {
    name: "Cereja e Avelã",
    price: 34.90,
    description: "Doce e sofisticada. Mistura cereja com notas cremosas e um fundo quentinho de avelã. Perfeita para quem ama aromas suaves e marcantes.",
    image: CerejaeAvela,
    whatsappMessage: "Olá! Tenho interesse na Cereja e Avelã!",
    category: "natal",
    specs: { size: "100g", burnTime: "~12h", wax: "Cera de coco" },
    badge: { text: "Blind Date", color: "red" }
  },
  {
    name: "Home Spray de Baunilha",
    price: 24.90,
    description: "O conforto da baunilha em spray. Cheiro suave, cremoso e relaxante, que combina com qualquer ambiente.",
    image: spraynatal2,
    whatsappMessage: "Olá! Tenho interesse no Home Spray de Baunilha!",
    buttonText: "Quero esse spray",
    category: "sprays",
    specs: { size: "200ml", formula: "Base alcoólica de alta pureza" },
    badge: { text: "Blind Date", color: "red" }
  },
  {
    name: "Home Spray de Pink Lemonade",
    price: 24.90,
    description: "Refrescante, doce e divertida. Cheiro de limonada de frutas vermelhas com um toque floral suave. Perfeita para quem gosta de aromas alegres.",
    image: spraynatal3,
    whatsappMessage: "Olá! Tenho interesse no Home Spray de Pink Lemonade!",
    buttonText: "Quero esse spray",
    category: "sprays",
    specs: { size: "200ml", formula: "Base alcoólica de alta pureza" },
    badge: { text: "Blind Date", color: "red" }
  },
  {
    name: "Home Spray de Canela & Laranja",
    price: 24.90,
    description: "Um equilíbrio entre frescor e aconchego. Cítrico na abertura, quentinho no final. Perfeito para deixar a casa com cheirinho de Natal na hora.",
    image: spraynatal1,
    whatsappMessage: "Olá! Tenho interesse no Home Spray de Canela & Laranja!",
    buttonText: "Quero esse spray",
    category: "sprays",
    specs: { size: "200ml", formula: "Base alcoólica de alta pureza" },
    badge: { text: "Blind Date", color: "red" }
  },
  {
    name: "Vela em Lata - Cereja & Avelã",
    price: 24.90,
    description: "O presente ideal para expressar gratidão, carinho ou para quem deseja levar a essência da Seraphim para todos os lugares. Aroma: Cereja & Avelã.",
    image: [latanoel1, latanoel2],
    whatsappMessage: "Olá! Tenho interesse na Vela Noite Feliz - Cereja & Avelã!",
    buttonText: "Quero essa vela!",
    category: "natal",
    specs: { size: "80g", burnTime: "~8h", wax: "Cera de coco" },
    badge: { text: "Blind Date", color: "red" }
  },
  {
    name: "Vela em Lata - Cookies de Natal",
    price: 24.90,
    description: "O presente ideal para expressar gratidão, carinho ou para quem deseja levar a essência da Seraphim para todos os lugares. Aroma: Cookies de Natal.",
    image: [latabiscoito1, latabiscoito2],
    whatsappMessage: "Olá! Tenho interesse na Vela Noite Feliz - Cookies!",
    buttonText: "Quero essa vela!",
    category: "natal",
    specs: { size: "80g", burnTime: "~8h", wax: "Cera de coco" },
    badge: { text: "Blind Date", color: "red" }
  },
  {
    name: "Vela em Lata - Baunilha",
    price: 24.90,
    description: "O presente ideal para expressar gratidão, carinho ou para quem deseja levar a essência da Seraphim para todos os lugares. Aroma: Baunilha.",
    image: [latarena1, latarena2],
    whatsappMessage: "Olá! Tenho interesse na Vela Noite Feliz - Baunilha!",
    buttonText: "Quero essa vela!",
    category: "natal",
    specs: { size: "80g", burnTime: "~8h", wax: "Cera de coco" },
    badge: { text: "Blind Date", color: "red" }
  },
  {
    name: "Vela em Lata - Cipreste Europeu",
    price: 24.90,
    description: "O presente ideal para expressar gratidão, carinho ou para quem deseja levar a essência da Seraphim para todos os lugares. Aroma: Cipreste Europeu.",
    image: [latapreta1, latapreta2],
    whatsappMessage: "Olá! Tenho interesse na Vela Noite Feliz - Cipreste Europeu!",
    buttonText: "Quero essa vela!",
    category: "natal",
    specs: { size: "80g", burnTime: "~8h", wax: "Cera de coco" },
    badge: { text: "Blind Date", color: "red" }
  },
  {
    name: "Combo Blind Date",
    price: 54.90,
    description: "Home Spray e Vela de sua preferência",
    image: kit1,
    whatsappMessage: "Olá! Tenho interesse no Combo Blind Date!",
    buttonText: "Quero esse kit",
    category: "presentes",
    badge: { text: "Blind Date", color: "red" }
  }
];

export const Catalog = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string>("todas");

  const categories = [
    { id: "todas", label: "Todas", icon: "✨" },
    { id: "velas", label: "Velas Clássicas", icon: "🕯️" },
    { id: "blinddate", label: "Blind Date", icon: "🥳" },
    { id: "sprays", label: "Home Sprays", icon: "💨" },
    { id: "presentes", label: "Kits & Presentes", icon: "🎁" },
  ];

  const filteredProducts = activeCategory === "todas" 
    ? products 
    : activeCategory === "blinddate"
      ? products.filter(p => p.badge?.text === "Blind Date")
      : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scale-in animate-on-scroll ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso Catálogo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Descubra aromas únicos que transformam ambientes e criam memórias especiais
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground mt-6">
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Artesanal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Cera de Coco</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-hover scale-105"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:scale-105"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => {
            const ProductWrapper = () => {
              const { elementRef, isVisible } = useScrollAnimation();
              return (
                <div 
                  ref={elementRef}
                  className={`fade-in animate-on-scroll hover:z-10 relative ${isVisible ? 'visible' : ''}`}
                  style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
                >
                  <ProductCard {...product} />
                </div>
              );
            };
            return <ProductWrapper key={`${product.name}-${index}`} />;
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-muted-foreground mb-4">
              😢 Nenhum produto encontrado nesta categoria
            </p>
            <button
              onClick={() => setActiveCategory("todas")}
              className="text-primary hover:underline"
            >
              Ver todos os produtos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
