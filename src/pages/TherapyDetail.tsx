import { useParams, Link } from "react-router-dom";
import { therapies } from "@/data/therapies";
import { ArrowLeft, Clock, CheckCircle2, Heart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import reikiImg from "@/assets/therapy-reiki.jpg";
import barrasImg from "@/assets/therapy-barras.jpg";
import constelacaoImg from "@/assets/therapy-constelacao.jpg";
import acupunturaImg from "@/assets/therapy-acupuntura.jpg";
import auriculoterapiaImg from "@/assets/therapy-auriculoterapia.jpg";
import aromaterapiaImg from "@/assets/therapy-aromaterapia.jpg";
import xamanicaImg from "@/assets/therapy-xamanica.jpg";

const imageMap: Record<string, string> = {
  reiki: reikiImg,
  "barras-de-access": barrasImg,
  "autoconstelacao-sistemica": constelacaoImg,
  acupuntura: acupunturaImg,
  auriculoterapia: auriculoterapiaImg,
  aromaterapia: aromaterapiaImg,
  "terapias-xamanicas": xamanicaImg,
};

const TherapyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const therapy = therapies.find((t) => t.slug === slug);

  if (!therapy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="font-serif text-3xl mb-4 text-foreground">Terapia não encontrada</h1>
        <Link to="/#terapias">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar às terapias
          </Button>
        </Link>
      </div>
    );
  }

  const heroImage = imageMap[therapy.slug];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={heroImage}
          alt={therapy.title}
          className="w-full h-full object-cover"
          width={1024}
          height={640}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <Link
            to="/#terapias"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            {therapy.title}
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl">
            {therapy.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-16 space-y-16">
        {/* Description */}
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
            O que é {therapy.title}?
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed text-base md:text-lg">
            {therapy.description}
          </p>
        </section>

        {/* Benefits */}
        <section className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              Benefícios
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {therapy.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-muted-foreground font-sans">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                Como funciona?
              </h2>
            </div>
            <p className="text-muted-foreground font-sans leading-relaxed">
              {therapy.howItWorks}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={heroImage}
              alt={`Sessão de ${therapy.title}`}
              className="w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
              width={1024}
              height={640}
            />
          </div>
        </section>

        {/* Who is it for + Duration */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Para quem é indicado?
              </h3>
            </div>
            <p className="text-muted-foreground font-sans leading-relaxed text-sm">
              {therapy.whoIsItFor}
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Duração da sessão
              </h3>
            </div>
            <p className="text-muted-foreground font-sans leading-relaxed text-sm">
              {therapy.duration}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Pronto(a) para iniciar sua jornada de cura?
          </h2>
          <p className="text-muted-foreground font-sans mb-8 max-w-xl mx-auto">
            Agende sua sessão de {therapy.title} e dê o primeiro passo rumo ao seu equilíbrio.
          </p>
          <a
            href="https://wa.me/554599891066"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans px-8 py-6 text-base rounded-full">
              Agendar pelo WhatsApp
            </Button>
          </a>
        </section>
      </div>
    </main>
  );
};

export default TherapyDetail;
