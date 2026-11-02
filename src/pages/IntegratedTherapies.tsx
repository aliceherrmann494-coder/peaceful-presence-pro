import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Heart, Sparkles, Layers, Leaf, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";
import heroBg from "@/assets/hero-bg.jpg";

const principles = [
  {
    icon: Leaf,
    title: "Integralidade",
    text: "Enxergar você como um todo — corpo, mente, emoções e espírito — e não como sintomas isolados.",
  },
  {
    icon: Layers,
    title: "Personalização",
    text: "Cada sessão é única, combinando as técnicas certas para o momento e a necessidade do seu corpo.",
  },
  {
    icon: Heart,
    title: "Acolhimento",
    text: "Um espaço seguro e humano, onde você é ouvido(a) e respeitado(a) na sua individualidade.",
  },
  {
    icon: Sparkles,
    title: "Autonomia",
    text: "Despertar os mecanismos naturais de autocura para que você se torne protagonista do próprio bem-estar.",
  },
];

const benefits = [
  "Cuidado direcionado à causa, não apenas ao sintoma",
  "Potencialização dos efeitos de cada técnica",
  "Acompanhamento contínuo e integrado da sua jornada",
  "Equilíbrio simultâneo do físico, do emocional e do energético",
  "Resultados mais profundos e duradouros",
  "Respeito ao tempo e à história de cada pessoa",
];

const IntegratedTherapies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useFadeIn();

  return (
    <main className="min-h-screen bg-background animate-fade-in">
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <img
          src={heroBg}
          alt="Espaço acolhedor do Espaço AlinhaMente"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <Link
            to="/#sobre"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft hover:bg-card transition-all mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Terapias Integradas
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
            Quando diferentes abordagens se encontram, o cuidado se torna completo.
          </p>
        </div>
      </section>

      <div ref={ref} className="fade-in-section max-w-5xl mx-auto px-6 md:px-16 py-16 space-y-20">
        {/* O que são */}
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
            O que são Terapias Integradas?
          </h2>
          <div className="space-y-4 text-muted-foreground font-sans leading-relaxed text-base md:text-lg">
            <p>
              Terapias Integradas são a arte de unir, em um mesmo cuidado, diferentes técnicas
              terapêuticas — energéticas, vibracionais, sistêmicas e corporais — para promover o
              bem-estar de forma ampla. Em vez de tratar um sintoma isolado, a abordagem integrada
              enxerga você como um todo: corpo, mente, emoções e energia que se influenciam
              mutuamente.
            </p>
            <p>
              Uma sessão pode, por exemplo, abrir o campo energético com o Reiki, liberar crenças
              limitantes pelas Barras de Access e reequilibrar o físico pela acupuntura auricular.
              Cada técnica potencializa a outra, e o conjunto oferece algo que nenhuma prática
              isolada alcançaria sozinha.
            </p>
            <p>
              Não se trata de acumular procedimentos, mas de escolher, com escuta sensível, as
              ferramentas certas para o seu momento — criando um caminho personalizado rumo ao
              equilíbrio.
            </p>
          </div>
        </section>

        {/* Filosofia */}
        <section className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              A filosofia da AlinhaMente
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
            <p>
              O nome <strong className="text-foreground">AlinhaMente</strong> já entrega o nosso
              propósito: ajudar você a colocar cada parte da sua vida em seu lugar. Acreditamos que o
              bem-estar verdadeiro não é obra do acaso — é o resultado do alinhamento entre o corpo, a
              mente e as emoções.
            </p>
            <p>
              Em um mundo que nos fragmenta, a AlinhaMente propõe o caminho inverso: a reintegração.
              Aqui, cada técnica é escolhida como uma peça de um quebra-cabeça maior, cuja imagem
              final é você inteiro(a), em harmonia consigo mesmo e com a própria história.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {principles.map((p) => (
              <div key={p.title} className="bg-card rounded-xl p-6 shadow-soft">
                <p.icon className="w-7 h-7 text-accent mb-3" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1.5">{p.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Como a integração acontece */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              Como a integração acontece
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
            <p>
              Tudo começa pela escuta. Antes de qualquer técnica, há uma conversa — um espaço para
              compreender o que você traz, o que o corpo revela e o que a alma pede. A partir dessa
              leitura, defino conjuntamente com você quais abordagens farão sentido para o momento.
            </p>
            <p>
              A integração é dinâmica: conforme você evolui, as técnicas podem se rearranjar. O que
              importa é manter o cuidado coerente com a sua jornada — sempre respeitando o seu tempo,
              a sua história e a sua individualidade.
            </p>
          </div>
        </section>

        {/* Benefícios */}
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Por que escolher a abordagem integrada?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-muted-foreground font-sans">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Vamos desenhar a sua jornada juntos?
          </h2>
          <p className="text-muted-foreground font-sans mb-8 max-w-xl mx-auto">
            Agende uma conversa e descubra como as Terapias Integradas podem apoiar o seu
            equilíbrio.
          </p>
          <a href="https://wa.me/554599891066" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans px-8 py-6 text-base rounded-full"
            >
              Agendar pelo WhatsApp
            </Button>
          </a>
        </section>
      </div>
    </main>
  );
};

export default IntegratedTherapies;
