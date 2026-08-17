import { useFadeIn } from "@/hooks/useFadeIn";
import space1 from "@/assets/space-1.jpg";

const SpaceSection = () => {
  const ref = useFadeIn();

  return (
    <section id="espaco" className="py-14 md:py-24 px-5 sm:px-6 lg:px-16">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            O Espaço
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Um ambiente pensado para acolher, acalmar e inspirar cada momento da sua jornada terapêutica.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-card">
          <img
            src={space1}
            alt="Sala de atendimento com luz natural"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
            width={1024}
            height={768}
          />
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
