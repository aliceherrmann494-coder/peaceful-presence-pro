import productSoap from "@/assets/product-soap.jpg";
import productBathSalts from "@/assets/sais-de-banho.jpg";
import productIncense from "@/assets/product-incense.jpg";
import productSprays from "@/assets/sprays-trio.png";

export type TagTone = "olive" | "gold" | "destaque" | "neutro";

export interface Product {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  imageFit?: "contain" | "cover";
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
    pageUrl: "/produto/sabonetes-terapeuticos",
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
    name: "Sprays Terapêuticos (60ml)",
    slug: "sprays-terapeuticos",
    description:
      "Sprays aromatizadores e fitoenergéticos em frasco de vidro âmbar 60ml, nas versões Harmonia, Atenção/Foco e Equilíbrio, para alinhar emoções, clarear a mente e harmonizar ambientes.",
    shortDescription:
      "Harmonia, Foco e Equilíbrio: sinergia fitoenergética para o ritual diário.",
    image: productSprays,
    imageFit: "cover",
    tag: "Mais Vendido",
    tagTone: "destaque",
    highlights: [
      "Harmonia, Foco e Equilíbrio",
      "Ação no Sistema Límbico",
    ],
    pageUrl: "/produto/sprays-terapeuticos",
  },
];

export const WHATSAPP_NUMBER = "554599891066";
