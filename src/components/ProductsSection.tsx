import { useFadeIn } from "@/hooks/useFadeIn";
import { products } from "@/data/products";

const ProductsSection = () => {
  const ref = useFadeIn();

  return (
    <section id="produtos" className="py-24 px-6 md:px-16 bg-background">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Produtos Terapêuticos
          </h2>
          <p className="text-muted-foreground font-sans max-w-3xl mx-auto">
            Produtos naturais selecionados para complementar seu processo de cura e bem-estar no dia a dia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const whatsappUrl = `https://wa.me/554599891066?text=${encodeURIComponent(
              `Olá! Gostaria de saber mais sobre o produto: ${product.name}`
            )}`;

            return (
              <div
                key={product.slug}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <ShoppingBag className="w-8 h-8 text-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed flex-1">
                  {product.description}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-accent font-sans text-sm font-medium"
                >
                  Saiba mais →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
