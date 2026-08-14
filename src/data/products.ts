import productSoap from "@/assets/product-soap.jpg";
import productBathSalts from "@/assets/sais-de-banho.jpg";
import productIncense from "@/assets/product-incense.jpg";
import productSprays from "@/assets/sprays-duo-real.jpg";

export interface Product {
  name: string;
  description: string;
  slug: string;
  image: string;
  pageUrl?: string;
}

export const products: Product[] = [
  {
    name: "Sabonetes Terapêuticos",
    slug: "sabonetes-terapeuticos",
    description: "Sabonetes artesanais com ingredientes naturais, desenvolvidos para promover relaxamento e bem-estar durante o banho.",
    image: productSoap,
  },
  {
    name: "Sais de Banho",
    slug: "sais-de-banho",
    description: "Sais minerais selecionados para banhos de imersão que ajudam a aliviar tensões, purificar energias e restaurar o equilíbrio.",
    image: productBathSalts,
    pageUrl: "/produto/sais-de-banho",
  },
  {
    name: "Incensos",
    slug: "incensos",
    description: "Incensos naturais para harmonização de ambientes, meditação e práticas terapêuticas, com aromas que elevam a vibração do espaço.",
    image: productIncense,
  },
  {
    name: "Sprays Terapêuticos",
    slug: "sprays-terapeuticos",
    description: "Sprays aromatizadores e fitoenergéticos em frasco de vidro âmbar 100ml, nas versões Atenção/Foco e Equilíbrio, para alinhar emoções e harmonizar ambientes.",
    image: productSprays,
    pageUrl: "/produto/sprays-terapeuticos",
  },
];
