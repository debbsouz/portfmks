export type LocalizedText = { pt: string; en: string };

export interface CreativeAsset {
  url: string;
  thumbnail?: string;
  width: number;
  height: number;
  caption: LocalizedText;
  alt: LocalizedText;
}

export interface CreativeProject {
  id: string;
  name: string;
  category: LocalizedText;
  description: LocalizedText;
  coverImage: string | null;
  coverFit?: 'cover' | 'contain';
  isConceptual: boolean;
  /** Add up to twelve real creative assets and localized captions per project. */
  creatives: CreativeAsset[];
}

export interface CaseStudy {
  id: string;
  title: LocalizedText;
  client: string;
  industry: LocalizedText;
  context: LocalizedText;
  challenge: LocalizedText;
  objective: LocalizedText;
  strategy: LocalizedText;
  execution: LocalizedText;
  results: LocalizedText | null;
  isConceptual: boolean;
  visual?: CreativeAsset | null;
}

export interface PerformanceCampaign {
  id: string;
  client: string;
  objective: LocalizedText;
  summary: LocalizedText;
  period: { start: string; end: string } | null;
  currency: string | null;
  attribution: LocalizedText | null;
  metrics: { id: string; label: LocalizedText; value: number; displayValue?: string; definition: LocalizedText }[];
  charts: { id: string; title: LocalizedText; labels: string[]; values: number[]; unit?: string }[];
  screenshots: { url: string; alt: LocalizedText }[];
  caseStudyId?: string;
}

/** Add a report only when the figures, period, and attribution are verified. */
export const performanceCampaigns: PerformanceCampaign[] = [];

const houseBurgerCreativeDetails = [
  { number: 1, alt: { pt: 'Hambúrguer centralizado sobre fundo vermelho e preto, com composição gráfica da House Burger.', en: 'Burger centered on a red and black background with House Burger graphic lettering.' } },
  { number: 2, alt: { pt: 'Criativo vermelho e branco com hambúrguer e oferta de X-tudo.', en: 'Red and white creative featuring a burger and an X-tudo offer.' } },
  { number: 3, alt: { pt: 'Hambúrguer em cenário de Halloween com abóboras iluminadas.', en: 'Burger in a Halloween scene with glowing pumpkins.' } },
  { number: 4, alt: { pt: 'Composição escura com três hambúrgueres em diferentes opções.', en: 'Dark composition showing three burger options.' } },
  { number: 5, alt: { pt: 'Mulher segurando um hambúrguer em peça de delivery da House Burger.', en: 'Woman holding a burger in a House Burger delivery creative.' } },
  { number: 6, alt: { pt: 'Combo de hambúrgueres em composição vermelha e preta.', en: 'Burger combo in a red and black composition.' } },
  { number: 7, alt: { pt: 'Três hambúrgueres apresentados em uma peça de delivery.', en: 'Three burgers featured in a delivery creative.' } },
  { number: 8, alt: { pt: 'Mão segurando hambúrguer com batatas fritas em uma peça vertical.', en: 'Hand holding a burger beside fries in a vertical creative.' } },
  { number: 9, alt: { pt: 'Hambúrguer de picanha em fundo vermelho e preto.', en: 'Picanha burger against a red and black background.' } },
  { number: 10, alt: { pt: 'Hambúrguer em composição gráfica com referências visuais pixeladas.', en: 'Burger in a graphic composition with pixel-style details.' } },
  { number: 11, alt: { pt: 'Hambúrguer com queijo, refrigerante e oferta em destaque sobre fundo vermelho.', en: 'Cheeseburger and soda with a featured offer on a red background.' } },
  { number: 12, alt: { pt: 'Combo de hambúrguer e batatas em uma tábua de servir.', en: 'Burger and fries combo arranged on a serving board.' } }
];

const houseBurgerCreatives: CreativeAsset[] = houseBurgerCreativeDetails.map(({ number, alt }) => {
  const file = number <= 10 ? `burguer-house${number}` : `house-burguer${number}`;
  const caption = String(number).padStart(2, '0');
  return {
    url: `/images/house-burguer/${file}.png`,
    thumbnail: `/images/house-burguer/thumbnails/${file}.webp`,
    width: 1080,
    height: 1080,
    caption: { pt: caption, en: caption },
    alt
  };
});

function createProjectCreatives(
  folder: string,
  prefix: string,
  heights: number[],
  category: { pt: string; en: string }
): CreativeAsset[] {
  return heights.map((height, index) => {
    const number = index + 1;
    const label = String(number).padStart(2, '0');
    return {
      url: `/images/${folder}/${prefix}${number}.png`,
      thumbnail: `/images/${folder}/thumbnails/${prefix}${number}.webp`,
      width: 1080,
      height,
      caption: { pt: label, en: label },
      alt: {
        pt: `Peça criativa ${label} de ${category.pt}.`,
        en: `Creative ${label} for ${category.en}.`
      }
    };
  });
}

const atelierLumiereCreatives = createProjectCreatives(
  'atelier-lumiere',
  'atelier-lumiere',
  [1920, 1920, 1920, 1920, 1920, 1920, 1080, 1080, 1920, 1080, 1080, 1080],
  { pt: 'joias e acessórios Atelier Lumière', en: 'Atelier Lumière jewelry and accessories' }
);

const creditoRealCreatives = createProjectCreatives(
  'credito-real',
  'credito-real',
  [1080, 1080, 1080, 1920, 1080, 1350, 1080, 1080, 1080, 1080, 1080, 1920],
  { pt: 'comunicação imobiliária Crédito Real', en: 'Crédito Real real estate promotions' }
);

const bajajCreatives = createProjectCreatives(
  'bajaj-conc',
  'bajaj-conc',
  [1350, 1080, 1080, 1080, 1080, 1080, 1350, 1080, 1080, 1080, 1350, 1080],
  { pt: 'comunicação automotiva Bajaj', en: 'Bajaj automotive promotions' }
);

export const creativeProjects: CreativeProject[] = [
  {
    id: 'house-burger', name: 'House Burger',
    category: { pt: 'Gastronomia', en: 'Food & Beverage' },
    description: { pt: 'Projeto de marketing para um negócio local de alimentação.', en: 'Marketing project for a local food business.' },
    coverImage: '/images/house-burguer/thumbnails/burguer-house1.webp',
    coverFit: 'contain', isConceptual: false, creatives: houseBurgerCreatives
  },
  {
    id: 'atelier-lumiere', name: 'Atelier Lumière',
    category: { pt: 'Joias & Acessórios', en: 'Jewelry & Accessories' },
    description: { pt: 'Seleção de peças criativas para uma marca de joias e acessórios.', en: 'Selected creative assets for a jewelry and accessories brand.' },
    coverImage: '/images/atelier-lumiere/thumbnails/atelier-lumiere8.webp', coverFit: 'contain', isConceptual: true, creatives: atelierLumiereCreatives
  },
  {
    id: 'credito-real', name: 'Crédito Real',
    category: { pt: 'Mercado Imobiliário', en: 'Real Estate' },
    description: { pt: 'Seleção de peças de comunicação para imóveis e empreendimentos.', en: 'Selected promotional creatives for real estate and property listings.' },
    coverImage: '/images/credito-real/thumbnails/credito-real3.webp', coverFit: 'contain', isConceptual: false, creatives: creditoRealCreatives
  },
  {
    id: 'bajaj', name: 'Bajaj',
    category: { pt: 'Automotivo & Mobilidade', en: 'Automotive & Mobility' },
    description: { pt: 'Seleção de peças criativas para comunicação de veículos.', en: 'Selected creative assets for vehicle communications.' },
    coverImage: '/images/bajaj-conc/thumbnails/bajaj-conc4.webp', coverFit: 'contain', isConceptual: false, creatives: bajajCreatives
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'house-burger-growth',
    title: { pt: 'Posicionamento e tráfego local — House Burger', en: 'Positioning & local traffic — House Burger' },
    client: 'House Burger', industry: { pt: 'Alimentação & Gastronomia', en: 'Food & Gastronomy' },
    context: { pt: 'Projeto de marketing para um negócio local de alimentação.', en: 'Marketing project for a local food business.' },
    challenge: { pt: 'Organizar uma comunicação de marca adequada ao contexto local.', en: 'Develop brand communication suited to the local context.' },
    objective: { pt: 'Planejar campanhas e criativos para divulgar a marca e apoiar pedidos locais.', en: 'Plan campaigns and creative assets to promote the brand and support local orders.' },
    strategy: { pt: 'A proposta considera segmentação geográfica, mensagens por objetivo e testes de criativos.', en: 'The proposal considers geographic targeting, objective-led messaging, and creative testing.' },
    execution: { pt: 'Os detalhes de execução não foram incluídos nas informações disponíveis.', en: 'Execution details were not included in the available project information.' },
    results: null, isConceptual: false,
    visual: { ...houseBurgerCreatives[4], caption: { pt: 'Criativo 05', en: 'Creative 05' } }
  },
  {
    id: 'atelier-lumiere-brand',
    title: { pt: 'Direção de arte e curadoria digital — Atelier Lumière', en: 'Art direction & digital curation — Atelier Lumière' },
    client: 'Atelier Lumière', industry: { pt: 'Design & Interiores', en: 'Design & Interiors' },
    context: { pt: 'Estudo conceitual de comunicação para um estúdio de interiores.', en: 'Concept communication study for an interior design studio.' },
    challenge: { pt: 'Explorar uma apresentação digital coerente com o universo do design.', en: 'Explore a digital presence suited to the world of design.' },
    objective: { pt: 'Desenvolver uma direção visual e uma proposta de conteúdo.', en: 'Develop a visual direction and a content proposal.' },
    strategy: { pt: 'Proposta com paleta neutra, tipografia editorial e fotografia com luz natural.', en: 'A proposal using a neutral palette, editorial typography, and natural-light photography.' },
    execution: { pt: 'Estudo conceitual; peças finais ainda não foram incluídas.', en: 'Concept study; final assets have not been provided.' },
    results: null, isConceptual: true
  }
];
