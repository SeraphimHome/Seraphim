import aboutImage from "@/assets/sobre-imagem2.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const About = () => {
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation();
  const { elementRef: p1Ref, isVisible: p1Visible } = useScrollAnimation();
  const { elementRef: p2Ref, isVisible: p2Visible } = useScrollAnimation();
  const { elementRef: p3Ref, isVisible: p3Visible } = useScrollAnimation();
  const { elementRef: p4Ref, isVisible: p4Visible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            ref={imageRef}
            className={`order-2 md:order-1 slide-in-left animate-on-scroll ${imageVisible ? 'visible' : ''}`}
          >
            <img
              src={aboutImage}
              alt="Nossas fundadoras"
              className="rounded-2xl shadow-soft w-full h-auto object-cover aspect-square hover:shadow-hover transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <div 
              ref={textRef}
              className={`slide-in-right animate-on-scroll ${textVisible ? 'visible' : ''}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-justify">
              <p 
                ref={p1Ref}
                className={`fade-in animate-on-scroll ${p1Visible ? 'visible' : ''}`}
                style={{ animationDelay: p1Visible ? '0.1s' : '0s' }}
              >
                A Seraphim nasceu de um desejo nosso de criar velas que levassem aconchego, leveza e significado para o dia a dia.
              </p>
              <p 
                ref={p2Ref}
                className={`fade-in animate-on-scroll ${p2Visible ? 'visible' : ''}`}
                style={{ animationDelay: p2Visible ? '0.2s' : '0s' }}
              >
                Cada detalhe é pensado com carinho, das fragrâncias à identidade delicada que reflete quem somos. 
                O nome Seraphim representa luz e transformação, e também faz um trocadilho com a palavra cera, unindo o nosso amor por velas a um toque especial.
              </p>
              <p 
                ref={p3Ref}
                className={`fade-in animate-on-scroll ${p3Visible ? 'visible' : ''}`}
                style={{ animationDelay: p3Visible ? '0.3s' : '0s' }}
              >
                Acreditamos que uma vela vai além da luz ou do aroma. 
                Ela transforma momentos simples em memórias cheias de afeto.
              </p>
              <p 
                ref={p4Ref}
                className={`fade-in animate-on-scroll ${p4Visible ? 'visible' : ''}`}
                style={{ animationDelay: p4Visible ? '0.4s' : '0s' }}
              >
                Feitas artesanalmente, com propósito e dedicação, nossas velas carregam um pedacinho da nossa essência em cada chama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
