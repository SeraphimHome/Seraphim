import aboutImage from "@/assets/sobre-imagem2.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 fade-in">
            <img
              src={aboutImage}
              alt="Nossas fundadoras"
              className="rounded-2xl shadow-soft w-full h-auto object-cover aspect-square"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossa História
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                A Seraphim nasceu de um desejo nosso de criar velas que levassem aconchego, leveza e significado para o dia a dia.
              </p>
              <p>
                Cada detalhe é pensado com carinho, das fragrâncias à identidade delicada que reflete quem somos. 
                O nome Seraphim representa luz e transformação, e também faz um trocadilho com a palavra cera, unindo o nosso amor por velas a um toque especial.
              </p>
              <p>
                Acreditamos que uma vela vai além da luz ou do aroma. 
                Ela transforma momentos simples em memórias cheias de afeto.
              </p>
              <p>
                Feitas artesanalmente, com propósito e dedicação, nossas velas carregam um pedacinho da nossa essência em cada chama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
