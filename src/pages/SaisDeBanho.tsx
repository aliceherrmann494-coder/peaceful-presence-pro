import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
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
import saisImg from "@/assets/sais-de-banho.jpg";
import saisTextura from "@/assets/sais-textura.jpg";
import saisEscalda from "@/assets/sais-escalda-ps.jpg";
import saisKitPresente from "@/assets/sais-kit-presente.png";



const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const galleryImages = [
  {
    src: saisImg,
    alt: "Embalagem dos Sais de Banho Terapêuticos da AlinhaMente com sais minerais e flores secas",
  },
  {
    src: saisTextura,
    alt: "Textura dos sais terapêuticos com flores desidratadas de camomila e lavanda",
  },
  {
    src: saisEscalda,
    alt: "Escalda-pés com sais de banho dissolvendo em água morna em bacia de madeira",
  },
];

const benefits = [
  {
    title: "Alívio Muscular & Desintoxicação",
    text: "Os sais minerais — ricos em Magnésio e Sal Marinho — atuam por osmose no corpo, diminuindo a retenção de líquidos, relaxando as fibras musculares rígidas e aliviando dores e tensões acumuladas.",
  },
  {
    title: "Melhora da Circulação Sanguínea",
    text: "Combinados à água morna, os sais promovem a vasodilatação, estimulando o fluxo sanguíneo periférico e aliviando o cansaço extremo e o inchaço nas pernas e pés.",
  },
  {
    title: "Esfoliação & Renovação Cutânea",
    text: "A textura mineral realiza uma microesfoliação suave e natural, removendo impurezas e células mortas, deixando a pele macia, limpa e renovada.",
  },
  {
    title: "Bem-Estar & Ação Neuro-Aromática",
    text: "A evaporação dos óleos essenciais e das ervas (Camomila e Hortelã-Pimenta) viaja pelo sistema olfativo até o sistema límbico do cérebro, reduzindo o cortisol e induzindo ao sono profundo.",
  },
  {
    title: "Ação Antisséptica e Pura",
    text: "Formulação natural livre de sulfatos, parabenos ou fragrâncias sintéticas que irritam a pele — pura do ritual ao toque.",
  },
];

const useModes = [
  {
    tag: "Opção 1",
    title: "Ritual de Escalda-Pés",
    subtitle: "Alívio rápido das pernas e da mente",
    steps: [
      "Adicione de 2 a 3 colheres de sopa dos Sais em uma bacia com água morna (37°C a 38°C).",
      "Mergulhe os pés por 15 a 20 minutos.",
      "Ideal antes de dormir para combater a insônia e descarregar o cansaço do dia.",
      "Respire fundo, feche os olhos e sinta o alívio imediato no corpo todo.",
    ],
  },
  {
    tag: "Opção 2",
    title: "Imersão em Banheira",
    subtitle: "Experiência de SPA",
    steps: [
      "Adicione de 4 a 6 colheres de sopa dos Sais de Banho na banheira com água morna.",
      "Permaneça em imersão por 20 minutos.",
      "Permita a absorção dos minerais e o relaxamento muscular total.",
    ],
  },
];

const ingredients = [
  { name: "Sal Marinho Mineralizado", note: "Rico em micronutrientes que reponham minerais pela pele" },
  { name: "Bicarbonato de Sódio", note: "Equilibra o pH da pele e potencializa a desintoxicação" },
  { name: "Flores de Camomila Desidratadas", note: "Calmante natural de ação anti-inflamatória" },
  { name: "Ervas Aromáticas", note: "Hortelã-Pimenta e pétalas com ação tonificante e relaxante" },
  { name: "Óleos Essenciais Doterra Terapêuticos", note: "Puros, atuam no sistema límbico para reduzir o estresse" },
];

const SIZE_LABEL = "Embalagem 150g";
const PRICE = "R$ 29,90";

const parsePrice = (price: string) =>
  Number(price.replace(/[^\d,]/g, "").replace(",", "."));

const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const SaisDeBanho = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  const unitValue = parsePrice(PRICE);
  const totalValue = unitValue * qty;
  const totalPrice = formatPrice(totalValue);

  const buildUrl = (intro: string) =>
    `https://wa.me/554599891066?text=${encodeURIComponent(
      `${intro}\n\n• Tamanho: ${SIZE_LABEL}\n• Valor unitário: ${PRICE}\n• Quantidade: ${qty} ${
        qty > 1 ? "unidades" : "unidade"
      }\n• Total: ${totalPrice}`,
    )}`;

  const orderUrl = buildUrl("Olá! Gostaria de encomendar os Sais de Banho Terapêuticos.");
  const giftUrl = buildUrl(
    "Olá! Gostaria de encomendar os Sais de Banho Terapêuticos para presente.",
  );


  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Sais de Banho Terapêuticos & Escalda-Pés em Cascavel - PR | AlinhaMente";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Sais de Banho Terapêuticos e Escalda-Pés em Cascavel - PR: sal marinho mineralizado com camomila e lavanda para relaxar, descarregar tensões e purificar energias. Encomende pelo WhatsApp.",
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-sais-cream animate-fade-in overflow-x-hidden">
      {/* Seção 1 — Hero / Destaque do produto */}
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
              <div className="rounded-2xl overflow-hidden border border-sais-sand shadow-sais">
                <img
                  src={galleryImages[activeImg].src}
                  alt={galleryImages[activeImg].alt}
                  width={1024}
                  height={1024}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full aspect-square object-contain bg-white/60"
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
                      className="w-full aspect-square object-contain bg-white/60"
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
                Sais de Banho & Escalda-Pés: A Ciência do Relaxamento e da Recuperação Corporal
              </h1>
              <p className="font-sans text-base md:text-lg text-sais/70 leading-relaxed mt-4">
                Alívio muscular, estímulo à circulação e renovação da pele através da sinergia entre
                fitoervas, minerais puros e aromaterapia.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-sais-olive/10 px-4 py-2 text-sm font-sans text-sais-moss font-medium">
                  <Leaf className="w-4 h-4" /> 100% natural
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-sais-gold/15 px-4 py-2 text-sm font-sans text-sais font-medium">
                  <ShieldCheck className="w-4 h-4" /> Artesanal
                </span>
              </div>

              <div className="mt-7 p-5 md:p-6 rounded-2xl bg-white/60 border border-sais-sand shadow-sais">
                <p className="font-sans text-sm text-sais/60 mb-1">Valor de investimento</p>
                <p className="font-serif text-2xl md:text-3xl font-semibold text-sais">
                  {totalPrice}{" "}
                  <span className="text-base font-sans font-normal text-sais/60">· {SIZE_LABEL}</span>
                </p>
                <p className="font-sans text-sm text-sais/60 mt-1">
                  Encomenda personalizada com a terapeuta Juliana Corrêa.
                </p>

                {/* Quantidade */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-sans text-sm font-medium text-sais">Quantidade</p>
                    {qty > 1 && (
                      <p className="font-sans text-xs text-sais/60 mt-1" aria-live="polite">
                        {PRICE} × {qty} = {totalPrice}
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
                    Encomendar {SIZE_LABEL} pelo WhatsApp
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

      {/* Seção 2 — Benefícios terapêuticos */}
      <section className="bg-sais-sand/50 py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              Por que usar
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Como Este Produto Atua No Seu Corpo? (Benefícios Comprovados)
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ title, text }) => (
              <article
                key={title}
                className="bg-sais-cream rounded-2xl p-6 border border-sais-sand shadow-sais transition-shadow duration-300"
              >
                <h3 className="font-serif text-lg font-semibold text-sais mb-2">{title}</h3>
                <p className="font-sans text-sm text-sais/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3 — Modos de uso */}
      <section className="bg-sais-cream py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
              Passo a passo
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
              Como Utilizar o Seu Produto Terapêutico?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {useModes.map((mode) => (
              <article
                key={mode.title}
                className="bg-white/60 rounded-2xl p-6 md:p-7 border border-sais-sand shadow-sais flex flex-col"
              >
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-sais-gold font-semibold">
                  {mode.tag}
                </span>
                <h3 className="font-serif text-xl font-semibold text-sais mt-2">{mode.title}</h3>
                <p className="font-sans text-sm text-sais/60 mb-5">{mode.subtitle}</p>
                <ol className="space-y-3">
                  {mode.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 font-sans text-sm text-sais/75 leading-relaxed">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-sais text-sais-cream font-serif text-sm font-semibold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Composição transparente */}
      <section className="py-14 md:py-24" style={{ background: "var(--gradient-sais)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-cream/80">
              Transparência
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais-cream mt-3">
              Ingredientes Selecionados
            </h2>
          </div>
          <p className="font-sans text-base md:text-lg text-sais-cream/85 leading-relaxed text-center max-w-2xl mx-auto">
            Mistura artesanal livre de sulfatos, parabenos ou fragrâncias sintéticas — cada ingrediente
            é escolhido pela sua ação fisiológica real sobre a pele, a circulação e o sistema nervoso.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {ingredients.map((ing) => (
              <article
                key={ing.name}
                className="rounded-2xl bg-sais-cream/10 border border-sais-cream/20 px-5 py-4"
              >
                <p className="font-sans text-sm font-semibold text-sais-cream">{ing.name}</p>
                <p className="font-sans text-xs text-sais-cream/75 leading-relaxed mt-0.5">
                  {ing.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 — Sugestão de presente */}
      <section className="bg-sais-sand/50 py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <article className="bg-sais-cream rounded-2xl p-8 md:p-12 border border-sais-sand shadow-sais grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 items-center">
            <img
              src={saisKitPresente}
              alt="Kit de presente com sais de banho terapêuticos, caixa de madeira personalizada e óleos essenciais"
              loading="lazy"
              className="w-full aspect-square object-cover bg-white/60 rounded-2xl border border-sais-sand shadow-sais"
            />

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sais">
                Presenteie com Afeto & Autocuidado
              </h2>
              <p className="font-sans text-base text-sais/70 leading-relaxed mt-4">
                Os Sais de Banho Terapêuticos são uma opção perfeita de mimo para amigos, familiares
                ou lembrança corporativa de bem-estar. Um presente que cuida, relaxa e demonstra
                carinho de forma genuína.
              </p>
              <a href={giftUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-sais/30 text-sais hover:bg-sais/5 font-sans font-medium px-8 py-6 text-base rounded-full"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Encomendar como presente
                </Button>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Seção 6 — CTA / Compra direta */}
      <section className="bg-sais-cream py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <span className="font-sans text-xs tracking-[0.22em] uppercase text-sais-moss">
            Leve para casa
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-sais mt-3">
            Leve a Ciência e o Cuidado da AlinhaMente Para a Sua Casa
          </h2>
          <p className="font-sans text-base md:text-lg text-sais/70 leading-relaxed mt-5 max-w-2xl mx-auto">
            Encomende agora seus Sais de Banho Terapêuticos & Escalda-Pés diretamente com a
            terapeuta Juliana Corrêa e transforme o seu banho em um verdadeiro ritual de autocuidado.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={orderUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-sais hover:bg-sais/90 text-sais-cream font-sans font-medium px-8 py-6 text-base rounded-full shadow-sais"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Encomendar no WhatsApp
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
        aria-label="Encomendar Sais de Banho pelo WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </main>
  );
};

export default SaisDeBanho;
