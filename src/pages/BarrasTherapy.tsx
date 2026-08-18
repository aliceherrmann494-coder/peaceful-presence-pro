import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
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
import barrasImg from "@/assets/therapy-barras.jpg";

const WHATSAPP_URL =
  "https://wa.me/554599891066?text=Ol%C3%A1%2C%20Juliana!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Barras%20de%20Access%20Consciousness.";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const howItWorks = [
  {
    title: "Limpeza de Arquivos",
    text: "Existem 32 pontos na cabeça que armazenam todas as ideias, pensamentos, crenças, emoções e atitudes que você acumulou ao longo da vida.",
  },
  {
    title: "Toque Suave",
    text: "Ao tocar suavemente esses pontos, as ondas cerebrais desaceleram (saindo do estado Beta para Alfa e Theta), permitindo a liberação do estresse retido.",
  },
  {
    title: "Mais Espaço e Leveza",
    text: "É o equivalente a deletar os \"arquivos pesados e ultrapassados\" do computador do seu cérebro, abrindo espaço para novas possibilidades e paz interior.",
  },
];

const benefits = [
  {
    title: "Alívio da Mente Acelerada",
    text: "Redução drástica da ansiedade, do excesso de pensamentos e do esgotamento emocional.",
  },
  {
    title: "Melhora Profunda do Sono",
    text: "Resgate de noites de sono reparadoras e tranquilas, sem a mente a mil por hora.",
  },
  {
    title: "Liberação de Crenças Limitantes",
    text: "Facilidade para superar medos, bloqueios com dinheiro, relacionamentos e autoaceitação.",
  },
  {
    title: "Renovação de Energia",
    text: "Sensação imediata de paz, clareza para tomada de decisões e leveza no corpo.",
  },
  {
    title: "Presença e Calma",
    text: "Diminuição da reatividade e da irritabilidade no dia a dia, presença real no agora.",
  },
];

const steps = [
  {
    title: "Acolhimento Inicial",
    text: "Um momento de conversa com a Terapeuta Juliana para você expressar como se sente.",
  },
  {
    title: "Conforto Absoluto",
    text: "Você se deita confortavelmente na maca, mantendo suas roupas e apenas relaxando.",
  },
  {
    title: "Aplicação do Toque Suave",
    text: "A Juliana toca suavemente os pontos na sua cabeça. Muitas pessoas entram em um relaxamento tão profundo que adormecem.",
  },
  {
    title: "Retorno Suave",
    text: "Você desperta com uma sensação incomparável de descanso, mente limpa e leveza.",
  },
];

const faq = [
  {
    q: "É uma massagem ou hipnose?",
    a: "Não. É uma técnica suave de toque em pontos energéticos específicos da cabeça. Não há manipulação muscular nem hipnose.",
  },
  {
    q: "Quantas sessões eu preciso fazer?",
    a: "Já na primeira sessão você sente um alívio e relaxamento profundos. A frequência depende de como você deseja manter o seu bem-estar e equilíbrio diário.",
  },
  {
    q: "Existe alguma contraindicação?",
    a: "Nenhuma! É 100% segura para pessoas de todas as idades, incluindo gestantes, idosos e crianças com hiperatividade ou ansiedade.",
  },
];

const BarrasTherapy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Barras de Access Consciousness em Cascavel - PR | AlinhaMente";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Barras de Access Consciousness em Cascavel - PR: libere a sobrecarga mental, a ansiedade e o estresse com o toque suave nos 32 pontos da cabeça. Agende com a terapeuta Juliana Moço Corrêa.",
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-access-cream animate-fade-in">
      {/* Seção 1 — Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={barrasImg}
            alt="Sessão de Barras de Access Consciousness com toque suave na cabeça no Espaço AlinhaMente"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-access/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 md:px-12 pt-8 pb-14 md:pt-14 md:pb-24">
          <Link
            to="/#terapias"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-access-cream/90 border border-access-cream/30 rounded-full px-4 py-2 hover:bg-access-cream/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar às terapias
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center mt-8 md:mt-10">
            <div>
              <span className="inline-block font-sans text-xs md:text-sm tracking-[0.22em] uppercase text-access-cream/80 mb-4">
                Espaço AlinhaMente · Cascavel - PR
              </span>
              <h1 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.18] font-semibold text-access-cream">
                Barras de Access Consciousness: "Desligue" a Sobrecarga e a Ansiedade Mental
              </h1>
              <p className="font-sans text-base md:text-lg text-access-cream/85 leading-relaxed mt-5 max-w-2xl">
                Libere pensamentos acelerados, estresse e crenças limitantes através do toque suave em
                pontos estratégicos na cabeça. Sinta a leveza em Cascavel - PR.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-access-cream hover:bg-access-cream/90 text-access font-sans font-medium px-8 py-6 text-base rounded-full shadow-access"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Agendar Sessão no WhatsApp
                  </Button>
                </a>
                <span className="font-sans text-sm text-access-cream/75 inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Sessões de 60 a 90 minutos
                </span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-access border border-access-cream/20">
              <div className="relative">
                <img
                  src={barrasImg}
                  alt="Toque suave nos 32 pontos da cabeça durante uma sessão de Barras de Access"
                  className="w-full h-72 sm:h-96 lg:h-[30rem] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-access/85 via-access/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-access-cream/15 border border-access-cream/30 flex items-center justify-center shrink-0">
                    <Brain className="w-6 h-6 text-access-cream" strokeWidth={1.5} />
                  </div>
                  <p className="font-serif text-base md:text-lg text-access-cream leading-snug">
                    Toque suave na cabeça, silêncio profundo na mente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 — Conexão emocional & a dor da mente acelerada */}
      <section className="bg-access-cream py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-access leading-tight">
            Você sente que a sua mente não para um segundo sequer?
          </h2>
          <div className="space-y-5 mt-7 font-sans text-base md:text-lg text-access/75 leading-relaxed">
            <p>
              Ir para a cama cansado, mas não conseguir dormir porque os pensamentos não calam...
              Sentir um peso constante nos ombros, cobranças internas e a sensação de que você está
              sempre no limite do esgotamento.
            </p>
            <p className="text-access font-medium">
              A sessão de Barras de Access é como um botão de "reset" para o seu cérebro. Um momento
              onde você finalmente não precisa controlar nada — apenas deitar, relaxar e permitir
              que o seu corpo libere tudo o que está acumulado.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3 — Como funciona */}
      <section className="bg-access-sand/60 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-access-olive">
              O "reset" da sua mente
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-access mt-3">
              O Que São os 32 Pontos das Barras de Access?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {howItWorks.map(({ title, text }) => (
              <article
                key={title}
                className="bg-access-cream rounded-2xl p-6 md:p-8 shadow-soft border border-access-sand hover:shadow-access transition-shadow duration-300"
              >
                <h3 className="font-serif text-xl font-semibold text-access mb-3">{title}</h3>
                <p className="font-sans text-sm md:text-base text-access/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Benefícios */}
      <section className="bg-access-cream py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-access-olive">
              Benefícios transformadores
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-access mt-3">
              O Que Você Vai Sentir Após uma Sessão?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {benefits.map(({ title, text }) => (
              <article
                key={title}
                className="bg-access-sand/40 rounded-2xl p-6 border border-access-sand hover:bg-access-sand/70 transition-colors duration-300"
              >
                <h3 className="font-serif text-lg font-semibold text-access mb-2">{title}</h3>
                <p className="font-sans text-sm text-access/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 — Passo a passo */}
      <section className="py-14 md:py-24" style={{ background: "var(--gradient-access)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-access-cream/80">
              Atendimento na AlinhaMente
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-access-cream mt-3">
              A Sua Experiência de Cuidado
            </h2>
          </div>

          <ol className="relative border-l border-access-cream/25 ml-5 md:ml-6 space-y-9 md:space-y-10">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-8 md:pl-10">
                <span className="absolute -left-[1.375rem] top-0 w-11 h-11 rounded-full bg-access-cream text-access font-serif text-lg font-semibold flex items-center justify-center shadow-access">
                  {i + 1}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-access-cream">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-access-cream/80 leading-relaxed mt-2">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seção 6 — FAQ */}
      <section className="bg-access-cream py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-access-olive">
              Quebra de objeções
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-access mt-3">
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faq.map(({ q, a }) => (
              <AccordionItem
                key={q}
                value={q}
                className="bg-access-sand/40 border border-access-sand rounded-2xl px-5 md:px-6"
              >
                <AccordionTrigger className="font-serif text-base md:text-lg font-semibold text-access text-left hover:no-underline py-5">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm md:text-base text-access/75 leading-relaxed pb-5">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Seção 7 — CTA final + localização */}
      <section className="bg-access-sand/60 py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-access">
            Dê uma Pausa no Barulho Mental. Permita-se Descansar!
          </h2>
          <p className="font-sans text-base md:text-lg text-access/75 leading-relaxed mt-5 max-w-2xl mx-auto">
            Agende sua sessão de Barras de Access Consciousness com a Terapeuta Juliana Moço Corrêa e
            sinta a clareza e a paz que você merece.
          </p>


          <WhatsAppScheduler

            therapy="Barras de Access Consciousness"

            topics={["Mente acelerada", "Ansiedade", "Bloqueios e limitações", "Insônia", "Excesso de pensamentos", "Clareza para decisões"]}

            className="mt-9 max-w-2xl mx-auto"

          />

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-access hover:bg-access/90 text-access-cream font-sans font-medium px-8 py-6 text-base rounded-full shadow-access"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Agendar Minha Sessão no WhatsApp
              </Button>
            </a>
            <Link to="/#terapias">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-access/30 text-access hover:bg-access/5 font-sans font-medium px-8 py-6 text-base rounded-full"
              >
                Conhecer Outras Terapias
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 md:mt-12 bg-access-cream border border-access-sand rounded-2xl p-6 md:p-8 text-left shadow-soft">
            <h3 className="font-serif text-lg font-semibold text-access mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-access-olive" strokeWidth={1.6} /> Onde acontece
            </h3>
            <ul className="font-sans text-sm md:text-base text-access/75 space-y-2">
              <li>
                📍 Atendimentos presenciais na AlinhaMente Terapias Integradas em Cascavel - PR.
              </li>
              <li>
                📞 WhatsApp:{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-access font-medium underline decoration-access-soft/60 underline-offset-4"
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
        aria-label="Agendar Barras de Access via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </main>
  );
};

export default BarrasTherapy;
