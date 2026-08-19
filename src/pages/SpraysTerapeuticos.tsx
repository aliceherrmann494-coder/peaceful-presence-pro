import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
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
  Heart,
  Wind,
  Droplets,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import spraysTrio from "@/assets/sprays-trio.png";
import spraysFoco from "@/assets/sprays-foco.png";
import spraysHarmonia from "@/assets/sprays-harmonia.png";
import spraysEquilibrio from "@/assets/sprays-equilibrio.png";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const galleryImages = [
  {
    src: spraysTrio,
    alt: "Linha AlinhaMente: sprays Harmonia, Equilíbrio e Atenção/Foco em frascos de vidro âmbar",
  },
  {
    src: spraysFoco,
    alt: "Spray Atenção/Foco em frasco de vidro âmbar com mandala verde",
  },
  {
    src: spraysHarmonia,
    alt: "Spray Harmonia em frasco de vidro âmbar com mandala roxa",
  },
  {
    src: spraysEquilibrio,
    alt: "Spray Equilíbrio em frasco de vidro âmbar com mandala dourada, borrifando névoa fina",
  },
];

const variants = [
  {
    id: "foco",
    name: "Spray Atenção / Foco",
    tag: "Mandala Verde · clareza mental",
    price: "R$ 54,90",
    badge: "",
    imageIndex: 1,
    image: spraysFoco,
  },
  {
    id: "harmonia",
    name: "Spray Harmonia",
    tag: "Mandala Roxa · alinhamento emocional",
    price: "R$ 54,90",
    badge: "",
    imageIndex: 2,
    image: spraysHarmonia,
  },
  {
    id: "equilibrio",
    name: "Spray Equilíbrio",
    tag: "Mandala Dourada · proteção energética",
    price: "R$ 54,90",
    badge: "",
    imageIndex: 3,
    image: spraysEquilibrio,
  },
  {
    id: "kit",
    name: "Kit Combo Trio",
    tag: "Harmonia + Foco + Equilíbrio",
    price: "R$ 144,90",
    badge: "Mais vendido · desconto especial",
    imageIndex: 0,
    image: spraysTrio,
  },
] as const;

const bodyActions = [
  {
    icon: Target,
    title: "Atenção / Foco — clareza mental",
    text: "Estimula o estado de alerta, melhora a concentração e a memória e reduz a névoa mental. Ideal no trabalho, nos estudos e na fadiga do meio do dia — sem estimulantes sintéticos.",
  },
  {
    icon: Heart,
    title: "Harmonia — equilíbrio emocional",
    text: "Suaviza a agitação do sistema nervoso, amplia a respiração e devolve a sensação de centro. Indicado em oscilação emocional, tensão no peito, conflitos internos e necessidade de acolhimento.",
  },
  {
    icon: Scale,
    title: "Equilíbrio — relaxamento e sono",
    text: "Atua na redução do cortisol, acalma a respiração acelerada e induz o relaxamento. Apoia picos de estresse, ansiedade, sobrecarga e a preparação para uma noite mais profunda.",
  },
];

const energyActions = [
  {
    icon: ShieldCheck,
    title: "Atenção / Foco — ancoramento",
    text: "Dissipa a dispersão e os pensamentos intrusivos, ancora no momento presente e consagra o espaço antes de trabalhar, estudar ou atender — com intenção clara.",
  },
  {
    icon: Heart,
    title: "Harmonia — campo do coração",
    text: "Harmoniza o campo afetivo, abre espaço para o diálogo interno e reconecta com a leveza do coração. Limpa tensões emocionais após conversas densas ou dias de oscilação.",
  },
  {
    icon: Sparkles,
    title: "Equilíbrio — limpeza e proteção",
    text: "Transmuta densidades acumuladas na aura e no ambiente após atendimentos, discussões ou dias intensos, devolvendo a sensação de campo limpo, protegido e em paz.",
  },
];

const variantCards = [
  {
    id: "foco",
    icon: Target,
    name: "Spray Atenção / Foco",
    label: "Mandala Verde",
    image: spraysFoco,
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
    id: "harmonia",
    icon: Heart,
    name: "Spray Harmonia",
    label: "Mandala Roxa",
    image: spraysHarmonia,
    accent: "text-[#6B4C7A]",
    ring: "bg-[#6B4C7A]/12",
    rows: [
      { label: "Ideal para", text: "Oscilação emocional, conflitos internos, tensão no peito e necessidade de acolhimento." },
      {
        label: "Ação medicinal",
        text: "Suaviza a agitação emocional, favorece a respiração mais ampla e devolve a sensação de centro.",
      },
      {
        label: "Ação espiritual",
        text: "Harmoniza o campo afetivo, abre espaço para o diálogo interno e reconecta com a leveza do coração.",
      },
    ],
  },
  {
    id: "equilibrio",
    icon: Scale,
    name: "Spray Equilíbrio",
    label: "Mandala Dourada",
    image: spraysEquilibrio,
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

const ritualHowTo = [
  {
    icon: Wind,
    title: "No ambiente",
    text: "2 a 3 borrifadas nos cantos do cômodo, na mesa ou sobre a cama.",
  },
  {
    icon: Droplets,
    title: "Na aura",
    text: "1 a 2 vezes acima da cabeça, descendo até os ombros e o peito.",
  },
  {
    icon: Clock,
    title: "Na respiração",
    text: "Feche os olhos, inspire fundo 3 vezes e deixe a sinergia agir.",
  },
];

const ritual = [
  {
    id: "foco",
    step: "01",
    icon: Sun,
    time: "Manhã e tarde",
    title: "Atenção / Foco",
    mandala: "Mandala Verde",
    image: spraysFoco,
    accent: "text-sais-moss",
    ring: "bg-sais-olive/15",
    text: "O spray da clareza: use antes de produzir, estudar ou atender. Ajuda a sair da névoa mental e a entrar no que precisa ser feito — sem estimulantes.",
    where: "Mesa de trabalho, canto de estudos ou aura (cabeça e ombros).",
    pumps: "2 a 3 borrifadas",
    tip: "Borrife ao sentar na cadeira, antes de abrir o computador.",
    signs: ["Névoa mental", "Procrastinação", "Estudos e reuniões"],
  },
  {
    id: "harmonia",
    step: "02",
    icon: Heart,
    time: "Meio do dia",
    title: "Harmonia",
    mandala: "Mandala Roxa",
    image: spraysHarmonia,
    accent: "text-[#6B4C7A]",
    ring: "bg-[#6B4C7A]/12",
    text: "O spray do centro: use quando o emocional oscila, após conversas densas ou se o peito aperta. Devolve acolhimento e espaço para respirar.",
    where: "Peito, campo do coração ou ambiente depois de um diálogo difícil.",
    pumps: "2 a 3 borrifadas",
    tip: "Um gesto curto no peito já reconecta com a leveza do coração.",
    signs: ["Oscilação emocional", "Tensão no peito", "Conflitos internos"],
  },
  {
    id: "equilibrio",
    step: "03",
    icon: Moon,
    time: "Noite e descanso",
    title: "Equilíbrio",
    mandala: "Mandala Dourada",
    image: spraysEquilibrio,
    accent: "text-sais-gold",
    ring: "bg-sais-gold/18",
    text: "O spray da proteção: use ao fim do dia, após atendimentos intensos ou antes de dormir. Limpa o campo, acalma o corpo e prepara o sono.",
    where: "Cantos do cômodo, sobre a cama ou na aura à noite.",
    pumps: "3 a 4 borrifadas no ambiente",
    tip: "Borrife no quarto 10 minutos antes de deitar.",
    signs: ["Sobrecarga", "Ansiedade", "Preparar o sono"],
  },
];

const specs = [
  "Três versões: Harmonia, Atenção/Foco e Equilíbrio",
  "Frasco de vidro âmbar de 60ml (protege os ativos da luz)",
  "Válvula spray com névoa fina e homogênea",
  "Óleos essenciais puros de grau terapêutico",
  "Extratos botânicos e fitoenergéticos selecionados",
  "Produção artesanal em pequenos lotes, energizada em Cascavel - PR",
];

const parsePrice = (price: string) =>
  Number(price.replace(/[^\d,]/g, "").replace(",", "."));

const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const SpraysTerapeuticos = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [variant, setVariant] = useState<string>("kit");
  const [qty, setQty] = useState(1);

  const selected = variants.find((v) => v.id === variant) ?? variants[3];
  const unitValue = parsePrice(selected.price);
  const totalValue = unitValue * qty;
  const totalPrice = formatPrice(totalValue);

  const buildUrl = (intro: string) =>
    `https://wa.me/554599891066?text=${encodeURIComponent(
      `${intro}\n\n• Opção: ${selected.name} (${selected.tag})\n• Frasco: vidro âmbar 60ml\n• Valor unitário: ${selected.price}\n• Quantidade: ${qty} ${
        qty > 1 ? "unidades" : "unidade"
      }\n• Total: ${totalPrice}`,
    )}`;

  const orderUrl = buildUrl("Olá! Gostaria de encomendar os Sprays Terapêuticos da AlinhaMente.");
  const kit = variants.find((v) => v.id === "kit") ?? variants[3];
  const kitUrl = `https://wa.me/554599891066?text=${encodeURIComponent(
    `Olá! Gostaria de encomendar o Kit Combo Trio da AlinhaMente (Harmonia + Foco + Equilíbrio).\n\n• Valor: ${kit.price}\n• Quantidade: 1 unidade`,
  )}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Sprays Terapêuticos Aromatizadores & Fitoenergéticos em Cascavel - PR | AlinhaMente";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Sprays Terapêuticos Harmonia, Atenção/Foco e Equilíbrio em frasco de vidro âmbar 60ml: aromaterapia e fitoenergética para alinhamento emocional, foco e proteção energética. Encomende pelo WhatsApp em Cascavel - PR.",
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-sais-cream animate-fade-in overflow-x-hidden">
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
            <div className="flex flex-col gap-3 md:gap-4">
              <div id="galeria" className="rounded-2xl overflow-hidden border border-sais-sand shadow-sais bg-sais-cream">
                <img
                  src={galleryImages[activeImg].src}
                  alt={galleryImages[activeImg].alt}
                  width={1024}
                  height={1280}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full aspect-[4/5] object-contain object-center"
                />
              </div>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setActiveImg(i);
                      const match = variants.find((item) => item.imageIndex === i);
                      if (match) setVariant(match.id);
                    }}
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
                      className="w-full aspect-[4/5] object-contain bg-sais-cream"
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
                Sprays Terapêuticos: Harmonia, Foco e Proteção Energética
              </h1>
              <p className="font-sans text-base md:text-lg text-sais/70 leading-relaxed mt-4">
                Três sinergias, um mesmo ritual. Harmonia para alinhar as emoções, Atenção/Foco para
                clareza mental e Equilíbrio para proteger o campo energético — a união da aromaterapia
                com a fitoenergética em cada borrifar.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-sais-sand px-4 py-2 text-sm font-sans text-sais font-medium">
                  <FlaskConical className="w-4 h-4" /> Vidro âmbar 60ml
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-sais-olive/10 px-4 py-2 text-sm font-sans text-sais-moss font-medium">
                  <Leaf className="w-4 h-4" /> Óleos essenciais puros Doterra
                </span>
              </div>

              {/* Seletor de variação */}
              <div id="comprar" className="mt-7 p-5 md:p-6 rounded-2xl bg-white/60 border border-sais-sand shadow-sais">
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
                        onClick={() => {
                          setVariant(v.id);
                          setActiveImg(v.imageIndex);
                          document.getElementById("galeria")?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                        }}
                        className={`text-left rounded-2xl border-2 px-3 py-3 sm:px-4 sm:py-3.5 transition-colors ${
                          active
                            ? "border-sais bg-sais/5"
                            : "border-sais-sand bg-white/50 hover:border-sais/40"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                          <img
                            src={v.image}
                            alt=""
                            width={80}
                            height={100}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-contain bg-sais-cream border border-sais-sand shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-sans text-sm font-semibold text-sais leading-snug">{v.name}</p>
                              <span className="font-serif text-sm sm:text-lg font-semibold text-sais shrink-0">
                                {v.price}
                              </span>
                            </div>
                            <p className="font-sans text-xs text-sais/60 mt-0.5 leading-snug">{v.tag}</p>
                            {v.badge && (
                              <span className="inline-block mt-2 rounded-full bg-sais-gold/20 px-2.5 py-1 font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-sais">
                                {v.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 pt-5 border-t border-sais-sand">
                  <p className="font-sans text-sm text-sais/60 mb-1">Valor de investimento</p>
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-sais">
                    {totalPrice}
                  </p>
                  <p className="font-sans text-sm text-sais/60 mt-1">{selected.name}</p>
                </div>

                {/* Quantidade */}
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-sans text-sm font-medium text-sais">Quantidade</p>
                    {qty > 1 && (
                      <p className="font-sans text-xs text-sais/60 mt-1" aria-live="polite">
                        {selected.price} × {qty} = {totalPrice}
                      </p>
                    )}
                  </div>
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
              Como Cada Spray Atua No Corpo, Na Mente e No Campo
            </h2>
            <p className="font-sans text-sm md:text-base text-sais/65 leading-relaxed mt-4">
              Os três atuam pelo olfato no sistema límbico. Cada sinergia tem um benefício próprio:
              Foco para clarear, Harmonia para acolher e Equilíbrio para proteger e relaxar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-sais-cream rounded-2xl p-6 md:p-8 border border-sais-sand shadow-sais">
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

            <div className="bg-sais-cream rounded-2xl p-6 md:p-8 border border-sais-sand shadow-sais">
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

      {/* Seção 3 — As três variações */}
      <section className="bg-sais-cream py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              A linha completa
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Conheça as Três Variações
            </h2>
            <p className="font-sans text-sm md:text-base text-sais/65 leading-relaxed mt-4">
              Cada frasco tem uma intenção clara. Escolha o que o seu momento pede — ou combine-os no
              ritual do dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {variantCards.map(({ id, icon: Icon, name, label, accent, ring, rows, image }) => (
              <article
                key={name}
                className="bg-white/60 rounded-2xl border border-sais-sand shadow-sais transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <div className="aspect-[4/5] bg-white/70">
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className={`w-12 h-12 rounded-full ${ring} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${accent}`} strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-sais">{name}</h3>
                <p className={`font-sans text-xs tracking-[0.18em] uppercase mt-1 ${accent}`}>
                  {label}
                </p>
                <div className="mt-5 flex flex-col gap-4 flex-1">
                  {rows.map((row) => (
                    <div key={row.label}>
                      <p className="font-sans text-xs font-semibold uppercase tracking-wide text-sais/50">
                        {row.label}
                      </p>
                      <p className="font-sans text-sm text-sais/75 leading-relaxed mt-1">{row.text}</p>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setVariant(id);
                    setActiveImg(variants.find((v) => v.id === id)?.imageIndex ?? 0);
                    document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="mt-6 w-full rounded-full border border-sais/25 bg-white px-4 py-2.5 font-sans text-sm font-medium text-sais hover:bg-sais/5 transition-colors"
                >
                  Quero este spray · R$ 54,90
                </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Guia de uso */}
      <section className="bg-sais-sand/50 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              Quando usar cada um
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Um Ritual Para Cada Momento Do Dia
            </h2>
            <p className="font-sans text-sm md:text-base text-sais/65 leading-relaxed mt-4">
              Foco pela manhã, Harmonia no meio do dia e Equilíbrio à noite. O gesto é o mesmo em
              todos: ambiente, aura e três respirações profundas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-10">
            {ritualHowTo.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="flex items-start gap-3 rounded-2xl bg-white/55 border border-sais-sand px-4 py-4"
              >
                <span className="shrink-0 w-10 h-10 rounded-full bg-sais/12 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-sais" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="font-sans text-sm font-semibold text-sais">{title}</p>
                  <p className="font-sans text-xs text-sais/65 leading-relaxed mt-0.5">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {ritual.map(
              ({
                id,
                step,
                icon: Icon,
                time,
                title,
                mandala,
                image,
                accent,
                ring,
                text,
                where,
                pumps,
                tip,
                signs,
              }) => (
                <article
                  key={id}
                  className="bg-sais-cream rounded-2xl border border-sais-sand shadow-sais overflow-hidden flex flex-col"
                >
                  <div className="h-44 sm:h-52 bg-white/70">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      width={768}
                      height={960}
                      className="w-full h-full object-contain p-3"
                    />
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className={`w-11 h-11 rounded-full ${ring} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${accent}`} strokeWidth={1.6} />
                      </span>
                      <span className="font-serif text-2xl font-semibold text-sais-gold">{step}</span>
                    </div>
                    <p className={`font-sans text-xs tracking-[0.18em] uppercase font-semibold ${accent}`}>
                      {time}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-sais mt-1">{title}</h3>
                    <p className="font-sans text-xs text-sais/55 mt-0.5">{mandala}</p>
                    <p className="font-sans text-sm text-sais/70 leading-relaxed mt-3">{text}</p>

                    <dl className="mt-5 space-y-3">
                      <div>
                        <dt className="font-sans text-xs font-semibold uppercase tracking-wide text-sais/50">
                          Onde borrifar
                        </dt>
                        <dd className="font-sans text-sm text-sais/75 leading-relaxed mt-1">{where}</dd>
                      </div>
                      <div>
                        <dt className="font-sans text-xs font-semibold uppercase tracking-wide text-sais/50">
                          Quantas vezes
                        </dt>
                        <dd className="font-sans text-sm text-sais/75 leading-relaxed mt-1">{pumps}</dd>
                      </div>
                    </dl>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {signs.map((sign) => (
                        <span
                          key={sign}
                          className="rounded-full bg-white/80 border border-sais-sand px-2.5 py-1 font-sans text-[11px] text-sais/70"
                        >
                          {sign}
                        </span>
                      ))}
                    </div>

                    <p className="font-sans text-xs text-sais/60 leading-relaxed mt-4 italic">
                      Dica: {tip}
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setVariant(id);
                        setActiveImg(variants.find((v) => v.id === id)?.imageIndex ?? 0);
                        document.getElementById("comprar")?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                      className="mt-5 w-full rounded-full border border-sais/25 bg-white px-4 py-2.5 font-sans text-sm font-medium text-sais hover:bg-sais/5 transition-colors"
                    >
                      Quero este spray
                    </button>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Seção 5 — Linha completa */}
      <section className="py-14 md:py-24" style={{ background: "var(--gradient-sais)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center">
            <div>
              <span className="inline-block rounded-full bg-sais-cream/15 border border-sais-cream/25 px-4 py-1.5 font-sans text-xs tracking-[0.18em] uppercase text-sais-cream">
                A linha completa
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais-cream mt-4">
                Três Sinergias Para o Ciclo Inteiro
              </h2>
              <p className="font-sans text-base md:text-lg text-sais-cream/85 leading-relaxed mt-4">
                Harmonia, Atenção/Foco e Equilíbrio nascem da mesma farmácia terapêutica. Cada frasco
                responde a um momento: clarear, acolher ou proteger. Monte o seu ritual com um, dois
                ou os três.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <p className="flex items-center gap-3 font-sans text-sm text-sais-cream/90">
                  <Sun className="w-5 h-5 text-sais-cream" strokeWidth={1.6} />
                  Atenção/Foco: manhã e tarde, para clareza, memória e produtividade.
                </p>
                <p className="flex items-center gap-3 font-sans text-sm text-sais-cream/90">
                  <Heart className="w-5 h-5 text-sais-cream" strokeWidth={1.6} />
                  Harmonia: o meio do dia e o coração, para alinhar emoções e acolher.
                </p>
                <p className="flex items-center gap-3 font-sans text-sm text-sais-cream/90">
                  <Moon className="w-5 h-5 text-sais-cream" strokeWidth={1.6} />
                  Equilíbrio: noite e ambiente, para proteção, paz e sono profundo.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 max-w-sm">
                <button
                  type="button"
                  onClick={() => {
                    setVariant("harmonia");
                    setActiveImg(2);
                    document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="h-12 w-full rounded-full bg-sais-cream text-sais font-sans text-sm font-semibold tracking-wide hover:bg-white transition-colors"
                >
                  Escolher meus sprays
                </button>
                <a
                  href={kitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-full inline-flex items-center justify-center gap-2 rounded-full bg-sais-cream/15 border border-sais-cream/45 text-sais-cream font-sans text-sm font-semibold tracking-wide hover:bg-sais-cream hover:text-sais transition-colors"
                >
                  <Gift className="w-4 h-4" />
                  Kit Trio · R$ 144,90
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-sais-sand shadow-sais">
              <img
                src={spraysTrio}
                alt="Linha completa de sprays terapêuticos AlinhaMente: Harmonia, Equilíbrio e Atenção/Foco"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full aspect-square object-cover object-center"
              />
            </div>
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
                className="flex items-start gap-3 rounded-2xl bg-white/60 border border-sais-sand shadow-sais px-5 py-4"
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
            Encomende o seu spray — Harmonia, Foco ou Equilíbrio — diretamente com a terapeuta
            Juliana Corrêa e transforme cada borrifar em um gesto de cuidado com o seu corpo, sua
            mente e seu ambiente.
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
