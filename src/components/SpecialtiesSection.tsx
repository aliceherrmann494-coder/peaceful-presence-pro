import { useFadeIn } from "@/hooks/useFadeIn";
import { BrainCircuit, HandHeart, Network } from "lucide-react";
import { Link } from "react-router-dom";
import cacauIcon from "@/assets/icone-cacau.png.asset.json";
import auricularIcon from "@/assets/icone-auricular.png.asset.json";

const specialties = [
  {
    image: auricularIcon.url,
    title: "Acupuntura Auricular",
    slug: "auriculoterapia",
    description: "Estímulo de pontos na orelha para tratar disfunções físicas e emocionais de forma natural.",
  },
  {
    icon: BrainCircuit,
    title: "Barras de Access",
    slug: "barras-de-access",
    description: "Técnica que libera crenças limitantes e padrões de pensamento, promovendo clareza mental e expansão da consciência.",
  },
  {
    icon: HandHeart,
    title: "Reiki",
    slug: "reiki",
    description: "Canalização de energia vital para restaurar o equilíbrio energético e estimular a autocura.",
  },
  {
    icon: Network,
    title: "Autoconstelação Sistêmica",
    slug: "autoconstelacao-sistemica",
    description: "Ferramenta terapêutica que revela dinâmicas familiares ocultas, promovendo reconciliação e fluxo de amor.",
  },
  {
    image: cacauIcon.url,
    title: "Terapia do Cacau",
    slug: "terapia-do-cacau",
    description: "Cacau medicinal em abordagem terapêutica e cerimonial para abertura do coração, alívio emocional e autocuidado.",
  },
];

const SpecialtiesSection = () => {
  const ref = useFadeIn();

  return (
    <section id="terapias" className="py-24 px-6 md:px-16 bg-secondary/50">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Medicinas & Especialidades
          </h2>
          <p className="text-muted-foreground font-sans max-w-3xl mx-auto">
            Com respeito à individualidade do corpo e da mente, compreendendo o universo particular de cada ser humano, desenvolvi um serviço personalizado e humano — e assim nasceu o Espaço AlinhaMente Terapias Integradas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item: any) => (
            <Link
              to={`/terapia/${item.slug}`}
              key={item.title}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
            >
              {item.image ? (
                <img src={item.image} alt={`Ícone de ${item.title}`} className="w-12 h-12 object-contain mb-4" loading="lazy" />
              ) : (
                <item.icon className="w-8 h-8 text-accent mb-5" strokeWidth={1.5} />
              )}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.description}</p>
              <span className="inline-block mt-4 text-accent font-sans text-sm font-medium">Saiba mais →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
