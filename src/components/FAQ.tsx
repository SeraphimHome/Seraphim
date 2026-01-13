import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "Como faço para encomendar uma vela personalizada?",
    answer: "É super fácil! Basta entrar em contato conosco pelo WhatsApp e contar um pouco sobre o que você está imaginando. Podemos personalizar aromas, cores, rótulos e embalagens especiais para casamentos, aniversários, eventos corporativos e muito mais.",
  },
  {
    question: "As velas são feitas com que tipo de cera?",
    answer: "Utilizamos cera de coco 100% natural, que é sustentável e não tóxica. Ela queima mais limpa que a parafina tradicional, não libera fumaça preta e proporciona uma queima mais uniforme.",
  },
  {
    question: "Quanto tempo dura uma vela em média?",
    answer: "Nossas velas de 100g duram aproximadamente 12 horas de queima contínua. As velas em lata de 80g duram cerca de 8 horas. Para garantir a melhor performance, recomendamos queimar a vela até criar uma piscina e deixar acesa por no máximo 2 horas, para evitar o aquecimento excessivo do vidro.",
  },
  {
    question: "Como funciona a entrega?",
    answer: "As nossas entregas funcionam através do Uber. ",
  },
  {
    question: "Como cuidar da minha vela para ela durar mais?",
    answer: "(1) Deixe a cera derreter até as bordas para evitar túnel. (2) Apare o pavio antes de cada uso. (3) Nunca queime por mais de 2 horas seguidas. (4) Mantenha longe de correntes de ar. (5) Não deixe restos no pote, aproveite até o final! Com esses cuidados, sua vela terá o máximo aproveitamento.",
  },
  {
    question: "Posso usar os potes depois que a vela acabar?",
    answer: "Com certeza! Nossos potes de vidro são perfeitos para reuso. Após a vela acabar, coloque o pote em água quente para remover o resíduo de cera, lave bem e use como porta-trecos, vasinho para plantas, organizador de escritório ou até como copo. É sustentável e lindo na decoração!",
  },
  {
    question: "Como funciona o pagamento para velas personalizadas?",
    answer: "Para encomendas personalizadas, solicitamos um depósito de 50% do valor total no momento do pedido para iniciarmos a produção. O restante pode ser pago na entrega ou retirada do produto.",
  }
];

export const FAQ = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 scale-in animate-on-scroll ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossas velas e home sprays
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const FAQItem = () => {
              const { elementRef, isVisible } = useScrollAnimation();
              return (
                <div
                  ref={elementRef}
                  className={`fade-in animate-on-scroll ${isVisible ? 'visible' : ''}`}
                  style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card border border-border/50 rounded-xl px-6 shadow-soft hover:shadow-hover transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-semibold text-foreground pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              );
            };
            return <FAQItem key={index} />;
          })}
        </Accordion>

        {/* CTA after FAQ */}
        <div className="text-center mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
          <p className="text-lg text-foreground mb-4 font-medium">
            Ainda tem dúvidas? Estamos aqui para ajudar! 💬
          </p>
          <p className="text-muted-foreground mb-6">
            Entre em contato pelo WhatsApp e nossa equipe responderá rapidinho
          </p>
          <button
            onClick={() => window.open("https://wa.me/5551997418179?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20as%20velas%20Seraphim", "_blank")}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-soft hover:shadow-hover"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar com a equipe
          </button>
        </div>
      </div>
    </section>
  );
};
