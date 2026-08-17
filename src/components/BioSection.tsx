import { useFadeIn } from "@/hooks/useFadeIn";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import portraitImg from "@/assets/juliana-bio.jpg";

const WHATSAPP_NUMBER = "554599891066";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Juliana! Vim pelo site e gostaria de agendar uma conversa pelo WhatsApp."
)}`;

const benefits = [
  {
    title: "Escuta atenta e acolhimento humano",
    desc: "desde o primeiro minuto.",
  },
  {
    title: "Alívio do estresse e da ansiedade",
    desc: "com métodos suaves e comprovados.",
  },
  {
    title: "Melhora profunda do sono",
    desc: "e renovação da sua disposição diária.",
  },
  {
    title: "Clareza mental",
    desc: "para tomar decisões e superar bloqueios emocionais.",
  },
  {
    title: "Reconexão com a sua essência",
    desc: "e com o prazer de viver bem.",
  },
];

const BioSection = () => {
  const ref = useFadeIn();

  return (
    <section id="sobre" className="py-14 md:py-24 px-5 sm:px-6 lg:px-16">
      <div
        ref={ref}
        className="fade-in-section max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
      >
        {/* Foto autoral e acolhedora */}
        <div className="relative order-1 md:order-none">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={portraitImg}
              alt="Juliana Moço Corrêa - Terapeuta Integrativa em Cascavel - PR"
              className="w-full h-auto object-cover aspect-square"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </div>

        {/* Texto formatado e bem espaçado */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Minha Jornada & Propósito
          </h2>

          <p className="font-serif text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-6">
            “Prazer, eu sou a Juliana Moço Corrêa. Se você busca equilíbrio,
            leveza e acolhimento, saiba que não precisa carregar suas dores
            sozinha.”
          </p>

          <div className="space-y-5 text-muted-foreground font-sans leading-relaxed text-base md:text-[1.05rem]">
            <p>
              Se você chegou até aqui, é muito provável que esteja sentindo o
              peso do cansaço mental, da ansiedade ou de sentimentos que parecem
              não ter fim. Eu sei como é viver assim — e quero que saiba que
              existe um caminho de alívio e reconexão.
            </p>
            <p>
              A <strong className="text-foreground">AlinhaMente Terapias Integradas</strong> nasceu dessa busca por um cuidado
              verdadeiro. Acredito que a saúde de fato não é apenas a ausência
              de sintomas, mas o <strong className="text-foreground">alinhamento real entre corpo, mente e emoções</strong>.
            </p>
            <p>
              Mais do que aplicar técnicas, meu compromisso no meu espaço em{" "}
              <strong className="text-foreground">Cascavel - PR</strong> é oferecer
              a você um <strong className="text-foreground">ambiente seguro, sem julgamentos e 100% focado no seu tempo</strong>.
              Um lugar onde você pode desacelerar e:
            </p>
            <ul className="space-y-2 ml-2">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span><strong className="text-foreground">Restabelecer seu equilíbrio interior</strong> e a paz que a rotina acelerada roubou;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span><strong className="text-foreground">Dissolver bloqueios e padrões</strong> que insistem em travar o seu caminho;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span><strong className="text-foreground">Reconectar-se com a sua força</strong>, vivendo com mais clareza, leveza e saúde.</span>
              </li>
            </ul>
          </div>

          {/* Cards de destaque: O que você vai encontrar nos meus atendimentos */}
          <div className="mt-10">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-5">
              O que você vai encontrar nos meus atendimentos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0">
              {benefits.map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl bg-muted/40 border border-accent/20 p-4 min-w-0"
                >
                  <p className="text-sm md:text-base text-muted-foreground leading-snug min-w-0">
                    <strong className="text-foreground">{title}</strong>{" "}
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA WhatsApp */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-sans text-sm font-medium shadow-card hover:shadow-lg hover:bg-primary/90 transition-all"
            >
              Agendar uma Conversa pelo WhatsApp
            </a>
            <Link
              to="/terapias-integradas"
              className="inline-flex items-center gap-2 text-accent font-sans text-sm font-medium hover:gap-3 transition-all pt-2"
            >
              Conheça as Terapias Integradas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
