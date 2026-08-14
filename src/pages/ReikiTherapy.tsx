import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  BatteryCharging,
  Moon,
  Sparkles,
  Shield,
  HandHeart,
  Network,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import reikiImg from "@/assets/therapy-reiki.jpg";

const WHATSAPP_URL =
  "https://wa.me/554599891066?text=Ol%C3%A1%2C%20Juliana!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Reiki.";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const howItWorks = [
  {
    icon: HandHeart,
    title: "Canalização Natural",
    text: "O Reiki não é uma religião nem dogmas; é a canalização da energia vital universal através das mãos da terapeuta para o cliente.",
  },
  {
    icon: Network,
    title: "Alinhamento dos Chakras",
    text: "A energia atua diretamente nos centros energéticos (chakras), harmonizando órgãos, emoções e estados mentais.",
  },
  {
    icon: Leaf,
    title: "Atuação Holística",
    text: "Trata o indivíduo de forma integral — corpo físico, mental, emocional e espiritual.",
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "Alívio do Estresse e Ansiedade",
    text: "Relaxamento muscular e desaceleração do ritmo cardíaco e mental.",
  },
  {
    icon: BatteryCharging,
    title: "Recuperação da Vitalidade",
    text: "Combate ao cansaço físico e mental, trazendo uma sensação de \"bateria recarregada\".",
  },
  {
    icon: Moon,
    title: "Sono Mais Tranquilo e Repousante",
    text: "Redução da insônia e melhoria significativa na qualidade do descanso diário.",
  },
  {
    icon: Sparkles,
    title: "Clareza Emocional e Paz",
    text: "Ajuda a processar lutos, mágoas e sobrecargas emocionais com mais leveza.",
  },
  {
    icon: Shield,
    title: "Fortalecimento do Sistema Imunológico",
    text: "Estimula a autocura do próprio organismo ao reduzir o cortisol (hormônio do estresse).",
  },
];

const steps = [
  {
    title: "Acolhimento Terapêutico",
    text: "Conversa inicial com a Terapeuta Juliana para entender como você está se sentindo física e emocionalmente.",
  },
  {
    title: "Ambiente Preparado",
    text: "Você se deita de forma confortável na maca, sob som relaxante, aromas terapêuticos e iluminação suave.",
  },
  {
    title: "Aplicação do Reiki",
    text: "A Juliana posiciona as mãos suavemente sobre (ou ligeiramente acima) dos pontos principais do seu corpo.",
  },
  {
    title: "Harmonização e Retorno",
    text: "Você acorda ou desperta do relaxamento sentindo-se leve, em paz e revitalizado.",
  },
];

const faq = [
  {
    q: "O Reiki está ligado a alguma religião?",
    a: "Não! O Reiki é uma prática terapêutica reconhecida pela Organização Mundial da Saúde (OMS) e integrativa, totalmente livre de vínculos religiosos.",
  },
  {
    q: "Eu preciso sentir algo durante a sessão?",
    a: "Cada pessoa sente de um jeito: alguns sentem um calor suave nas mãos da terapeuta, arrepios leves, um relaxamento tão profundo que dormem, ou simplesmente uma paz imediata.",
  },
  {
    q: "Pode ser feito junto com outros tratamentos de saúde?",
    a: "Com certeza! O Reiki é uma terapia complementar e potencializa o bem-estar em conjunto com tratamentos médicos ou psicológicos.",
  },
];

const ReikiTherapy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Reiki em Cascavel - PR | AlinhaMente Terapias Integradas";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Reiki em Cascavel - PR: terapia energética milenar para aliviar estresse, ansiedade e cansaço, harmonizando corpo e mente. Agende com a terapeuta Juliana Moço Corrêa.",
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-reiki-cream animate-fade-in">
      {/* Seção 1 — Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={reikiImg}
            alt="Sessão de Reiki com imposição de mãos no Espaço AlinhaMente em Cascavel - PR"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-reiki/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 md:px-12 pt-8 pb-14 md:pt-14 md:pb-24">
          <Link
            to="/#terapias"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-reiki-cream/90 border border-reiki-cream/30 rounded-full px-4 py-2 hover:bg-reiki-cream/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar às terapias
          </Link>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center mt-8 md:mt-10">
            <div>
              <span className="inline-block font-sans text-xs md:text-sm tracking-[0.22em] uppercase text-reiki-gold mb-4">
                Espaço AlinhaMente · Cascavel - PR
              </span>
              <h1 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.18] font-semibold text-reiki-cream">
                Reiki: Reequilibre Sua Energia, Alivie o Estresse e Resgate a Paz Interior
              </h1>
              <p className="font-sans text-base md:text-lg text-reiki-cream/85 leading-relaxed mt-5 max-w-2xl">
                Uma terapia milenar e suave para harmonizar corpo, mente e espírito, promovendo
                relaxamento profundo e bem-estar em Cascavel - PR.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-reiki-gold hover:bg-reiki-gold/90 text-reiki font-sans font-medium px-8 py-6 text-base rounded-full shadow-reiki"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Agendar Sessão no WhatsApp
                  </Button>
                </a>
                <span className="font-sans text-sm text-reiki-cream/75 inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Sessões de 50 a 60 minutos
                </span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-reiki border border-reiki-cream/20">
              <div className="relative">
                <img
                  src={reikiImg}
                  alt="Mãos sobrepostas suavemente aplicando a energia Reiki com luz e calor acolhedor"
                  className="w-full h-72 sm:h-96 lg:h-[30rem] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-reiki/85 via-reiki/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-reiki-cream/15 border border-reiki-cream/30 flex items-center justify-center shrink-0">
                    <HandHeart className="w-6 h-6 text-reiki-cream" strokeWidth={1.5} />
                  </div>
                  <p className="font-serif text-base md:text-lg text-reiki-cream leading-snug">
                    A energia vital que cura, acalma e revitaliza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 — Conexão emocional & a dor do cansaço energético */}
      <section className="bg-reiki-cream py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-reiki/10 flex items-center justify-center">
            <Leaf className="w-7 h-7 text-reiki" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-reiki leading-tight">
            Sente que suas energias estão completamente esgotadas?
          </h2>
          <div className="space-y-5 mt-7 font-sans text-base md:text-lg text-reiki/75 leading-relaxed">
            <p>
              A correria do dia a dia, as preocupações e a sobrecarga emocional vão acumulando
              tensões invisíveis que desgastam o nosso corpo e fecham a nossa mente. Com o tempo,
              surgem a ansiedade, a fadiga constante e a sensação de "estar fora do eixo".
            </p>
            <p className="text-reiki font-medium">
              O Reiki é um convite para você parar, respirar e receber. Através da imposição de mãos,
              essa técnica milenar canaliza a energia vital universal para dissolver bloqueios
              energéticos, acalmar o sistema nervoso e devolver a harmonia que o seu corpo precisa
              para se autorregular.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3 — Como funciona */}
      <section className="bg-reiki-sand/60 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-reiki-olive">
              O reequilíbrio vital
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-reiki mt-3">
              O Poder da Energia Vital Universal
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {howItWorks.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="bg-reiki-cream rounded-2xl p-6 md:p-8 shadow-soft border border-reiki-sand hover:shadow-reiki transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-reiki/12 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-reiki" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-reiki mb-3">{title}</h3>
                <p className="font-sans text-sm md:text-base text-reiki/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Benefícios */}
      <section className="bg-reiki-cream py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-reiki-olive">
              Benefícios transformadores
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-reiki mt-3">
              O Que Você Vai Sentir Após uma Sessão de Reiki?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="bg-reiki-sand/40 rounded-2xl p-6 border border-reiki-sand hover:bg-reiki-sand/70 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-reiki-cream flex items-center justify-center mb-4 shadow-soft">
                  <Icon className="w-5 h-5 text-reiki-gold" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-reiki mb-2">{title}</h3>
                <p className="font-sans text-sm text-reiki/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 — Passo a passo */}
      <section className="py-14 md:py-24" style={{ background: "var(--gradient-reiki)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-reiki-cream/80">
              Atendimento na AlinhaMente
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-reiki-cream mt-3">
              O Seu Momento de Paz na AlinhaMente
            </h2>
          </div>

          <ol className="relative border-l border-reiki-cream/25 ml-5 md:ml-6 space-y-9 md:space-y-10">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-8 md:pl-10">
                <span className="absolute -left-[1.375rem] top-0 w-11 h-11 rounded-full bg-reiki-cream text-reiki font-serif text-lg font-semibold flex items-center justify-center shadow-reiki">
                  {i + 1}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-reiki-cream">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-reiki-cream/80 leading-relaxed mt-2">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seção 6 — FAQ */}
      <section className="bg-reiki-cream py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-reiki-olive">
              Quebra de objeções
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-reiki mt-3">
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faq.map(({ q, a }) => (
              <AccordionItem
                key={q}
                value={q}
                className="bg-reiki-sand/40 border border-reiki-sand rounded-2xl px-5 md:px-6"
              >
                <AccordionTrigger className="font-serif text-base md:text-lg font-semibold text-reiki text-left hover:no-underline py-5">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm md:text-base text-reiki/75 leading-relaxed pb-5">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Seção 7 — CTA final + localização */}
      <section className="bg-reiki-sand/60 py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-reiki">
            Dê a Si Mesma o Presente da Paz e do Reequilíbrio Energético
          </h2>
          <p className="font-sans text-base md:text-lg text-reiki/75 leading-relaxed mt-5 max-w-2xl mx-auto">
            Agende sua sessão de Reiki com a Terapeuta Juliana Moço Corrêa e sinta a energia da cura
            e do acolhimento na AlinhaMente.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-reiki hover:bg-reiki/90 text-reiki-cream font-sans font-medium px-8 py-6 text-base rounded-full shadow-reiki"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Agendar Minha Sessão no WhatsApp
              </Button>
            </a>
            <Link to="/#terapias">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-reiki/30 text-reiki hover:bg-reiki/5 font-sans font-medium px-8 py-6 text-base rounded-full"
              >
                Conhecer Outras Terapias
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 md:mt-12 bg-reiki-cream border border-reiki-sand rounded-2xl p-6 md:p-8 text-left shadow-soft">
            <h3 className="font-serif text-lg font-semibold text-reiki mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-reiki-olive" strokeWidth={1.6} /> Onde acontece
            </h3>
            <ul className="font-sans text-sm md:text-base text-reiki/75 space-y-2">
              <li>
                📍 Atendimentos presenciais na AlinhaMente Terapias Integradas em Cascavel - PR.
              </li>
              <li>
                📞 WhatsApp:{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-reiki font-medium underline decoration-reiki-gold/60 underline-offset-4"
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
        aria-label="Agendar Reiki via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </main>
  );
};

export default ReikiTherapy;
