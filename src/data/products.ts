import productSoap from "@/assets/product-soap.jpg";
import productBathSalts from "@/assets/sais-de-banho.jpg";
import productIncense from "@/assets/product-incense.jpg";
import productSprays from "@/assets/sprays-duo-real.jpg";

export type TagTone = "olive" | "gold" | "destaque" | "neutro";

export interface Product {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  tag: string;
  tagTone: TagTone;
  highlights: string[];
  pageUrl?: string;
}

export const products: Product[] = [
  {
    name: "Sabonetes Terapêuticos",
    slug: "sabonetes-terapeuticos",
    description:
      "Sabonetes artesanais com ingredientes naturais, desenvolvidos para promover relaxamento e bem-estar durante o banho.",
    shortDescription:
      "Limpeza suave e hidratação com óleos essenciais e extratos botânicos.",
    image: productSoap,
    tag: "100% Vegetal & Artesanal",
    tagTone: "olive",
    highlights: ["Alívio do estresse no banho", "Livre de sulfatos e parabenos"],
  },
  {
    name: "Sais de Banho & Escalda-Pés",
    slug: "sais-de-banho",
    description:
      "Sais minerais selecionados para banhos de imersão que ajudam a aliviar tensões, purificar energias e restaurar o equilíbrio.",
    shortDescription:
      "Sais minerais e ervas medicinais para desintoxicação e relaxamento.",
    image: productBathSalts,
    tag: "Alívio Muscular",
    tagTone: "gold",
    highlights: ["Estimula a circulação", "Reduz inchaço e ansiedade"],
    pageUrl: "/produto/sais-de-banho",
  },
  {
    name: "Sprays Terapêuticos (100ml)",
    slug: "sprays-terapeuticos",
    description:
      "Sprays aromatizadores e fitoenergéticos em frasco de vidro âmbar 100ml, nas versões Atenção/Foco e Equilíbrio, para alinhar emoções e harmonizar ambientes.",
    shortDescription:
      "Sinergia fitoenergética para alinhar emoções e blindar o ambiente.",
    image: productSprays,
    tag: "Mais Vendido",
    tagTone: "destaque",
    highlights: [
      "Foco mental e alívio do estresse",
      "Ação no Sistema Límbico",
    ],
    pageUrl: "/produto/sprays-terapeuticos",
  },
  {
    name: "Incensos Naturais",
    slug: "incensos",
    description:
      "Incensos naturais para harmonização de ambientes, meditação e práticas terapêuticas, com aromas que elevam a vibração do espaço.",
    shortDescription:
      "Aromas puros para meditação, elevação vibracional e harmonização da casa.",
    image: productIncense,
    tag: "Purificação Aural",
    tagTone: "neutro",
    highlights: [
      "100% resinas e ervas puras",
      "Sem carvão ou químicos nocivos",
    ],
  },
];

export const WHATSAPP_NUMBER = "554599891066";
