import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import space1 from "@/assets/space-1.jpg";
import space2 from "@/assets/space-2.jpg";
import space3 from "@/assets/space-3.jpg";

const images = [
  { src: space1, alt: "Sala de atendimento com luz natural" },
  { src: space2, alt: "Espaço de meditação acolhedor" },
  { src: space3, alt: "Recepção tranquila e convidativa" },
];

const SpaceSection = () => {
  const ref = useFadeIn();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section id="espaco" className="py-24 px-6 md:px-16">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            O Espaço
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Um ambiente pensado para acolher, acalmar e inspirar cada momento da sua jornada terapêutica.
          </p>
        </div>

        {/* Slider */}
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full aspect-[4/3] object-cover transition-opacity duration-500"
            loading="lazy"
            width={1024}
            height={768}
          />

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-foreground" : "bg-foreground/30"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
