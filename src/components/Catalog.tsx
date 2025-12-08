import { ProductCard } from "./ProductCard";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import baunilha from "@/assets/baunilha.jpg";
import capimlimao from "@/assets/capimlimao.jpg"
import pinklemonade from"@/assets/pinklemonade.jpg"
import lembrancinhas from "@/assets/lembrancinhas.jpeg"
import spraycapimlimao from "@/assets/spraycapimlimao.jpeg"
import cookie from "@/assets/natal1.jpeg"
import CipresteEuropeu from "@/assets/natal2.jpeg"
import CerejaeAvela from "@/assets/natal3.jpeg"
import NatalFeliz from "@/assets/natal4.jpeg"
import spraynatal1 from "@/assets/spraynatal1.jpeg"
import spraynatal2 from "@/assets/spraynatal2.jpeg"
import spraynatal3 from "@/assets/spraynatal3.jpeg"
import renas from "@/assets/renas.jpeg"
import renas2 from "@/assets/renas2.jpeg"
import lembrancinhas2 from "@/assets/lembrancinhas2.jpeg"
import latanoel1 from "@/assets/latanoel1.jpeg"
import latanoel2 from "@/assets/latanoel2.jpeg"
import latabiscoito1 from "@/assets/latabiscoito1.jpeg"
import latabiscoito2 from "@/assets/latabiscoito2.jpeg"
import latarena1 from "@/assets/latarena1.jpeg"
import latarena2 from "@/assets/latarena2.jpeg"
import latapreta1 from "@/assets/latapreta1.jpeg"
import latapreta2 from "@/assets/latapreta2.jpeg"

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
    image: [ lembrancinhas2, lembrancinhas ],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento!"
  },
  // {
  //   name: "Spray de Capim Limão",
  //   price: 34.90,
  //   description: "Nossas mini velas são feitas para eternizar momentos especiais. Personalizamos cada detalhe conforme o seu evento, seja casamento, chá ou formatura.",
  //   image: spraycapimlimao,
  //   whatsappMessage: "Olá! Gostaria de solicitar um orçamento!"
  // },
  {
    name: "Cookies de Natal",
    price: 50,
    description: "Cheiro de cookies quentinhos saindo do forno. Doce, confortável e cheio de clima natalino, perfeito para deixar a casa acolhedora.",
    image: cookie,
    whatsappMessage: "Olá! Tenho interesse nos Cookies de Natal!"
  },
  {
    name: "Cipreste Europeu",
    price: 50,
    description: "Aroma fresco e elegante de floresta. Une o verde do cipreste com o amadeirado do pinho e um fundo suave de baunilha, um clássico de Natal.",
    image: CipresteEuropeu,
    whatsappMessage: "Olá! Tenho interesse no Cipreste Europeu!"
  },
  {
    name: "Cereja e Avelã",
    price: 50,
    description: "Doce e sofisticada. Mistura cereja com notas cremosas e um fundo quentinho de avelã. Perfeita para quem ama aromas suaves e marcantes.",
    image: CerejaeAvela,
    whatsappMessage: "Olá! Tenho interesse na Cereja e Avelã!"
  },
  {
    name: "Kit Noite Feliz",
    price: 139.90,
    description: "O Kit Noite Feliz reúne os nossos quatro aromas especiais de Natal: Baunilha, Cipreste Europeu, Cookies de Natal e Cereja & Avelã. Um presente sofisticado para pessoas especiais, com fragrâncias que perfumam, acolhem e transformam o ambiente. Um kit completo para criar momentos inesquecíveis.",
    image: NatalFeliz,
    whatsappMessage: "Olá! Tenho interesse no Kit Noite Feliz!",
    buttonText: "Quero esse kit"
  },
  {
    name: "Home Spray de Baunilha",
    price: 34.90,
    description: "O conforto da baunilha em spray. Cheiro suave, cremoso e relaxante, que combina com qualquer ambiente.",
    image: spraynatal2,
    whatsappMessage: "Olá! Tenho interesse no Home Spray de Baunilha!",
    buttonText: "Quero esse spray"
  },
  {
    name: "Home Spray de Pink Lemonade",
    price: 34.90,
    description: "Refrescante, doce e divertida. Cheiro de limonada de frutas vermelhas com um toque floral suave. Perfeita para quem gosta de aromas alegres.",
    image: spraynatal3,
    whatsappMessage: "Olá! Tenho interesse no Home Spray de Pink Lemonade!",
    buttonText: "Quero esse spray"
  },
  {
    name: "Home Spray de Canela & Laranja",
    price: 34.90,
    description: "Um equilíbrio entre frescor e aconchego. Cítrico na abertura, quentinho no final. Perfeito para deixar a casa com cheirinho de Natal na hora.",
    image: spraynatal1,
    whatsappMessage: "Olá! Tenho interesse no Home Spray de Canela & Laranja!",
    buttonText: "Quero esse spray"
  },
  {
    name: "Rena de Natal",
    price: 19.90,
    description: "Com aroma de baunilha, as renas são a decoração perfeita para trazer aconchego e charme para a sua casa neste fim de ano!",
    image: [renas, renas2],
    whatsappMessage: "Olá! Tenho interesse na Rena",
    buttonText: "Quero essa rena!"
  },
  {
    name: "Vela Noite Feliz (80g)",
    price: 35,
    description: "O presente ideal para expressar gratidão, carinho ou para quem deseja levar a essência da Seraphim para todos os lugares. Aroma: Cereja & Avelã.",
    image: [latanoel1, latanoel2],
    whatsappMessage: "Olá! Tenho interesse na Rena",
    buttonText: "Quero essa vela!"
  },
  {
    name: "Vela Noite Feliz (80g)",
    price: 35,
    description: "O presente ideal para expressar gratidão, carinho ou para quem deseja levar a essência da Seraphim para todos os lugares. Aroma: Cookies de Natal.",
    image: [latabiscoito1, latabiscoito2],
    whatsappMessage: "Olá! Tenho interesse na Rena",
    buttonText: "Quero essa vela!"
  },
  {
    name: "Vela Noite Feliz (80g)",
    price: 35,
    description: "O presente ideal para expressar gratidão, carinho ou para quem deseja levar a essência da Seraphim para todos os lugares. Aroma: Baunilha.",
    image: [latarena1, latarena2],
    whatsappMessage: "Olá! Tenho interesse na Rena",
    buttonText: "Quero essa vela!"
  },
  {
    name: "Vela Noite Feliz (80g)",
    price: 35,
    description: "O presente ideal para expressar gratidão, carinho ou para quem deseja levar a essência da Seraphim para todos os lugares. Aroma: Cipreste Europeu.",
    image: [latapreta1, latapreta2],
    whatsappMessage: "Olá! Tenho interesse na Rena",
    buttonText: "Quero essa vela!"
  },
];

export const Catalog = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="catalogo" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scale-in animate-on-scroll ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso Catálogo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra aromas únicos que transformam ambientes e criam memórias especiais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
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
            return <ProductWrapper key={product.name} />;
          })}
        </div>
      </div>
    </section>
  );
};
