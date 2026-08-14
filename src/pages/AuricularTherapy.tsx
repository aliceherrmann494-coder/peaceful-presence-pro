import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Leaf,
  Moon,
  Bone,
  Scale,
  Ear,
  Sparkles,
  Zap,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppScheduler } from "@/components/WhatsAppScheduler";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import auricularImg from "@/assets/therapy-auriculoterapia.jpg";
import auricularIcon from "@/assets/icone-auricular.png";

const WHATSAPP_URL =
  "https://wa.me/554599891066?text=Ol%C3%A1%2C%20Juliana!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Acupuntura%20Auricular.";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const howItWorks = [
  {
    icon: Ear,
    title: "O Microssistema Auricular",
    text: "A orelha funciona como um mapa completo do corpo humano, contendo mais de 200 pontos reflexos ligados aos nossos órgãos e ao sistema nervoso.",
  },
  {
    icon: Sparkles,
    title: "Estimulação Sem Dor",
    text: "O tratamento pode ser feito com sementes de mostarda, pequenos cristais ou microagulhas esferoterapêuticas totalmente indolores.",
  },
  {
    icon: Zap,
    title: "Resposta Rápida",
    text: "Ao estimular esses pontos, o cérebro libera endorfina e serotonina — os analgésicos e relaxantes naturais do próprio organismo.",
  },
];

const indications = [
  {
    icon: Brain,
    title: "Combate à Enxaqueca e Dores de Cabeça",
    text: "Alívio profundo de dores crônicas, enxaquecas tensionais e sinusite.",
  },
  {
    icon: Leaf,
    title: "Alívio da Ansiedade e Estresse",
    text: "Acalma o sistema nervoso, reduzindo a sensação de aperto no peito e a agitação.",
  },
  {
    icon: Moon,
    title: "Melhora da Qualidade do Sono",
    text: "Auxilia no combate à insônia, proporcionando noites de descanso reparador.",
  },
  {
    icon: Bone,
    title: "Redução de Dores Físicas",
    text: "Eficaz contra dores na coluna, bruxismo, tensões nos ombros e articulações.",
  },
  {
    icon: Scale,
    title: "Controle de Compulsões",
    text: "Auxilia no equilíbrio do apetite, compulsão por doces e ansiedade alimentar.",
  },
];

const steps = [
  {
    title: "Avaliando o Seu Corpo",
    text: "A terapeuta Juliana analisa seus sintomas, sua rotina e os pontos de dor atuais.",
  },
  {
    title: "Mapeamento Auricular",
    text: "Identificação dos pontos reflexos que precisam de estímulo e reequilíbrio.",
  },
  {
    title: "Aplicação Delicada e Acolhedora",
    text: "Colocação do material escolhido (sementes ou cristais) de forma confortável.",
  },
  {
    title: "Cuidado Contínuo",
    text: "Você leva os estímulos para casa! As sementes continuam agindo na sua orelha por dias após a sessão.",
  },
];

const faq = [
  {
    q: "Adoece ou dói para aplicar?",
    a: "Não! A aplicação com sementes ou cristais é super suave, confortável e não invasiva.",
  },
  {
    q: "Quanto tempo duram as sementes na orelha?",
    a: "Elas costumam ficar presas por 3 a 5 dias, continuando o tratamento de forma passiva.",
  },
  {
    q: "Em quanto tempo sinto o alívio da enxaqueca?",
    a: "Muitos pacientes relatam alívio e relaxamento imediato já na primeira sessão.",
  },
];

const AuricularTherapy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Acupuntura Auricular em Cascavel - PR | AlinhaMente";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Acupuntura Auricular em Cascavel - PR: alívio natural para enxaqueca, dores no corpo, ansiedade e insônia. Agende sua sessão com a terapeuta Juliana Moço Corrêa.",
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-cacao-cream animate-fade-in">
      {/* Seção 1 — Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={auricularImg}
            alt="Aplicação de acupuntura auricular no Espaço AlinhaMente"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-cacao-olive/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 md:px-12 pt-8 pb-14 md:pt-14 md:pb-24">
          <Link
            to="/#terapias"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-cacao-cream/90 border border-cacao-cream/30 rounded-full px-4 py-2 hover:bg-cacao-cream/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar às terapias
          </Link>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center mt-8 md:mt-10">
            <div>
              <span className="inline-block font-sans text-xs md:text-sm tracking-[0.22em] uppercase text-cacao-gold mb-4">
                Espaço AlinhaMente · Cascavel - PR
              </span>
              <h1 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.18] font-semibold text-cacao-cream">
                Acupuntura Auricular: O Alívio Natural Para Enxaqueca, Dores e Ansiedade
              </h1>
              <p className="font-sans text-base md:text-lg text-cacao-cream/85 leading-relaxed mt-5 max-w-2xl">
                Descubra como o estímulo de pontos estratégicos na orelha pode reequilibrar seu
                corpo, aliviar dores de cabeça e devolver sua paz mental em Cascavel - PR.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-cacao-gold hover:bg-cacao-gold/90 text-cacao font-sans font-medium px-8 py-6 text-base rounded-full shadow-cacao"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Agendar Sessão no WhatsApp
                  </Button>
                </a>
                <span className="font-sans text-sm text-cacao-cream/70 inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Sessões de 40 a 60 minutos
                </span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-cacao border border-cacao-cream/20">
              <div className="relative">
                <img
                  src={auricularImg}
                  alt="Detalhe da aplicação de sementes e cristais nos pontos reflexos da orelha"
                  className="w-full h-72 sm:h-96 lg:h-[30rem] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cacao/85 via-cacao/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                  <img
                    src={auricularIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-12 h-12 object-contain shrink-0"
                    loading="lazy"
                  />
                  <p className="font-serif text-base md:text-lg text-cacao-cream leading-snug">
                    Pontos precisos na orelha, alívio sentido em todo o corpo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 — Conexão emocional & a dor principal */}
      <section className="bg-cacao-cream py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <img
            src={auricularIcon}
            alt=""
            aria-hidden="true"
            className="w-14 h-14 mx-auto mb-6 object-contain"
            loading="lazy"
          />
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao leading-tight">
            Dores de cabeça constantes e estresse não precisam fazer parte da sua rotina
          </h2>
          <div className="space-y-5 mt-7 font-sans text-base md:text-lg text-cacao/75 leading-relaxed">
            <p>
              A enxaqueca e as dores no corpo não surgem por acaso — elas são o pedido de socorro do
              seu organismo sobrecarregado. Viver à base de analgésicos apenas “mascara” o sintoma
              temporariamente, sem resolver a causa raiz.
            </p>
            <p className="text-cacao font-medium">
              A Acupuntura Auricular atua diretamente na origem do desequilíbrio, enviando estímulos
              ao sistema nervoso para que seu próprio corpo produza o alívio e a regeneração que
              precisa.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3 — Como funciona */}
      <section className="bg-cacao-sand/60 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-cacao-olive">
              O mapa da sua orelha
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao mt-3">
              Por Que a Orelha Consegue Tratar o Corpo Todo?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {howItWorks.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="bg-cacao-cream rounded-2xl p-6 md:p-8 shadow-soft border border-cacao-sand hover:shadow-cacao transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-cacao-olive/12 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-cacao-olive" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cacao mb-3">{title}</h3>
                <p className="font-sans text-sm md:text-base text-cacao/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Indicações */}
      <section className="bg-cacao-cream py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-cacao-olive">
              Principais indicações
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao mt-3">
              O Que a Acupuntura Auricular Pode Tratar?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {indications.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="bg-cacao-sand/40 rounded-2xl p-6 border border-cacao-sand hover:bg-cacao-sand/70 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-cacao-cream flex items-center justify-center mb-4 shadow-soft">
                  <Icon className="w-5 h-5 text-cacao-gold" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-cacao mb-2">{title}</h3>
                <p className="font-sans text-sm text-cacao/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 — Passo a passo */}
      <section className="py-14 md:py-24" style={{ background: "var(--gradient-cacao)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-cacao-gold">
              Atendimento na AlinhaMente
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao-cream mt-3">
              O Passo a Passo da Sua Sessão
            </h2>
          </div>

          <ol className="relative border-l border-cacao-cream/25 ml-5 md:ml-6 space-y-9 md:space-y-10">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-8 md:pl-10">
                <span className="absolute -left-[1.375rem] top-0 w-11 h-11 rounded-full bg-cacao-cream text-cacao font-serif text-lg font-semibold flex items-center justify-center shadow-cacao">
                  {i + 1}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-cacao-cream">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-cacao-cream/80 leading-relaxed mt-2">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seção 6 — FAQ */}
      <section className="bg-cacao-cream py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-cacao-olive">
              Dúvidas frequentes
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao mt-3">
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faq.map(({ q, a }) => (
              <AccordionItem
                key={q}
                value={q}
                className="bg-cacao-sand/40 border border-cacao-sand rounded-2xl px-5 md:px-6"
              >
                <AccordionTrigger className="font-serif text-base md:text-lg font-semibold text-cacao text-left hover:no-underline py-5">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm md:text-base text-cacao/75 leading-relaxed pb-5">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Seção 7 — CTA final + localização */}
      <section className="bg-cacao-sand/60 py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao">
            Chega de Conviver Com a Dor. Dê o Primeiro Passo Para o Seu Alívio!
          </h2>
          <p className="font-sans text-base md:text-lg text-cacao/75 leading-relaxed mt-5 max-w-2xl mx-auto">
            Agende sua sessão de Acupuntura Auricular com a terapeuta Juliana Moço Corrêa e sinta a
            leveza de viver sem dores e sem sobrecarga.
          </p>


          <WhatsAppScheduler

            therapy="Acupuntura Auricular"

            topics={["Dores crônicas", "Ansiedade e estresse", "Insônia", "Enxaqueca", "Compulsão alimentar", "Sobrecarga mental"]}

            className="mt-9 max-w-2xl mx-auto"

          />

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-cacao-olive hover:bg-cacao-olive/90 text-cacao-cream font-sans font-medium px-8 py-6 text-base rounded-full shadow-cacao"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Agendar Minha Sessão no WhatsApp
              </Button>
            </a>
            <Link to="/#terapias">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-cacao/30 text-cacao hover:bg-cacao/5 font-sans font-medium px-8 py-6 text-base rounded-full"
              >
                Conhecer Outras Terapias
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 md:mt-12 bg-cacao-cream border border-cacao-sand rounded-2xl p-6 md:p-8 text-left shadow-soft">
            <h3 className="font-serif text-lg font-semibold text-cacao mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cacao-olive" strokeWidth={1.6} /> Onde acontece
            </h3>
            <ul className="font-sans text-sm md:text-base text-cacao/75 space-y-2">
              <li>
                📍 Atendimentos presenciais na AlinhaMente Terapias Integradas em Cascavel - PR.
              </li>
              <li>
                📞 WhatsApp:{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cacao font-medium underline decoration-cacao-gold/60 underline-offset-4"
                >
                  (45) 99989-1066
                </a>{" "}
                | jumcorrea.com.br
              </li>
              <li>R. Rodrigues Alves, 1450 - Maria Luíza, Cascavel - PR</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Botão flutuante do WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Agendar Acupuntura Auricular via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </main>
  );
};

export default AuricularTherapy;
