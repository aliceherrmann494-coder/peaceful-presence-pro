import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    text: "A Juliana me acolheu de uma forma que eu nunca tinha experimentado. Depois das sessões de Reiki, senti uma leveza que há muito tempo não sentia. Recomendo de olhos fechados!",
    therapy: "Reiki",
  },
  {
    name: "Carlos R.",
    text: "As Barras de Access mudaram minha perspectiva sobre muitas coisas. Saí da primeira sessão com a mente clara e uma sensação incrível de paz interior.",
    therapy: "Barras de Access",
  },
  {
    name: "Fernanda L.",
    text: "A acupuntura com a Juliana foi transformadora. Minhas dores crônicas diminuíram muito e meu sono melhorou significativamente. Profissional excepcional!",
    therapy: "Acupuntura",
  },
  {
    name: "Patrícia M.",
    text: "A autoconstelação sistêmica me ajudou a entender padrões que eu repetia há anos. Foi um divisor de águas na minha vida pessoal e familiar.",
    therapy: "Autoconstelação Sistêmica",
  },
  {
    name: "Roberto A.",
    text: "Cheguei ao consultório com muita ansiedade e ceticismo. A aromaterapia combinada com auriculoterapia me trouxe um equilíbrio que eu não achava possível.",
    therapy: "Aromaterapia e Auriculoterapia",
  },
  {
    name: "Luciana T.",
    text: "As terapias xamânicas personalizadas foram uma experiência profunda de reconexão comigo mesma. A Juliana conduz tudo com muito respeito e sensibilidade.",
    therapy: "Terapias Xamânicas",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-14 md:py-24 px-5 sm:px-6 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Depoimentos
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Histórias reais de transformação e cura compartilhadas por quem vivenciou o cuidado do Espaço AlinhaMente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-accent/40 mb-4" strokeWidth={1.5} />
              <p className="text-muted-foreground font-sans text-sm leading-relaxed flex-1 mb-6">
                "{item.text}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-serif font-semibold text-foreground">{item.name}</p>
                <p className="text-muted-foreground font-sans text-xs">{item.therapy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
