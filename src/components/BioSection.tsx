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
              Muitas vezes, a rotina nos desconecta de quem realmente somos. Na AlinhaMente, acreditamos que o bem-estar não é apenas a ausência de sintomas, mas o alinhamento profundo entre o que você sente, pensa e faz.
            </p>
            <p>
              Minha missão é oferecer um espaço seguro de escuta e acolhimento. Com uma abordagem integrativa, não olhamos apenas para o problema, mas para o ser humano em sua totalidade. Juntos, vamos identificar bloqueios, ressignificar traumas e construir o caminho para uma mente resiliente e um coração em paz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
