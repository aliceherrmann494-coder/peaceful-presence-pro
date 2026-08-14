import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { products, WHATSAPP_NUMBER, type TagTone } from "@/data/products";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const tagToneClasses: Record<TagTone, string> = {
  olive: "bg-sais-olive/15 text-sais-olive border border-sais-olive/25",
  gold: "bg-sais-gold/25 text-sais-moss border border-sais-gold/40",
  destaque: "bg-sais text-sais-cream border border-sais-olive/40 shadow-sm",
  neutro: "bg-white/85 text-sais-moss border border-sais-sand",
};

const ProductsSection = () => {
  const ref = useFadeIn();

  const kitWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá Juliana! Gostaria de montar um Kit de presente personalizado (ou corporativo) com os produtos da Botica AlinhaMente. Pode me ajudar?"
  )}`;

  return (
    <section id="produtos" className="py-20 md:py-28 px-6 md:px-16 bg-background">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-sans uppercase tracking-[0.2em] text-sais-olive mb-4">
            Vitrine de Autocuidado
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-5 leading-tight">
            Botica Terapêutica AlinhaMente 🌿✨
          </h2>
          <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed">
            Leve a experiência de relaxamento, alinhamento e cura do consultório
            diretamente para o seu ritual diário em casa.
          </p>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-stretch">
          {products.map((product) => {
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Olá Juliana! Tenho interesse em: ${product.name}. Pode me passar as opções e valores?`
            )}`;

            return (
              <article
                key={product.slug}
                className="group flex flex-col bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Imagem + tag */}
                <div className="relative aspect-square bg-muted/40 flex items-center justify-center p-6 sm:p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="eager"
                    decoding="async"
                    width={768}
                    height={768}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] md:text-xs font-sans font-medium ${tagToneClasses[product.tagTone]}`}
                  >
                    {product.tag}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {product.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm font-sans text-foreground/80"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-sais-olive"
                          strokeWidth={2.5}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {product.pageUrl ? (
                    <Link
                      to={product.pageUrl}
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full rounded-lg bg-sais-olive px-4 py-3 text-center font-sans text-sm font-medium text-white hover:bg-sais transition-colors duration-300 shadow-sm"
                    >
                      Ver Opções & Comprar
                    </Link>
                  ) : (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full rounded-lg bg-sais-olive px-4 py-3 text-center font-sans text-sm font-medium text-white hover:bg-sais transition-colors duration-300 shadow-sm"
                    >
                      Ver Opções & Comprar
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner inferior — Kit personalizado */}
        <div className="mt-10 md:mt-12 rounded-xl border border-sais-sand bg-sais-cream/60 px-6 md:px-10 py-7 md:py-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <p className="font-serif text-lg md:text-xl text-foreground">
            Quer montar um <strong className="text-sais">Kit de Presente Personalizado</strong> ou
            corporativo?
          </p>
          <a
            href={kitWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-sais-olive/40 bg-white px-5 py-3 font-sans text-sm font-medium text-sais hover:bg-sais-olive/10 transition-colors duration-300 shadow-sm whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-sais-olive" />
            Falar com a Juliana no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
