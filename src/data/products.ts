export interface Product {
  name: string;
  description: string;
  slug: string;
}

export const products: Product[] = [
  {
    name: "Sabonetes Terapêuticos",
    slug: "sabonetes-terapeuticos",
    description: "Sabonetes artesanais com ingredientes naturais, desenvolvidos para promover relaxamento e bem-estar durante o banho.",
  },
  {
    name: "Sais de Banho",
    slug: "sais-de-banho",
    description: "Sais minerais selecionados para banhos de imersão que ajudam a aliviar tensões, purificar energias e restaurar o equilíbrio.",
  },
  {
    name: "Incensos",
    slug: "incensos",
    description: "Incensos naturais para harmonização de ambientes, meditação e práticas terapêuticas, com aromas que elevam a vibração do espaço.",
  },
];
