import { useFadeIn } from "@/hooks/useFadeIn";
import portraitImg from "@/assets/therapist-portrait.jpg";

const BioSection = () => {
  const ref = useFadeIn();

  return (
    <section id="sobre" className="py-24 px-6 md:px-16">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={portraitImg}
              alt="Foto da terapeuta"
              className="w-full h-auto object-cover aspect-[3/4]"
              loading="lazy"
              width={640}
              height={896}
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Minha Jornada
          </h2>
          <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
            <p>
              Desde muito cedo, senti o chamado para cuidar das pessoas ao meu redor. Essa paixão me levou a explorar
              diversas tradições de cura, combinando sabedoria ancestral com abordagens contemporâneas.
            </p>
            <p>
              Com mais de 10 anos de experiência, minha prática é guiada pela escuta atenta e pelo respeito à
              individualidade de cada pessoa. Acredito que a verdadeira cura acontece quando nos reconectamos
              com nossa essência mais profunda.
            </p>
            <p>
              Formada em Naturopatia, com especializações em Aromaterapia, Reiki e Fitoterapia, busco oferecer
              um cuidado holístico e personalizado para cada jornada de transformação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
