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
      "Fortalecimento do sistema imunológico",
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
    slug: "acupuntura",
    title: "Acupuntura",
    subtitle: "O equilíbrio do corpo pela sabedoria milenar",
    description:
      "A Acupuntura é uma das práticas mais antigas da Medicina Tradicional Chinesa (MTC), com mais de 3.000 anos de história. Consiste na inserção de agulhas finíssimas em pontos específicos do corpo (meridianos) para restabelecer o fluxo de energia vital (Qi). Reconhecida pela OMS, é eficaz no tratamento de diversas condições físicas e emocionais.",
    benefits: [
      "Alívio de dores agudas e crônicas",
      "Tratamento de enxaquecas e cefaleias",
      "Redução da ansiedade e insônia",
      "Melhora da digestão e do metabolismo",
      "Regulação hormonal",
      "Fortalecimento da imunidade",
    ],
    howItWorks:
      "Após uma avaliação detalhada (anamnese, pulsologia e observação da língua), a terapeuta seleciona os pontos de acupuntura adequados ao seu quadro. As agulhas são estéreis, descartáveis e muito finas — a inserção é praticamente indolor. Você relaxa por 20 a 30 minutos enquanto as agulhas atuam, reequilibrando o fluxo energético.",
    whoIsItFor:
      "Indicada para pessoas com dores musculares, problemas digestivos, insônia, ansiedade, estresse, alergias, desequilíbrios hormonais e como complemento a tratamentos médicos.",
    duration: "40 a 60 minutos",
  },
  {
    slug: "auriculoterapia",
    title: "Auriculoterapia",
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
  {
    slug: "aromaterapia",
    title: "Aromaterapia",
    subtitle: "O poder terapêutico dos óleos essenciais",
    description:
      "A Aromaterapia utiliza óleos essenciais extraídos de plantas, flores, raízes e sementes para promover o equilíbrio físico, mental e emocional. Os aromas atuam diretamente no sistema límbico (centro das emoções no cérebro), promovendo respostas terapêuticas poderosas e imediatas. É uma prática integrativa reconhecida pelo SUS.",
    benefits: [
      "Equilíbrio emocional e redução do estresse",
      "Melhora da concentração e memória",
      "Alívio de dores de cabeça e musculares",
      "Fortalecimento do sistema imunológico",
      "Melhora da qualidade do sono",
      "Propriedades antissépticas e anti-inflamatórias",
    ],
    howItWorks:
      "A terapeuta seleciona óleos essenciais personalizados para suas necessidades. Eles podem ser aplicados por inalação (difusores), massagem terapêutica com óleos diluídos, compressas ou banhos aromáticos. Cada óleo possui propriedades específicas — lavanda acalma, alecrim energiza, eucalipto libera as vias respiratórias.",
    whoIsItFor:
      "Para todos que buscam bem-estar natural. Especialmente indicada para pessoas com estresse, ansiedade, insônia, dores crônicas, problemas respiratórios ou que desejam elevar sua qualidade de vida.",
    duration: "40 a 60 minutos",
  },
  {
    slug: "terapias-xamanicas",
    title: "Terapias Xamânicas Personalizadas",
    subtitle: "Reconecte-se à sabedoria ancestral",
    description:
      "As Terapias Xamânicas são práticas ancestrais adaptadas às necessidades individuais de cada pessoa. Utilizando elementos da natureza — ervas, cristais, tambores, defumação e rituais sagrados —, esta abordagem reconecta você à sua essência, ao poder interior e à sabedoria universal. É um caminho de cura profunda que honra a conexão entre ser humano e natureza.",
    benefits: [
      "Reconexão com a essência e propósito de vida",
      "Limpeza e proteção energética",
      "Liberação de energias densas e padrões negativos",
      "Fortalecimento da intuição e autoconhecimento",
      "Cura de traumas profundos",
      "Equilíbrio entre o físico e o espiritual",
    ],
    howItWorks:
      "Cada sessão é única e personalizada. Pode incluir jornadas xamânicas com tambor, rituais de defumação com ervas sagradas, trabalho com cristais e pedras de poder, respirações e meditações guiadas. A terapeuta cria um espaço seguro e sagrado para que você possa acessar camadas profundas de cura e transformação.",
    whoIsItFor:
      "Para quem busca cura profunda, reconexão espiritual, limpeza energética ou sente que carrega bloqueios que outras terapias não alcançaram. Ideal para momentos de transição e busca por propósito.",
    duration: "60 a 90 minutos",
  },
];
