import { useFadeIn } from "@/hooks/useFadeIn";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Brain, Moon, Feather, Sparkles } from "lucide-react";
import portraitImg from "@/assets/juliana-bio.jpg";

const WHATSAPP_NUMBER = "554599891066";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Juliana! Vim pelo site e gostaria de agendar uma conversa pelo WhatsApp."
)}`;

const benefits = [
  {
    icon: Leaf,
    title: "Escuta atenta e acolhimento humano",
    desc: "desde o primeiro minuto.",
  },
  {
    icon: Brain,
    title: "Alívio do estresse e da ansiedade",
    desc: "com métodos suaves e comprovados.",
  },
  {
    icon: Moon,
    title: "Melhora profunda do sono",
    desc: "e renovação da sua disposição diária.",
  },
  {
    icon: Feather,
    title: "Clareza mental",
    desc: "para tomar decisões e superar bloqueios emocionais.",
  },
  {
    icon: Sparkles,
    title: "Reconexão com a sua essência",
    desc: "e com o prazer de viver bem.",
  },
];

const BioSection = () => {
  const ref = useFadeIn();

  return (
    <section id="sobre" className="py-24 px-6 md:px-16">
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
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-xl bg-muted/40 border border-accent/20 p-4 min-w-0"
                >
                  <span className="flex-shrink-0 mt-0.5 text-accent">
                    <Icon className="w-5 h-5" />
                  </span>
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
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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
