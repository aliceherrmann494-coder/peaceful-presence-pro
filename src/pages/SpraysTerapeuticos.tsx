import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Sparkles,
  Wind,
  Leaf,
  Target,
  Scale,
  Gift,
  Check,
  ShieldCheck,
  Minus,
  Plus,
  Moon,
  Sun,
  FlaskConical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import spraysDuo from "@/assets/sprays-duo.jpg";
import spraysRotulo from "@/assets/sprays-rotulo.jpg";
import spraysBorrifo from "@/assets/sprays-borrifo.jpg";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const galleryImages = [
  {
    src: spraysDuo,
    alt: "Sprays terapêuticos Atenção/Foco e Equilíbrio em frascos de vidro âmbar sobre linho bege",
  },
  {
    src: spraysRotulo,
    alt: "Detalhe do rótulo do spray terapêutico com mandala verde impressa em papel natural",
  },
  {
    src: spraysBorrifo,
    alt: "Névoa fina do spray terapêutico sendo borrifada sob luz dourada",
  },
];

const variants = [
  {
    id: "foco",
    name: "Spray Atenção / Foco",
    tag: "Mandala Verde",
    price: "R$ 29,90",
    badge: "",
  },
  {
    id: "equilibrio",
    name: "Spray Equilíbrio",
    tag: "Mandala Dourada",
    price: "R$ 29,90",
    badge: "",
  },
  {
    id: "kit",
    name: "Kit Combo Duplo",
    tag: "Foco + Equilíbrio",
    price: "R$ 29,90",
    badge: "Mais vendido · desconto especial",
  },
] as const;

const bodyActions = [
  {
    icon: Brain,
    title: "Ação no Sistema Límbico",
    text: "As micropartículas olfativas alcançam o bulbo olfatório e estimulam o cérebro emocional, regulando neurotransmissores de forma natural — sem químicos sintéticos.",
  },
  {
    icon: FlaskConical,
    title: "Fisiologia do Bem-Estar",
    text: "Na versão Equilíbrio, a sinergia atua na redução do cortisol (hormônio do estresse). Na versão Foco, estimula o estado de alerta mental e a atenção sustentada.",
  },
  {
    icon: Wind,
    title: "Purificação do Ar",
    text: "Os óleos essenciais puros possuem propriedades antissépticas naturais, higienizando o ambiente e renovando a sensação de leveza do espaço.",
  },
];

const energyActions = [
  {
    icon: Sparkles,
    title: "Limpeza Aural",
    text: "Transmuta densidades energéticas acumuladas na aura e no ambiente após atendimentos, discussões, aglomerações ou dias intensos.",
  },
  {
    icon: Scale,
    title: "Harmonização de Chakras",
    text: "Alinha os centros energéticos, favorecendo ancoramento, clareza mental e presença no corpo.",
  },
  {
    icon: ShieldCheck,
    title: "Consagração de Rituais",
    text: "Ideal para blindar o ambiente antes de meditar, trabalhar, estudar, atender ou dormir — criando um campo protegido de intenção.",
  },
];

const variantCards = [
  {
    icon: Target,
    name: "Spray Atenção / Foco",
    label: "Mandala Verde",
    accent: "text-sais-moss",
    ring: "bg-sais-olive/12",
    rows: [
      { label: "Ideal para", text: "Trabalho, estudos, momentos de procrastinação e fadiga mental." },
      {
        label: "Ação medicinal",
        text: "Melhora a concentração, reduz a névoa mental e estimula a memória.",
      },
      {
        label: "Ação espiritual",
        text: "Dissipa a dispersão e os pensamentos intrusivos, ancorando no momento presente.",
      },
    ],
  },
  {
    icon: Scale,
    name: "Spray Equilíbrio",
    label: "Mandala Dourada",
    accent: "text-sais-gold",
    ring: "bg-sais-gold/18",
    rows: [
      { label: "Ideal para", text: "Sobrecarga emocional, ansiedade, picos de estresse e insônia." },
      {
        label: "Ação medicinal",
        text: "Induz o relaxamento do sistema nervoso e acalma a respiração acelerada.",
      },
      {
        label: "Ação espiritual",
        text: "Restaura o fluxo do chakra cardíaco, trazendo sensação de paz e proteção.",
      },
    ],
  },
];

const ritual = [
  {
    step: "01",
    icon: Wind,
    title: "No Ambiente",
    text: "Borrife de 2 a 3 vezes no ar, nos cantos do cômodo, sobre a cama ou na mesa de trabalho.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "No Campo Pessoal (Aura)",
    text: "Borrife acima da cabeça, com os olhos fechados, e deixe a névoa suave cair sobre você.",
  },
  {
    step: "03",
    icon: Leaf,
    title: "O Ritual da Respiração",
    text: "Faça 3 respirações profundas inspirando a essência e internalizando a intenção — Foco ou Equilíbrio.",
  },
];

const specs = [
  "Frasco de vidro âmbar de 100ml (protege os ativos da luz)",
  "Válvula spray com névoa fina e homogênea",
  "Óleos essenciais puros de grau terapêutico",
  "Extratos botânicos e fitoenergéticos selecionados",
  "Produção artesanal em pequenos lotes",
  "Energizada pela terapeuta Juliana Moço Corrêa — Cascavel - PR",
];

const SpraysTerapeuticos = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [variant, setVariant] = useState<string>("kit");
  const [qty, setQty] = useState(1);

  const selected = variants.find((v) => v.id === variant) ?? variants[2];

  const buildUrl = (intro: string) =>
    `https://wa.me/554599891066?text=${encodeURIComponent(
      `${intro}\n\n• Opção: ${selected.name} (${selected.tag})\n• Frasco: vidro âmbar 100ml\n• Valor: ${selected.price}\n• Quantidade: ${qty} ${
        qty > 1 ? "unidades" : "unidade"
      }`,
    )}`;

  const orderUrl = buildUrl("Olá! Gostaria de encomendar os Sprays Terapêuticos da AlinhaMente.");
  const giftUrl = buildUrl(
    "Olá! Gostaria de encomendar os Sprays Terapêuticos da AlinhaMente para presente.",
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Sprays Terapêuticos Aromatizadores & Fitoenergéticos em Cascavel - PR | AlinhaMente";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Sprays Terapêuticos Atenção/Foco e Equilíbrio em frasco de vidro âmbar 100ml: aromaterapia e fitoenergética para foco, alinhamento emocional e proteção energética. Encomende pelo WhatsApp em Cascavel - PR.",
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-sais-cream animate-fade-in">
      {/* Seção 1 — Hero */}
      <section className="relative overflow-hidden bg-sais-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12 pt-8 pb-12 md:pt-12 md:pb-20">
          <Link
            to="/#produtos"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-sais/80 border border-sais/25 rounded-full px-4 py-2 hover:bg-sais/5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar aos produtos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start mt-8 md:mt-10">
            {/* Galeria */}
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden shadow-sais border border-sais-sand">
                <img
                  src={galleryImages[activeImg].src}
                  alt={galleryImages[activeImg].alt}
                  width={1024}
                  height={1024}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    aria-label={`Ver imagem ${i + 1} do produto`}
                    aria-pressed={activeImg === i}
                    className={`rounded-xl overflow-hidden border-2 transition-colors ${
                      activeImg === i ? "border-sais" : "border-sais-sand hover:border-sais/40"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Info do produto */}
            <div>
              <span className="inline-block font-sans text-xs md:text-sm tracking-[0.22em] uppercase text-sais-moss mb-3">
                Espaço AlinhaMente · Cascavel - PR
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-[1.18] font-semibold text-sais">
                Sprays Terapêuticos: Alinhamento Emocional, Foco e Proteção Energética
              </h1>
              <p className="font-sans text-base md:text-lg text-sais/70 leading-relaxed mt-4">
                Sua dose diária de bem-estar em um borrifar. A união perfeita entre a ciência da
                aromaterapia e a fitoenergética para transformar o seu ambiente e o seu estado
                interno.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-sais-sand px-4 py-2 text-sm font-sans text-sais font-medium">
                  <FlaskConical className="w-4 h-4" /> Vidro âmbar 100ml
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-sais-olive/10 px-4 py-2 text-sm font-sans text-sais-moss font-medium">
                  <Leaf className="w-4 h-4" /> Óleos essenciais puros
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-sais-gold/15 px-4 py-2 text-sm font-sans text-sais font-medium">
                  <Sparkles className="w-4 h-4" /> Energizado
                </span>
              </div>

              {/* Seletor de variação */}
              <div className="mt-7 p-5 md:p-6 rounded-2xl bg-white/60 border border-sais-sand">
                <p className="font-sans text-sm font-medium text-sais mb-3">Escolha a sua versão</p>
                <div className="flex flex-col gap-3" role="radiogroup" aria-label="Versão do spray">
                  {variants.map((v) => {
                    const active = variant === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setVariant(v.id)}
                        className={`text-left rounded-2xl border-2 px-4 py-4 transition-colors ${
                          active
                            ? "border-sais bg-sais/5"
                            : "border-sais-sand bg-white/50 hover:border-sais/40"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-sans text-sm font-semibold text-sais">{v.name}</p>
                            <p className="font-sans text-xs text-sais/60 mt-0.5">{v.tag}</p>
                            {v.badge && (
                              <span className="inline-block mt-2 rounded-full bg-sais-gold/20 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wide text-sais">
                                {v.badge}
                              </span>
                            )}
                          </div>
                          <span className="font-serif text-lg font-semibold text-sais whitespace-nowrap">
                            {v.price}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 pt-5 border-t border-sais-sand">
                  <p className="font-sans text-sm text-sais/60 mb-1">Valor de investimento</p>
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-sais">
                    {selected.price}{" "}
                    <span className="text-base font-sans font-normal text-sais/60">
                      · {selected.name}
                    </span>
                  </p>
                </div>

                {/* Quantidade */}
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="font-sans text-sm font-medium text-sais">Quantidade</p>
                  <div className="flex items-center gap-1 rounded-full border border-sais-sand bg-white/70 p-1">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      aria-label="Diminuir quantidade"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sais hover:bg-sais/10 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span
                      aria-live="polite"
                      className="min-w-8 text-center font-sans text-sm font-semibold text-sais"
                    >
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.min(20, q + 1))}
                      aria-label="Aumentar quantidade"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sais hover:bg-sais/10 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <a href={orderUrl} target="_blank" rel="noopener noreferrer" className="block mt-5">
                  <Button
                    size="lg"
                    className="w-full bg-sais hover:bg-sais/90 text-sais-cream font-sans font-medium px-8 py-6 text-base rounded-full shadow-sais"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Encomendar pelo WhatsApp
                  </Button>
                </a>
              </div>

              <p className="font-sans text-xs text-sais/55 mt-4 flex items-center gap-2">
                <Check className="w-4 h-4 text-sais-moss" strokeWidth={2.5} />
                Retirada em Cascavel - PR ou envio sob consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 — Sinergia: ciência + espiritualidade */}
      <section className="bg-sais-sand/50 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              A sinergia perfeita
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Como Este Produto Atua No Seu Corpo e No Seu Ambiente?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-sais-cream rounded-3xl p-6 md:p-8 border border-sais-sand">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-sais">
                No Corpo e na Mente
              </h3>
              <p className="font-sans text-sm text-sais/60 mt-1">
                Ação medicinal &amp; aromaterápica
              </p>
              <div className="mt-6 flex flex-col gap-5">
                {bodyActions.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="flex items-start gap-4">
                    <span className="shrink-0 w-11 h-11 rounded-full bg-sais/12 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sais" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="font-sans text-sm font-semibold text-sais">{title}</p>
                      <p className="font-sans text-sm text-sais/70 leading-relaxed mt-1">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="bg-sais-cream rounded-3xl p-6 md:p-8 border border-sais-sand">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-sais">
                No Campo Energético e Espiritual
              </h3>
              <p className="font-sans text-sm text-sais/60 mt-1">Ação fitoenergética</p>
              <div className="mt-6 flex flex-col gap-5">
                {energyActions.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="flex items-start gap-4">
                    <span className="shrink-0 w-11 h-11 rounded-full bg-sais-gold/18 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sais-gold" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="font-sans text-sm font-semibold text-sais">{title}</p>
                      <p className="font-sans text-sm text-sais/70 leading-relaxed mt-1">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 — As duas variações */}
      <section className="bg-sais-cream py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              A linha completa
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Conheça as Duas Variações
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {variantCards.map(({ icon: Icon, name, label, accent, ring, rows }) => (
              <article
                key={name}
                className="bg-white/60 rounded-3xl p-6 md:p-8 border border-sais-sand hover:shadow-sais transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-full ${ring} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${accent}`} strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-sais">{name}</h3>
                <p className={`font-sans text-xs tracking-[0.18em] uppercase mt-1 ${accent}`}>
                  {label}
                </p>
                <div className="mt-5 flex flex-col gap-4">
                  {rows.map((row) => (
                    <div key={row.label}>
                      <p className="font-sans text-xs font-semibold uppercase tracking-wide text-sais/50">
                        {row.label}
                      </p>
                      <p className="font-sans text-sm text-sais/75 leading-relaxed mt-1">{row.text}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Guia de uso */}
      <section className="bg-sais-sand/50 py-14 md:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              Ritual em 3 passos
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Como Usar o Seu Spray Terapêutico?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {ritual.map(({ step, icon: Icon, title, text }) => (
              <article
                key={step}
                className="bg-sais-cream rounded-2xl p-6 md:p-7 border border-sais-sand"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-full bg-sais/12 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-sais" strokeWidth={1.6} />
                  </span>
                  <span className="font-serif text-2xl font-semibold text-sais-gold">{step}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-sais mb-2">{title}</h3>
                <p className="font-sans text-sm text-sais/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 — Kit duplo & presente */}
      <section className="py-14 md:py-24" style={{ background: "var(--gradient-sais)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center">
            <div>
              <span className="inline-block rounded-full bg-sais-cream/15 border border-sais-cream/25 px-4 py-1.5 font-sans text-xs tracking-[0.18em] uppercase text-sais-cream">
                Mais vendido
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais-cream mt-4">
                Kit Ritual Dia &amp; Noite
              </h2>
              <p className="font-sans text-base md:text-lg text-sais-cream/85 leading-relaxed mt-4">
                Atenção/Foco para produzir de dia + Equilíbrio para relaxar à noite. Dois frascos que
                acompanham o seu ciclo completo, do primeiro café à hora de dormir.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <p className="flex items-center gap-3 font-sans text-sm text-sais-cream/90">
                  <Sun className="w-5 h-5 text-sais-cream" strokeWidth={1.6} />
                  Manhã e tarde: clareza mental, memória e produtividade.
                </p>
                <p className="flex items-center gap-3 font-sans text-sm text-sais-cream/90">
                  <Moon className="w-5 h-5 text-sais-cream" strokeWidth={1.6} />
                  Noite: desaceleração do sistema nervoso, paz e sono profundo.
                </p>
                <p className="flex items-center gap-3 font-sans text-sm text-sais-cream/90">
                  <Gift className="w-5 h-5 text-sais-cream" strokeWidth={1.6} />
                  Presente de afeto e saúde integrativa para quem você ama.
                </p>
              </div>

              <a href={giftUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-7">
                <Button
                  size="lg"
                  className="bg-sais-cream hover:bg-sais-cream/90 text-sais font-sans font-medium px-8 py-6 text-base rounded-full"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Quero o Kit Duplo
                </Button>
              </a>
            </div>

            <img
              src={spraysDuo}
              alt="Kit duplo de sprays terapêuticos Atenção/Foco e Equilíbrio em frascos de vidro âmbar"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-sais"
            />
          </div>
        </div>
      </section>

      {/* Seção 6 — Ficha técnica */}
      <section className="bg-sais-cream py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              Transparência
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Ficha Técnica &amp; Composição
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {specs.map((spec) => (
              <div
                key={spec}
                className="flex items-start gap-3 rounded-2xl bg-white/60 border border-sais-sand px-5 py-4"
              >
                <span className="shrink-0 w-8 h-8 rounded-full bg-sais-olive/12 flex items-center justify-center">
                  <Check className="w-4 h-4 text-sais-moss" strokeWidth={2.4} />
                </span>
                <p className="font-sans text-sm text-sais/75 leading-relaxed">{spec}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-xs text-sais/55 leading-relaxed mt-6 text-center">
            Produto natural de uso aromático e energético. Não substitui tratamento médico ou
            psicológico. Mantenha fora do alcance de crianças e evite contato com os olhos.
          </p>
        </div>
      </section>

      {/* Seção 7 — CTA final */}
      <section className="bg-sais-sand/50 py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
            Leve para casa
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
            Leve o Alinhamento Terapêutico Para o Seu Dia a Dia
          </h2>
          <p className="font-sans text-base md:text-lg text-sais/70 leading-relaxed mt-5 max-w-2xl mx-auto">
            Encomende o seu spray diretamente com a terapeuta Juliana Corrêa e transforme cada
            borrifar em um gesto de cuidado com o seu corpo, sua mente e seu ambiente.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={orderUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-sais hover:bg-sais/90 text-sais-cream font-sans font-medium px-8 py-6 text-base rounded-full shadow-sais"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Encomendar Meu Spray no WhatsApp
              </Button>
            </a>
            <Link to="/#produtos">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-sais/30 text-sais hover:bg-sais/5 font-sans font-medium px-8 py-6 text-base rounded-full"
              >
                Ver Outros Produtos Terapêuticos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Botão flutuante do WhatsApp */}
      <a
        href={orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Encomendar Sprays Terapêuticos pelo WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </main>
  );
};

export default SpraysTerapeuticos;
