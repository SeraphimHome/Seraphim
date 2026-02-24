import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import baunilha from "@/assets/baunilha.jpeg";
import capimlimao from "@/assets/capimlimao.jpg"
import pinklemonade from"@/assets/pinklemonade.jpg"
import lembrancinhas from "@/assets/lembrancinhas.jpeg"
import lembrancinhas2 from "@/assets/lembrancinhas2.jpeg"
import sprayCapimLimao from "@/assets/spray_capim_limao.jpeg"
import sprayCerejaAvela from "@/assets/spray_cereja_avela.jpeg"

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
    name: "Home Spray de Capim Limão",
    price: 34.90,
    description: "Capim limão é um aroma que transmite frescor imediato e sensação de limpeza. Possui notas cítricas verdes, levemente herbais, com um toque suave e energizante.",
    image: sprayCapimLimao,
    whatsappMessage: "Olá! Tenho interesse no Home Spray de Capim Limão!",
    buttonText: "Quero esse spray",
    category: "sprays",
    specs: { size: "200ml", formula: "Base alcoólica de alta pureza" },
    badge: null
  },
  {
    name: "Home Spray de Cereja & Avelã",
    price: 34.90,
    description: "Frutado, adocicado e suavemente cremoso. Uma combinação elegante que une a doçura da cereja às notas quentes da avelã, trazendo conforto e personalidade ao ambiente.",
    image: sprayCerejaAvela,
    whatsappMessage: "Olá! Tenho interesse no Home Spray de Cereja & Avelã!",
    buttonText: "Quero esse spray",
    category: "sprays",
    specs: { size: "200ml", formula: "Base alcoólica de alta pureza" },
    badge: null
  }
];

export const Catalog = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string>("todas");

  const categories = [
    { id: "todas", label: "Todas", icon: "✨" },
    { id: "velas", label: "Velas Clássicas", icon: "🕯️" },
    { id: "sprays", label: "Home Sprays", icon: "💨" },
    { id: "presentes", label: "Kits & Presentes", icon: "🎁" },
  ];

  const filteredProducts = activeCategory === "todas" 
    ? products 
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
