import { useFadeIn } from "@/hooks/useFadeIn";
import { Flower2, Wind, Flame, Leaf, Heart, Sparkles } from "lucide-react";

const specialties = [
  {
    icon: Flower2,
    title: "Aromaterapia",
    description: "Uso terapêutico de óleos essenciais para equilibrar emoções, aliviar dores e promover bem-estar.",
  },
  {
    icon: Sparkles,
    title: "Reiki",
    description: "Canalização de energia vital para restaurar o equilíbrio energético e estimular a autocura.",
  },
  {
    icon: Leaf,
    title: "Fitoterapia",
    description: "Tratamento com plantas medicinais para fortalecer o organismo de forma natural e segura.",
  },
  {
    icon: Wind,
    title: "Terapia Respiratória",
    description: "Técnicas de respiração consciente para reduzir ansiedade e expandir a consciência corporal.",
  },
  {
    icon: Heart,
    title: "Terapia Floral",
    description: "Essências florais que auxiliam no equilíbrio emocional e no desenvolvimento pessoal.",
  },
  {
    icon: Flame,
    title: "Moxabustão",
    description: "Aplicação de calor em pontos energéticos para estimular a circulação e aliviar dores crônicas.",
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
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Cada técnica é aplicada com cuidado e respeito, buscando a harmonia do seu ser como um todo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <item.icon className="w-8 h-8 text-accent mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
