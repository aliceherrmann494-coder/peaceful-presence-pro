import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { products, WHATSAPP_NUMBER, type TagTone } from "@/data/products";
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
