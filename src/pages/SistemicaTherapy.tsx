import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Network,
  Sparkles,
  HeartHandshake,
  Coins,
  Bird,
  Compass,
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
import sistemicaImg from "@/assets/therapy-sistemica.jpg";

const WHATSAPP_URL =
  "https://wa.me/554599891066?text=Ol%C3%A1%2C%20Juliana!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Autoconstela%C3%A7%C3%A3o%20Sist%C3%AAmica.";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const howItWorks = [
  {
    icon: Network,
    title: "As Leis Sistêmicas",
    text: "Baseada nos princípios do pertencimento, hierarquia e equilíbrio entre dar e tomar, que regem todo sistema familiar.",
  },
  {
    icon: Sparkles,
    title: "Tomada de Consciência",
    text: "Você aprende a mapear o seu próprio campo e perceber quais papéis ou dores familiares está assumindo sem perceber.",
  },
  {
    icon: HeartHandshake,
    title: "Movimento de Cura",
    text: "Ao dar um novo lugar aos fatos e às pessoas no seu coração, o bloqueio se desfaz e a vida volta a fluir para frente.",
  },
];

const benefits = [
  {
    icon: Network,
    title: "Cura de Padrões Familiares",
    text: "Liberação de lealdades invisíveis a dores, escassez ou fracassos dos seus antepassados.",
  },
  {
    icon: HeartHandshake,
    title: "Relacionamentos Mais Saudáveis",
    text: "Fim da repetição de dinâmicas tóxicas, dependência ou rejeição no amor.",
  },
  {
    icon: Coins,
    title: "Desbloqueio da Prosperidade",
    text: "Restabelecimento do fluxo financeiro e do sucesso profissional ao alinhar sua postura com a vida.",
  },
  {
    icon: Bird,
    title: "Alívio da Carga Emocional",
    text: "Resgate da sua autonomia, deixando ir o peso que pertence aos outros.",
  },
  {
    icon: Compass,
    title: "Clareza para Tomada de Decisão",
    text: "Compreensão profunda sobre qual caminho seguir com firmeza e paz interior.",
  },
];

const steps = [
  {
    title: "Acolhimento da Questão",
    text: "Identificação do tema ou bloqueio específico que você deseja olhar e harmonizar.",
  },
  {
    title: "Mapeamento do Campo",
    text: "Utilização de elementos e técnicas sistêmicas para visualizar as dinâmicas ocultas do seu sistema.",
  },
  {
    title: "Frases de Solução e Movimento",
    text: "Aplicação de frases reflexivas e posturas que reordenam o seu sistema interno.",
  },
  {
    title: "Integrando o Novo Ponto de Vista",
    text: "Você sai da sessão com clareza, alívio e uma nova postura diante da vida.",
  },
];

const faq = [
  {
    q: "Preciso trazer minha família para a sessão?",
    a: "Não! A sessão é individual e focada na sua percepção interna e no seu campo sistêmico.",
  },
  {
    q: "Qual a diferença entre a Constelação tradicional e a Autoconstelação?",
    a: "Na Autoconstelação você é guiado a desenvolver o seu próprio olhar sistêmico, tornando-se agente ativo da sua própria percepção e libertação, com a condução segura da terapeuta.",
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "A abordagem sistêmica é pontual e profunda. Frequentemente, uma única sessão focada em um tema específico já traz movimentos e clareza transformadores.",
  },
];

const SistemicaTherapy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Autoconstelação Sistêmica em Cascavel - PR | AlinhaMente Terapias Integradas";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Autoconstelação Sistêmica em Cascavel - PR: libere bloqueios invisíveis e padrões repetitivos, cure lealdades familiares e desbloqueie prosperidade. Agende com a terapeuta Juliana Moço Corrêa.",
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-sistemica-cream animate-fade-in">
      {/* Seção 1 — Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sistemicaImg}
            alt="Autoconstelação Sistêmica: árvore com raízes profundas simbolizando ancestralidade e pertencimento no Espaço AlinhaMente em Cascavel - PR"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sistemica/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 md:px-12 pt-8 pb-14 md:pt-14 md:pb-24">
          <Link
            to="/#terapias"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-sistemica-cream/90 border border-sistemica-cream/30 rounded-full px-4 py-2 hover:bg-sistemica-cream/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar às terapias
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center mt-8 md:mt-10">
            <div>
              <span className="inline-block font-sans text-xs md:text-sm tracking-[0.22em] uppercase text-sistemica-gold mb-4">
                Espaço AlinhaMente · Cascavel - PR
              </span>
              <h1 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.18] font-semibold text-sistemica-cream">
                Autoconstelação Sistêmica: Libere Bloqueios Invisíveis e Padrões Repetitivos
              </h1>
              <p className="font-sans text-base md:text-lg text-sistemica-cream/85 leading-relaxed mt-5 max-w-2xl">
                Compreenda as raízes profundas dos seus desafios emocionais, relacionamentos ou vida
                financeira e ocupe o seu verdadeiro lugar com leveza em Cascavel - PR.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-sistemica-gold hover:bg-sistemica-gold/90 text-sistemica font-sans font-medium px-8 py-6 text-base rounded-full shadow-sistemica"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Agendar Sessão no WhatsApp
                  </Button>
                </a>
                <span className="font-sans text-sm text-sistemica-cream/75 inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Sessões individuais e profundas
                </span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-sistemica border border-sistemica-cream/20">
              <div className="relative">
                <img
                  src={sistemicaImg}
                  alt="Ilustração de árvore com raízes representando o sistema familiar e a cura sistêmica"
                  className="w-full h-72 sm:h-96 lg:h-[30rem] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sistemica/85 via-sistemica/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-serif text-base md:text-lg text-sistemica-cream leading-snug">
                    As raízes que curam: olhe para a sua história com amor e ocupe o seu lugar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 — Conexão emocional & a dor dos padrões repetitivos */}
      <section className="bg-sistemica-cream py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-sistemica/10 flex items-center justify-center">
            <Network className="w-7 h-7 text-sistemica" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sistemica leading-tight">
            Você sente que, por mais que se esforce, certos problemas insistem em se repetir?
          </h2>
          <div className="space-y-5 mt-7 font-sans text-base md:text-lg text-sistemica/75 leading-relaxed">
            <p>
              Dificuldade em prosperar financeiramente, relacionamentos amorosos que seguem sempre o
              mesmo ciclo doloroso, ou aquela sensação constante de carregar um peso que parece não
              ser seu...
            </p>
            <p className="text-sistemica font-medium">
              Muitas vezes, os nós que travam a nossa vida não começaram em nós, mas em dinâmicas
              ocultas e lealdades invisíveis do nosso sistema familiar. A Autoconstelação Sistêmica é
              uma ferramenta profunda para olhar para a sua história com amor, identificar onde a
              energia estancou e devolver o fluxo da vida, do amor e da abundância.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3 — Como funciona */}
      <section className="bg-sistemica-sand/60 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sistemica-olive">
              O olhar sistêmico
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sistemica mt-3">
              O Poder de Enxergar Além do Óbvio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {howItWorks.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="bg-sistemica-cream rounded-2xl p-6 md:p-8 shadow-soft border border-sistemica-sand hover:shadow-sistemica transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-sistemica/12 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-sistemica" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-sistemica mb-3">{title}</h3>
                <p className="font-sans text-sm md:text-base text-sistemica/70 leading-relaxed">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Benefícios */}
      <section className="bg-sistemica-cream py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sistemica-olive">
              Benefícios transformadores
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sistemica mt-3">
              O Que a Autoconstelação Sistêmica Pode Destravar na Sua Vida?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="bg-sistemica-sand/40 rounded-2xl p-6 border border-sistemica-sand hover:bg-sistemica-sand/70 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-sistemica-cream flex items-center justify-center mb-4 shadow-soft">
                  <Icon className="w-5 h-5 text-sistemica-gold" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-sistemica mb-2">{title}</h3>
                <p className="font-sans text-sm text-sistemica/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 — Passo a passo */}
      <section className="py-14 md:py-24" style={{ background: "var(--gradient-sistemica)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sistemica-cream/80">
              Atendimento na AlinhaMente
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sistemica-cream mt-3">
              A Sua Jornada de Libertação com a Terapeuta Juliana
            </h2>
          </div>

          <ol className="relative border-l border-sistemica-cream/25 ml-5 md:ml-6 space-y-9 md:space-y-10">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-8 md:pl-10">
                <span className="absolute -left-[1.375rem] top-0 w-11 h-11 rounded-full bg-sistemica-cream text-sistemica font-serif text-lg font-semibold flex items-center justify-center shadow-sistemica">
                  {i + 1}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-sistemica-cream">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-sistemica-cream/80 leading-relaxed mt-2">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seção 6 — FAQ */}
      <section className="bg-sistemica-cream py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sistemica-olive">
              Quebra de objeções
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sistemica mt-3">
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faq.map(({ q, a }) => (
              <AccordionItem
                key={q}
                value={q}
                className="bg-sistemica-sand/40 border border-sistemica-sand rounded-2xl px-5 md:px-6"
              >
                <AccordionTrigger className="font-serif text-base md:text-lg font-semibold text-sistemica text-left hover:no-underline py-5">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm md:text-base text-sistemica/75 leading-relaxed pb-5">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Seção 7 — CTA final + localização */}
      <section className="bg-sistemica-sand/60 py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sistemica">
            Escolha Escrever uma Nova História. Deixe o Passado no Lugar Dele!
          </h2>
          <p className="font-sans text-base md:text-lg text-sistemica/75 leading-relaxed mt-5 max-w-2xl mx-auto">
            Agende sua sessão de Autoconstelação Sistêmica com a Terapeuta Juliana Moço Corrêa e
            ocupe o seu verdadeiro lugar de força.
          </p>


          <WhatsAppScheduler

            therapy="Autoconstelação Sistêmica"

            topics={["Relacionamentos e família", "Terapia de casal", "Bloqueios financeiros", "Ansiedade e medos", "Autoconhecimento", "Luto e perdas"]}

            className="mt-9 max-w-2xl mx-auto"

          />

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-sistemica hover:bg-sistemica/90 text-sistemica-cream font-sans font-medium px-8 py-6 text-base rounded-full shadow-sistemica"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Agendar Minha Sessão no WhatsApp
              </Button>
            </a>
            <Link to="/#terapias">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-sistemica/30 text-sistemica hover:bg-sistemica/5 font-sans font-medium px-8 py-6 text-base rounded-full"
              >
                Conhecer Outras Terapias
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 md:mt-12 bg-sistemica-cream border border-sistemica-sand rounded-2xl p-6 md:p-8 text-left shadow-soft">
            <h3 className="font-serif text-lg font-semibold text-sistemica mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sistemica-olive" strokeWidth={1.6} /> Onde acontece
            </h3>
            <ul className="font-sans text-sm md:text-base text-sistemica/75 space-y-2">
              <li>
                📍 Atendimentos presenciais na AlinhaMente Terapias Integradas em Cascavel - PR.
              </li>
              <li>
                📞 WhatsApp:{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sistemica font-medium underline decoration-sistemica-gold/60 underline-offset-4"
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
        aria-label="Agendar Autoconstelação Sistêmica via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </main>
  );
};

export default SistemicaTherapy;
