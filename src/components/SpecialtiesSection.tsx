import { useFadeIn } from "@/hooks/useFadeIn";
import { Sparkles, Brain, Users, Target, Ear, Flower2, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const specialties = [
  {
    icon: Sparkles,
    title: "Reiki",
    slug: "reiki",
    description: "Canalização de energia vital para restaurar o equilíbrio energético e estimular a autocura.",
  },
  {
    icon: Brain,
    title: "Barras de Access Consciousness",
    slug: "barras-de-access",
    description: "Técnica que libera crenças limitantes e padrões de pensamento, promovendo clareza mental e expansão da consciência.",
  },
  {
    icon: Users,
    title: "Autoconstelação Sistêmica",
    slug: "autoconstelacao-sistemica",
    description: "Ferramenta terapêutica que revela dinâmicas familiares ocultas, promovendo reconciliação e fluxo de amor.",
  },
  {
    icon: Target,
    title: "Acupuntura",
    slug: "acupuntura",
    description: "Estimulação de pontos energéticos com agulhas finas para equilibrar o fluxo de energia e aliviar dores.",
  },
  {
    icon: Ear,
    title: "Auriculoterapia",
    slug: "auriculoterapia",
    description: "Estímulo de pontos na orelha para tratar disfunções físicas e emocionais de forma natural.",
  },
  {
    icon: Flower2,
    title: "Aromaterapia",
    slug: "aromaterapia",
    description: "Uso terapêutico de óleos essenciais para equilibrar emoções, aliviar dores e promover bem-estar.",
  },
  {
    icon: Flame,
    title: "Terapias Xamânicas Personalizadas",
    slug: "terapias-xamanicas",
    description: "Práticas ancestrais adaptadas à sua jornada pessoal, reconectando você à sabedoria da natureza e ao seu poder interior.",
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
          {specialties.map((item) => (
            <Link
              to={`/terapia/${item.slug}`}
              key={item.title}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
            >
              <item.icon className="w-8 h-8 text-accent mb-5" strokeWidth={1.5} />
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
