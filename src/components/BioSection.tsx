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
              Na AlinhaMente Terapias Integradas, o nome já entrega nosso propósito: ajudar você a colocar cada parte da sua vida no lugar.
            </p>
            <p>
              Acreditamos que o bem-estar verdadeiro não é sorte, é o resultado do alinhamento entre o seu corpo, sua mente e suas emoções. Com um olhar humano e integrativo, ofereço um espaço seguro para você:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Restabelecer seu equilíbrio interior;</li>
              <li>Superar bloqueios que te impedem de avançar;</li>
              <li>Viver com mais leveza, saúde e clareza mental.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
