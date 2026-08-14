import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Brain,
  Leaf,
  Sparkles,
  Sun,
  Check,
  MapPin,
  Clock,
  Coffee,
  HeartHandshake,
  Feather,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import cacauImg from "@/assets/therapy-cacau.jpg";

const WHATSAPP_URL =
  "https://wa.me/554599891066?text=Ol%C3%A1%2C%20Juliana!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Terapia%20do%20Cacau.";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const pillars = [
  {
    icon: Leaf,
    title: "100% Pura Medicina Natural",
    text: "Utilizamos cacau em grau cerimonial — a semente inteira, moída artesanalmente, sem açúcar, leite ou gorduras adicionadas. Muito diferente do chocolate comum, ele preserva toda a força nutricional e vibracional da planta.",
  },
  {
    icon: Heart,
    title: "Nutrição Física & Energética",
    text: "Rico em teobromina, magnésio, ferro e antioxidantes, o cacau sagrado nutre o sistema nervoso e estimula suavemente o centro cardíaco — sem qualquer efeito alucinógeno ou alteração de consciência.",
  },
  {
    icon: Feather,
    title: "Atuação Suave e Respeitosa",
    text: "Nada é forçado. O cacau apenas abre a porta: traz clareza, presença e permite que as emoções guardadas venham à superfície no seu tempo, dentro de um espaço seguro e acolhedor.",
  },
];

const benefits = [
  {
    icon: HeartHandshake,
    title: "Abertura do Coração",
    text: "Liberdade para acolher, sentir e processar emoções que estavam guardadas há muito tempo.",
  },
  {
    icon: Brain,
    title: "Clareza Mental",
    text: "Diminuição dos pensamentos acelerados e aumento real da sensação de presença no agora.",
  },
  {
    icon: Leaf,
    title: "Alívio da Ansiedade",
    text: "Estímulo natural de serotonina e dopamina, favorecendo um relaxamento profundo e duradouro.",
  },
  {
    icon: Sparkles,
    title: "Reconexão Espiritual",
    text: "Reequilíbrio dos centros energéticos, com atenção especial ao chakra cardíaco.",
  },
  {
    icon: Sun,
    title: "Renovação Energética",
    text: "Sensação de leveza, acolhimento interno e renovação do ânimo para seguir a rotina.",
  },
  {
    icon: Coffee,
    title: "Ritual de Autocuidado",
    text: "Um tempo dedicado só a você: pausa consciente para escutar o que o corpo pede.",
  },
];

const steps = [
  {
    title: "Acolhimento e Intenção",
    text: "Conversa inicial tranquila para entender o seu momento, alinhar suas buscas e definir juntas a intenção da jornada.",
  },
  {
    title: "O Ritual do Cacau",
    text: "Consagração e ingestão da bebida sagrada, preparada artesanalmente com cacau cerimonial e especiarias.",
  },
  {
    title: "Condução Terapêutica",
    text: "Meditação guiada, respiração consciente e práticas integrativas conduzidas pela terapeuta Juliana Moço Corrêa.",
  },
  {
    title: "Integração",
    text: "Momento de silêncio, acolhimento dos insights, registro do que emergiu e fechamento cuidadoso da experiência.",
  },
];

const forWhom = [
  "Sente o estresse e a sobrecarga mental pesando no corpo e nas emoções",
  "Busca paz interior, silêncio e uma pausa verdadeira na rotina",
  "Deseja superar bloqueios emocionais e mágoas acumuladas",
  "Quer resgatar o amor-próprio e criar um ritual de autocuidado",
  "Vive um momento de transição, luto ou tomada de decisão",
  "Deseja aprofundar sua conexão espiritual de forma suave e segura",
];

const CacauTherapy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terapia do Cacau em Cascavel - PR | AlinhaMente";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Terapia do Cacau em Cascavel - PR: ritual de cacau cerimonial para aliviar o estresse, abrir o coração e reconectar corpo, mente e emoções. Agende com Juliana Moço Corrêa.",
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-cacao-cream animate-fade-in">
      {/* Seção 1 — Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cacauImg}
            alt="Xícara de cacau cerimonial preparada para uma sessão de Terapia do Cacau"
            className="w-full h-full object-cover"
            width={1024}
            height={640}
          />
          <div className="absolute inset-0 bg-cacao/80" />
          <div
            className="absolute inset-0 opacity-70"
            style={{ background: "var(--gradient-cacao)", mixBlendMode: "multiply" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-10 pb-16 md:pt-14 md:pb-24">
          <Link
            to="/#terapias"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-cacao-cream/90 border border-cacao-cream/30 rounded-full px-4 py-2 hover:bg-cacao-cream/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar às terapias
          </Link>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center mt-10">
            <div>
              <span className="inline-block font-sans text-xs md:text-sm tracking-[0.22em] uppercase text-cacao-gold mb-5">
                Espaço AlinhaMente · Cascavel - PR
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15] font-semibold text-cacao-cream">
                Terapia do Cacau: Uma Jornada de Reconexão com o Coração
              </h1>
              <p className="font-sans text-base md:text-lg text-cacao-cream/85 leading-relaxed mt-6 max-w-2xl">
                Desacelere a mente, alivie o estresse e abra espaço para a cura emocional através de
                um ritual ancestral suave e acolhedor em Cascavel - PR.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-cacao-gold hover:bg-cacao-gold/90 text-cacao font-sans font-medium px-8 py-6 text-base rounded-full shadow-cacao"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Agendar Sessão pelo WhatsApp
                  </Button>
                </a>
                <span className="font-sans text-sm text-cacao-cream/70 inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Sessões de 60 a 90 minutos
                </span>
              </div>
            </div>

            {/* Card visual de destaque */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-cacao border border-cacao-cream/20">
                <div className="relative">
                  <img
                    src={cacauImg}
                    alt="Ritual de cacau cerimonial no Espaço AlinhaMente"
                    className="w-full h-64 sm:h-80 lg:h-[26rem] object-cover"
                    loading="lazy"
                    width={1024}
                    height={640}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cacao/85 via-cacao/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-serif text-lg md:text-xl text-cacao-cream leading-snug">
                      “O cacau não cura por você. Ele abre a porta para que você se escute.”
                    </p>
                    <span className="block font-sans text-xs tracking-widest uppercase text-cacao-gold mt-3">
                      Juliana Moço Corrêa · Terapeuta
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 — Introdução & conexão emocional */}
      <section className="bg-cacao-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Heart className="w-8 h-8 text-cacao-soft mx-auto mb-6" strokeWidth={1.4} />
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao leading-tight">
            Você sente que a rotina acelerada tem te desconectado de si mesma?
          </h2>
          <div className="space-y-5 mt-8 font-sans text-base md:text-lg text-cacao/75 leading-relaxed">
            <p>
              Os dias passam rápido, a lista de tarefas nunca termina e, no meio de tudo isso, você
              percebe que faz tempo que não para para sentir o próprio coração. A mente segue
              acelerada até na hora de dormir. O corpo pede pausa, mas a rotina não deixa.
            </p>
            <p>
              Aos poucos, os sentimentos vão sendo guardados: aquele cansaço que ninguém vê, a
              mágoa engolida, a vontade de chorar sem motivo aparente. Não é fraqueza — é sobrecarga
              emocional pedindo espaço.
            </p>
            <p className="text-cacao font-medium">
              A Terapia do Cacau é um convite gentil para desacelerar, respirar fundo e voltar a
              ouvir o que o seu coração tem a dizer.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3 — O que é o cacau cerimonial */}
      <section className="bg-cacao-sand/60 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-cacao-olive">
              Diferenciação
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao mt-3">
              O Que Torna o Cacau Sagrado Tão Especial?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="bg-cacao-cream rounded-2xl p-7 md:p-8 shadow-soft border border-cacao-sand hover:shadow-cacao transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-cacao/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-cacao-soft" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cacao mb-3">{title}</h3>
                <p className="font-sans text-sm md:text-base text-cacao/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Benefícios */}
      <section className="bg-cacao-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-cacao-olive">
              Benefícios transformadores
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao mt-3">
              Como a Terapia do Cacau Pode Te Ajudar?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group bg-cacao-sand/40 rounded-2xl p-7 border border-cacao-sand hover:bg-cacao-sand/70 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-cacao-cream flex items-center justify-center mb-5 shadow-soft">
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
      <section className="relative py-16 md:py-24" style={{ background: "var(--gradient-cacao)" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-cacao-gold">
              Passo a passo
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao-cream mt-3">
              O Que Esperar de uma Jornada na AlinhaMente?
            </h2>
          </div>

          <ol className="relative border-l border-cacao-cream/25 ml-5 md:ml-6 space-y-10">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-8 md:pl-10">
                <span className="absolute -left-[1.375rem] top-0 w-11 h-11 rounded-full bg-cacao-cream text-cacao font-serif text-lg font-semibold flex items-center justify-center shadow-cacao">
                  {i + 1}
                </span>
                <h3 className="font-serif text-xl font-semibold text-cacao-cream">{step.title}</h3>
                <p className="font-sans text-sm md:text-base text-cacao-cream/80 leading-relaxed mt-2">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seção 6 — Para quem é indicada */}
      <section className="bg-cacao-cream py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-cacao-olive">
              Indicações
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao mt-3">
              Esta Experiência é Para Você?
            </h2>
            <p className="font-sans text-base text-cacao/70 leading-relaxed mt-5">
              A Terapia do Cacau é segura, suave e conduzida com muito cuidado. Ela é especialmente
              indicada se você se identifica com um ou mais destes pontos:
            </p>
          </div>

          <ul className="space-y-4">
            {forWhom.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 bg-cacao-sand/40 border border-cacao-sand rounded-xl p-4"
              >
                <span className="w-6 h-6 rounded-full bg-cacao-olive/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-cacao-olive" strokeWidth={2.2} />
                </span>
                <span className="font-sans text-sm md:text-base text-cacao/80 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Seção 7 — CTA final + localização */}
      <section className="bg-cacao-sand/60 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Sparkles className="w-8 h-8 text-cacao-gold mx-auto mb-6" strokeWidth={1.4} />
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-cacao">
            Seu Coração Está Pronto Para Essa Reconexão?
          </h2>
          <p className="font-sans text-base md:text-lg text-cacao/75 leading-relaxed mt-5 max-w-2xl mx-auto">
            Reserve um tempo só para você. Agende sua sessão de Terapia do Cacau na AlinhaMente
            Terapias Integradas, em Cascavel - PR, e permita-se voltar ao seu próprio ritmo.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-cacao hover:bg-cacao/90 text-cacao-cream font-sans font-medium px-8 py-6 text-base rounded-full shadow-cacao"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Falar no WhatsApp e Agendar
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

          <div className="mt-12 bg-cacao-cream border border-cacao-sand rounded-2xl p-7 md:p-8 text-left shadow-soft">
            <h3 className="font-serif text-lg font-semibold text-cacao mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cacao-olive" strokeWidth={1.6} /> Onde acontece
            </h3>
            <ul className="font-sans text-sm md:text-base text-cacao/75 space-y-2">
              <li>📍 Atendimento presencial em Cascavel - PR | Opção de sessões online.</li>
              <li>
                Terapeuta Juliana Moço Corrêa | WhatsApp:{" "}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-cacao font-medium underline decoration-cacao-gold/60 underline-offset-4">
                  (45) 99989-1066
                </a>
              </li>
              <li>Espaço AlinhaMente Terapias Integradas · R. Rodrigues Alves, 1450 - Maria Luíza</li>
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
        aria-label="Agendar Terapia do Cacau via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </main>
  );
};

export default CacauTherapy;
