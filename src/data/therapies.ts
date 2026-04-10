export interface TherapyData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  howItWorks: string;
  whoIsItFor: string;
  duration: string;
}

export const therapies: TherapyData[] = [
  {
    slug: "reiki",
    title: "Reiki",
    subtitle: "Energia vital que restaura o equilíbrio",
    description:
      "O Reiki é uma terapia energética de origem japonesa que utiliza a imposição das mãos para canalizar a energia universal (Ki) ao corpo do paciente. Essa energia atua nos campos físico, mental, emocional e espiritual, dissolvendo bloqueios e restabelecendo o fluxo natural de vitalidade. É uma prática suave, não invasiva, que promove profundo relaxamento e ativa os mecanismos naturais de autocura do organismo.",
    benefits: [
      "Redução do estresse e da ansiedade",
      "Alívio de dores crônicas e tensões musculares",
      "Melhora da qualidade do sono",
      "Equilíbrio emocional e clareza mental",
      "Aceleração de processos de recuperação",
    ],
    howItWorks:
      "Durante a sessão, você permanece deitado(a) confortavelmente, com roupas leves. A terapeuta posiciona as mãos em pontos específicos do corpo (chakras), canalizando energia vital. Sensações de calor, formigamento ou profundo relaxamento são comuns. Cada sessão é única e adaptada às suas necessidades.",
    whoIsItFor:
      "Indicado para qualquer pessoa que busque equilíbrio energético, alívio do estresse, recuperação emocional ou complemento a tratamentos médicos convencionais.",
    duration: "50 a 60 minutos",
  },
  {
    slug: "barras-de-access",
    title: "Barras de Access Consciousness",
    subtitle: "Liberte crenças que limitam sua vida",
    description:
      "As Barras de Access são 32 pontos na cabeça que, quando tocados suavemente, liberam a carga eletromagnética de pensamentos, sentimentos, emoções, crenças e padrões limitantes acumulados ao longo da vida. É como deletar arquivos antigos de um computador, criando espaço para novas possibilidades e uma vida mais leve e consciente.",
    benefits: [
      "Liberação de crenças e padrões limitantes",
      "Redução significativa do estresse e ansiedade",
      "Melhora do sono e descanso profundo",
      "Maior clareza mental e foco",
      "Dissolução de travas emocionais",
      "Expansão da consciência e criatividade",
    ],
    howItWorks:
      "Você deita confortavelmente enquanto a terapeuta toca suavemente os 32 pontos na sua cabeça. Cada ponto corresponde a diferentes áreas da vida — dinheiro, controle, criatividade, envelhecimento, entre outras. O toque libera a energia estagnada, promovendo uma sensação de paz profunda. Muitos adormecem durante a sessão.",
    whoIsItFor:
      "Ideal para quem sente a mente sobrecarregada, vive em piloto automático, tem dificuldade de tomar decisões ou deseja abrir espaço para mudanças positivas na vida.",
    duration: "60 a 90 minutos",
  },
  {
    slug: "autoconstelacao-sistemica",
    title: "Autoconstelação Sistêmica",
    subtitle: "Desvende as dinâmicas invisíveis da sua história",
    description:
      "A Autoconstelação Sistêmica é uma ferramenta terapêutica poderosa que permite acessar dinâmicas familiares ocultas que influenciam sua vida — muitas vezes sem que você perceba. Baseada nos princípios de Bert Hellinger, ela revela emaranhamentos, lealdades invisíveis e padrões repetitivos herdados do sistema familiar, possibilitando a reconciliação, o perdão e o livre fluxo do amor.",
    benefits: [
      "Compreensão de padrões familiares repetitivos",
      "Libertação de lealdades inconscientes",
      "Reconciliação com a história familiar",
      "Desbloqueio de áreas estagnadas da vida",
      "Fortalecimento dos vínculos afetivos",
      "Maior leveza e liberdade emocional",
    ],
    howItWorks:
      "Em sessão individual, utilizamos recursos como bonecos, âncoras de chão ou visualizações para representar membros do sistema familiar. A constelação revela dinâmicas ocultas e, através de frases e movimentos de alma, promove o reequilíbrio do sistema. É um processo profundo de cura intergeracional.",
    whoIsItFor:
      "Recomendada para quem percebe padrões que se repetem na família (doenças, separações, conflitos financeiros), dificuldades em relacionamentos ou sensação de carregar um peso que não é seu.",
    duration: "60 a 90 minutos",
  },
  {
    slug: "auriculoterapia",
    title: "Acupuntura Auricular",
    subtitle: "Cura através dos microsistemas da orelha",
    description:
      "A Auriculoterapia é uma técnica que estimula pontos específicos no pavilhão auricular (orelha), os quais refletem todo o corpo humano em formato de um feto invertido. Ao estimular esses pontos com sementes de mostarda, agulhas semipermanentes ou esferas metálicas, é possível tratar disfunções físicas e emocionais de forma natural, segura e eficaz.",
    benefits: [
      "Controle da dor e inflamação",
      "Auxílio no tratamento da ansiedade e depressão",
      "Apoio na perda de peso e compulsão alimentar",
      "Melhora do sono",
      "Redução de vícios (tabagismo, entre outros)",
      "Tratamento de alergias e sinusite",
    ],
    howItWorks:
      "Após a avaliação, a terapeuta identifica os pontos auriculares correspondentes às suas queixas. Pequenas sementes ou esferas são fixadas com micropore em pontos da orelha. Você pode estimulá-los ao longo da semana pressionando levemente. Os pontos permanecem por 5 a 7 dias, potencializando o efeito terapêutico.",
    whoIsItFor:
      "Excelente para quem busca uma terapia prática, contínua e complementar. Muito procurada por pessoas com dores, ansiedade, insônia, compulsões e desequilíbrios emocionais.",
    duration: "30 a 40 minutos",
  },
];
