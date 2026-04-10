

## Seção de Produtos — Sabonetes, Sais de Banho e Incenso

### O que será feito

Criar uma nova seção na página principal para exibir produtos terapêuticos (sabonetes, sais de banho, incenso). Cada produto terá imagem, nome, descrição curta e um botão "Saiba mais" que direciona para o WhatsApp da Juliana com uma mensagem pré-preenchida sobre o produto.

### Estrutura

1. **Criar `src/data/products.ts`** — arquivo de dados com os produtos (nome, descrição, imagem placeholder, slug para a mensagem do WhatsApp). Produtos iniciais:
   - Sabonetes terapêuticos
   - Sais de banho
   - Incensos

2. **Criar `src/components/ProductsSection.tsx`** — seção com grid de cards similar ao estilo das especialidades. Cada card terá:
   - Imagem do produto (placeholder inicial)
   - Nome e descrição
   - Botão "Saiba mais →" que abre `https://wa.me/554599891066?text=Olá! Gostaria de saber mais sobre o produto: [nome do produto]`

3. **Atualizar `src/pages/Index.tsx`** — inserir a seção de produtos entre as seções existentes (após Especialidades e antes de Depoimentos).

### Detalhes técnicos

- Link do WhatsApp: `https://wa.me/554599891066` com query `text` encodada via `encodeURIComponent`
- Cards abrem link em nova aba (`target="_blank"`)
- Animação fade-in reutilizando o hook `useFadeIn` existente
- Layout responsivo: 1 coluna mobile, 2 colunas tablet, 3 colunas desktop
- Estilo visual consistente com a seção de especialidades

