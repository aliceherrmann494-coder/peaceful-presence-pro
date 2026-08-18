import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  Gift,
  Check,
  ShieldCheck,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import soapImg from "@/assets/product-soap.jpg";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const variants = [
  {
    id: "calmaria",
    name: "Sabonete Calmaria & Sono",
    tag: "Camomila e Lavanda",
    price: "R$ 32,90",
    badge: "",
    swatch: "bg-[#6B4C7A]/70",
  },
  {
    id: "energizante",
    name: "Sabonete Energizante & Renovação",
    tag: "Alecrim e Menta",
    price: "R$ 32,90",
    badge: "",
    swatch: "bg-sais-olive",
  },
  {
    id: "detox",
    name: "Sabonete Detox & Purificação",
    tag: "Carvão ativado e argila",
    price: "R$ 32,90",
    badge: "",
    swatch: "bg-sais",
  },
  {
    id: "kit",
    name: "Kit Trio SPA",
    tag: "Coleção completa · Calmaria, Energizante e Detox",
    price: "R$ 89,90",
    badge: "Mais vendido · desconto especial",
    swatch: "bg-sais-gold",
  },
] as const;

const benefits = [
  {
    title: "Hidratação & Proteção Dermatológica",
    text: "Produzidos pelo método artesanal de saponificação a frio (Cold Process), mantêm a glicerina natural que nutre, restaura a barreira cutânea e não resseca a pele.",
  },
  {
    title: "100% Vegetal & Clean Beauty",
    text: "Livre de sulfatos, parabenos, petrolatos, detergentes sintéticos e fragrâncias artificiais que causam alergias. Cosmetologia limpa para o uso diário.",
  },
  {
    title: "Aromaterapia no Banho",
    text: "O calor do chuveiro liberta os óleos essenciais puros, atuando no sistema olfativo para desacelerar a mente e aliviar a ansiedade.",
  },
  {
    title: "Limpeza do Campo Energético",
    text: "A fitoenergética das ervas medicinais atua descarregando o cansaço do dia e renovando o seu campo aural a cada banho.",
  },
];

const optionCards = [
  {
    id: "calmaria",
    name: "Sabonete Calmaria & Relaxamento",
    label: "Banho noturno",
    ativos: "Flores de Camomila, óleo essencial de Lavanda e manteiga de Karité.",
    indicacao: "Ideal para o banho da noite, alívio da ansiedade e preparação para um sono reparador.",
  },
  {
    id: "energizante",
    name: "Sabonete Vitalidade & Foco",
    label: "Banho matinal",
    ativos: "Extrato de Alecrim, Hortelã-Pimenta e óleo de Amêndoas Doces.",
    indicacao: "Perfeito para o banho da manhã: desperta a mente, estimula a circulação e renova a energia.",
  },
  {
    id: "detox",
    name: "Sabonete Detox & Purificação",
    label: "Limpeza profunda",
    ativos: "Argila verde, carvão ativado vegetal e extrato de Barbatimão.",
    indicacao: "Ação esfoliante suave, controle da oleosidade e limpeza das impurezas e energias acumuladas.",
  },
];

const ritualSteps = [
  "Massageie o sabonete suavemente sobre a pele úmida até formar uma espuma cremosa.",
  "Reserve alguns segundos para inalar o aroma dos óleos essenciais que se libertam com o vapor da água.",
  "Enxágue sentindo a pele macia, hidratada e o corpo relaxado.",
];

const specs = [
  "Base 100% vegetal, saponificada a frio",
  "Óleos essenciais puros de grau terapêutico",
  "Manteigas botânicas (karité e óleos vegetais)",
  "Livre de crueldade animal (cruelty-free)",
  "Sem sulfatos, parabenos, petrolatos ou fragrâncias sintéticas",
  "Artesanalmente energizado pela terapeuta Juliana Moço Corrêa em Cascavel - PR",
];

const parsePrice = (price: string) =>
  Number(price.replace(/[^\d,]/g, "").replace(",", "."));

const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const SabonetesTerapeuticos = () => {
  const [variant, setVariant] = useState<string>("kit");
  const [qty, setQty] = useState(1);

  const selected = variants.find((v) => v.id === variant) ?? variants[3];
  const unitValue = parsePrice(selected.price);
  const totalValue = unitValue * qty;
  const totalPrice = formatPrice(totalValue);

  const buildUrl = (intro: string) =>
    `https://wa.me/554599891066?text=${encodeURIComponent(
      `${intro}\n\n• Opção: ${selected.name} (${selected.tag})\n• Valor unitário: ${selected.price}\n• Quantidade: ${qty} ${
        qty > 1 ? "unidades" : "unidade"
      }\n• Total: ${totalPrice}`,
    )}`;

  const orderUrl = buildUrl("Olá! Gostaria de encomendar os Sabonetes Terapêuticos Artesanais da AlinhaMente.");
  const kit = variants.find((v) => v.id === "kit") ?? variants[3];
  const kitUrl = `https://wa.me/554599891066?text=${encodeURIComponent(
    `Olá! Gostaria de encomendar o Kit Trio SPA de Sabonetes Terapêuticos da AlinhaMente (Calmaria, Energizante e Detox).\n\n• Valor: ${kit.price}\n• Quantidade: 1 kit`,
  )}`;
  const giftUrl = buildUrl(
    "Olá! Gostaria de encomendar os Sabonetes Terapêuticos Artesanais para presente, em embalagem ecológica.",
  );

  const goToBuy = (id: string) => {
    setVariant(id);
    document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sabonetes Terapêuticos Artesanais em Cascavel - PR | AlinhaMente";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Sabonetes terapêuticos artesanais em Cascavel - PR: saponificação a frio com óleos essenciais, manteigas vegetais e extratos botânicos. Calmaria, Energizante e Detox. Encomende pelo WhatsApp.",
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
            <div id="galeria" className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-sais-sand shadow-sais">
                <img
                  src={soapImg}
                  alt="Sabonetes terapêuticos artesanais da AlinhaMente, cortados à mão com ervas secas"
                  width={1024}
                  height={1024}
                  className="w-full aspect-square object-cover object-center bg-white/60"
                />
              </div>
            </div>

            <div>
              <span className="inline-block font-sans text-xs md:text-sm tracking-[0.22em] uppercase text-sais-moss mb-3">
                Espaço AlinhaMente · Cascavel - PR
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-[1.18] font-semibold text-sais">
                Sabonetes Terapêuticos Artesanais: O Seu Banho Transformado em Ritual
              </h1>
              <p className="font-sans text-base md:text-lg text-sais/70 leading-relaxed mt-4">
                Nutrição profunda para a sua pele e alívio do estresse diário com óleos essenciais
                puros, manteigas vegetais e extratos botânicos.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-sais-olive/10 px-4 py-2 text-sm font-sans text-sais-moss font-medium">
                  <Leaf className="w-4 h-4" /> 100% vegetal
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-sais-gold/15 px-4 py-2 text-sm font-sans text-sais font-medium">
                  <ShieldCheck className="w-4 h-4" /> Cold Process
                </span>
              </div>

              <div id="comprar" className="mt-7 p-5 md:p-6 rounded-2xl bg-white/60 border border-sais-sand shadow-sais">
                <p className="font-sans text-sm font-medium text-sais mb-3">Escolha a sua versão</p>
                <div className="flex flex-col gap-3" role="radiogroup" aria-label="Versão do sabonete">
                  {variants.map((v) => {
                    const active = variant === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setVariant(v.id)}
                        className={`text-left rounded-2xl border-2 px-3 py-3 sm:px-4 sm:py-3.5 transition-colors ${
                          active
                            ? "border-sais bg-sais/5"
                            : "border-sais-sand bg-white/50 hover:border-sais/40"
                        }`}
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <span className={`mt-1 w-3 h-3 rounded-full shrink-0 ${v.swatch}`} />
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
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-sais">{totalPrice}</p>
                  <p className="font-sans text-sm text-sais/60 mt-1">{selected.name}</p>
                </div>

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

      {/* Seção 2 — Ciência do cuidado */}
      <section className="bg-sais-sand/50 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              Cuidado limpo
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Muito Mais do Que Limpeza: Um Cuidado Integral
            </h2>
            <p className="font-sans text-sm md:text-base text-sais/65 leading-relaxed mt-4">
              Cada barra une cosmetologia artesanal e fitoenergética: nutre a pele, acalma o sistema
              nervoso e descarrega o dia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map(({ title, text }) => (
              <article
                key={title}
                className="bg-sais-cream rounded-2xl p-6 border border-sais-sand shadow-sais"
              >
                <h3 className="font-serif text-lg font-semibold text-sais mb-2">{title}</h3>
                <p className="font-sans text-sm text-sais/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3 — Opções terapêuticas */}
      <section className="bg-sais-cream py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              A linha completa
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Conheça as Opções Terapêuticas
            </h2>
            <p className="font-sans text-sm md:text-base text-sais/65 leading-relaxed mt-4">
              Três sinergias para ritmos diferentes do dia — ou o Kit Trio SPA, com desconto especial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {optionCards.map((card) => (
              <article
                key={card.id}
                className="bg-white/60 rounded-2xl p-6 md:p-7 border border-sais-sand shadow-sais flex flex-col"
              >
                <p className="font-sans text-xs tracking-[0.18em] uppercase font-semibold text-sais-gold">
                  {card.label}
                </p>
                <h3 className="font-serif text-xl font-semibold text-sais mt-2">{card.name}</h3>
                <div className="mt-5 flex flex-col gap-4 flex-1">
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wide text-sais/50">
                      Ativos
                    </p>
                    <p className="font-sans text-sm text-sais/75 leading-relaxed mt-1">{card.ativos}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wide text-sais/50">
                      Indicação
                    </p>
                    <p className="font-sans text-sm text-sais/75 leading-relaxed mt-1">{card.indicacao}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => goToBuy(card.id)}
                  className="mt-6 w-full rounded-full border border-sais/25 bg-white px-4 py-2.5 font-sans text-sm font-medium text-sais hover:bg-sais/5 transition-colors"
                >
                  Quero este sabonete · R$ 32,90
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Ritual de uso */}
      <section className="bg-sais-sand/50 py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              Ritual de autocuidado
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Como Potencializar o Seu Momento
            </h2>
          </div>

          <ol className="space-y-4">
            {ritualSteps.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 bg-sais-cream rounded-2xl p-5 md:p-6 border border-sais-sand shadow-sais"
              >
                <span className="shrink-0 w-8 h-8 rounded-full bg-sais text-sais-cream font-serif text-sm font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="font-sans text-sm md:text-base text-sais/75 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>

          <p className="font-sans text-sm text-sais/70 leading-relaxed mt-6 px-1">
            <span className="font-semibold text-sais">Dica de durabilidade:</span> mantenha o sabonete
            em uma saboneteira vazada, que não acumule água.
          </p>
        </div>
      </section>

      {/* Seção 5 — Presente */}
      <section className="bg-sais-cream py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <article className="bg-white/60 rounded-2xl p-8 md:p-12 border border-sais-sand shadow-sais grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 items-center">
            <img
              src={soapImg}
              alt="Sabonetes terapêuticos artesanais prontos para presentear"
              loading="lazy"
              className="w-full aspect-square object-cover bg-white/60 rounded-2xl border border-sais-sand shadow-sais"
            />
            <div>
              <span className="font-sans text-xs tracking-[0.18em] uppercase text-sais-moss font-semibold">
                Kit afeto
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sais mt-2">
                Presenteie Quem Você Ama com Saúde e Afeto
              </h2>
              <p className="font-sans text-base text-sais/70 leading-relaxed mt-4">
                Embalagem ecológica para presentear ou kits corporativos de bem-estar. Um mimo que
                cuida da pele e devolve presença no banho — para amigos, família ou a equipe.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={giftUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-sais/30 text-sais hover:bg-sais/5 font-sans font-medium px-6 py-6 text-base rounded-full"
                  >
                    <Gift className="w-5 h-5 mr-2" />
                    Encomendar como presente
                  </Button>
                </a>
                <a href={kitUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-sais hover:bg-sais/90 text-sais-cream font-sans font-medium px-6 py-6 text-base rounded-full shadow-sais"
                  >
                    Kit Trio · R$ 89,90
                  </Button>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Seção 6 — Ficha técnica */}
      <section className="py-14 md:py-24" style={{ background: "var(--gradient-sais)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-cream/80">
              Transparência
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais-cream mt-3">
              Ficha Técnica
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {specs.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-sais-cream/10 border border-sais-cream/20 px-5 py-4 font-sans text-sm text-sais-cream/90 leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Seção 7 — CTA */}
      <section className="bg-sais-cream py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
            Leve para casa
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
            Transforme Seu Banho em um Momento de Cura Diária
          </h2>
          <p className="font-sans text-base md:text-lg text-sais/70 leading-relaxed mt-5 max-w-2xl mx-auto">
            Encomende agora seus Sabonetes Terapêuticos Artesanais com a terapeuta Juliana Corrêa e
            leve o cuidado da AlinhaMente para o seu chuveiro.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={orderUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-sais hover:bg-sais/90 text-sais-cream font-sans font-medium px-8 py-6 text-base rounded-full shadow-sais"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Encomendar Meus Sabonetes no WhatsApp
              </Button>
            </a>
            <Link to="/#produtos">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-sais/30 text-sais hover:bg-sais/5 font-sans font-medium px-8 py-6 text-base rounded-full"
              >
                Ver Outros Produtos da Botica Terapêutica
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <a
        href={orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Encomendar Sabonetes Terapêuticos pelo WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </main>
  );
};

export default SabonetesTerapeuticos;
