import type { LocalizedText } from './portfolioData';

export interface CaseMetric {
  id: string;
  label: LocalizedText;
  value: LocalizedText;
  source: 'reported' | 'calculated';
  note?: LocalizedText;
}

export interface CampaignRecord {
  id: string;
  name: LocalizedText;
  result: LocalizedText;
  costPerResult: LocalizedText;
  spend: LocalizedText;
}

export interface CampaignEvidence {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: LocalizedText;
  caption: LocalizedText;
  maskedRegion?: { left: number; top: number; width: number; height: number };
}

export interface CaseStudy {
  id: string;
  title: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  overview: LocalizedText;
  objectives: LocalizedText[];
  strategy: LocalizedText;
  execution: LocalizedText;
  featuredMetrics: CaseMetric[];
  campaignRows?: CampaignRecord[];
  results: LocalizedText;
  evidence?: CampaignEvidence[];
}

export const campaignBriefing: LocalizedText = {
  en: "Every campaign begins with understanding the business's needs, defining its primary objective, and identifying the most relevant way to reach potential customers.\n\nA clear briefing provides direction for campaign strategy, messaging, creative decisions, and performance evaluation. It helps ensure that advertising efforts align with business objectives rather than focusing solely on impressions or clicks.",
  pt: 'Toda campanha começa pela compreensão das necessidades do negócio, pela definição do objetivo principal e pela identificação da forma mais relevante de alcançar potenciais clientes.\n\nUm briefing claro orienta a estratégia, as mensagens, as decisões criativas e a avaliação de desempenho. Assim, os anúncios permanecem alinhados aos objetivos do negócio, sem se limitarem a impressões ou cliques.'
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'local-campaign-performance',
    title: { en: 'Local Campaign Performance', pt: 'Desempenho de campanhas locais' },
    category: { en: 'PAID MEDIA / LOCAL MARKETING', pt: 'MÍDIA PAGA / MARKETING LOCAL' },
    description: { en: 'A series of targeted event campaigns designed to increase local visibility, drive profile and page visits, and promote live entertainment experiences.', pt: 'Uma série de campanhas segmentadas para ampliar a visibilidade local, gerar visitas a perfis e páginas e promover eventos de entretenimento ao vivo.' },
    overview: { en: 'A series of local paid media campaigns promoting live entertainment events. Campaign objectives included increasing local awareness, driving profile and page visits, and attracting attention to specific event dates.', pt: 'Uma série de campanhas locais de mídia paga para promover eventos de entretenimento ao vivo. Os objetivos incluíram ampliar o reconhecimento local, gerar visitas a perfis e páginas e divulgar datas específicas.' },
    objectives: [
      { en: 'Increase visibility among relevant local audiences.', pt: 'Ampliar a visibilidade entre públicos locais relevantes.' },
      { en: 'Drive traffic to the business’s social profiles and pages.', pt: 'Levar tráfego aos perfis e às páginas sociais do negócio.' },
      { en: 'Promote individual events using campaign-specific messaging.', pt: 'Promover eventos específicos com mensagens próprias para cada campanha.' },
      { en: 'Monitor delivery efficiency across different campaign objectives.', pt: 'Acompanhar a eficiência de entrega entre diferentes objetivos de campanha.' }
    ],
    strategy: { en: 'Campaigns used different objectives, including traffic and awareness optimized for reach.', pt: 'As campanhas utilizaram diferentes objetivos, incluindo tráfego e reconhecimento otimizado para alcance.' },
    execution: { en: 'Multiple campaigns promoted individual events. Profile and page visits, cost per result, impressions, and reach were used to evaluate delivery.', pt: 'Múltiplas campanhas promoveram eventos individuais. Visitas a perfis e páginas, custo por resultado, impressões e alcance foram usados para avaliar a entrega.' },
    featuredMetrics: [
      { id: 'impressions', label: { en: 'Impressions', pt: 'Impressões' }, value: { en: '98,484', pt: '98.484' }, source: 'reported' },
      { id: 'reach', label: { en: 'Accounts Reached', pt: 'Contas alcançadas' }, value: { en: '42,480', pt: '42.480' }, source: 'reported' },
      { id: 'clicks', label: { en: 'Reported Total Clicks', pt: 'Cliques totais informados' }, value: { en: '3,775', pt: '3.775' }, source: 'reported' },
      { id: 'spend', label: { en: 'Reported Total Ad Spend', pt: 'Investimento total informado' }, value: { en: 'R$ 430.78', pt: 'R$ 430,78' }, source: 'reported' }
    ],
    campaignRows: [
      { id: 'event-oct-23', name: { en: 'Event promotion — Oct 23', pt: 'Divulgação de evento — 23 out.' }, result: { en: '472 profile/page visits', pt: '472 visitas a perfil/página' }, costPerResult: { en: 'R$ 0.11 per visit', pt: 'R$ 0,11 por visita' }, spend: { en: 'R$ 52.71', pt: 'R$ 52,71' } },
      { id: 'awareness-oct-14-21', name: { en: 'Event awareness — Oct 14–21', pt: 'Reconhecimento de evento — 14–21 out.' }, result: { en: '17,853 people reached', pt: '17.853 pessoas alcançadas' }, costPerResult: { en: 'R$ 1.88 per 1,000 reached', pt: 'R$ 1,88 por 1.000 alcançadas' }, spend: { en: 'R$ 33.56', pt: 'R$ 33,56' } },
      { id: 'event-oct-17', name: { en: 'Event promotion — Oct 17', pt: 'Divulgação de evento — 17 out.' }, result: { en: '664 profile/page visits', pt: '664 visitas a perfil/página' }, costPerResult: { en: 'R$ 0.13 per visit', pt: 'R$ 0,13 por visita' }, spend: { en: 'R$ 84.06', pt: 'R$ 84,06' } },
      { id: 'sixties-event', name: { en: '60s/70s/80s event', pt: 'Evento anos 60/70/80' }, result: { en: '772 profile/page visits', pt: '772 visitas a perfil/página' }, costPerResult: { en: 'R$ 0.11 per visit', pt: 'R$ 0,11 por visita' }, spend: { en: 'R$ 87.50', pt: 'R$ 87,50' } },
      { id: 'local-event-oct-9', name: { en: 'Local event promotion — Oct 9', pt: 'Divulgação de evento local — 9 out.' }, result: { en: '752 profile/page visits', pt: '752 visitas a perfil/página' }, costPerResult: { en: 'R$ 0.11 per visit', pt: 'R$ 0,11 por visita' }, spend: { en: 'R$ 85.67', pt: 'R$ 85,67' } },
      { id: 'samba-oct-3', name: { en: 'Samba event — Oct 3', pt: 'Evento de samba — 3 out.' }, result: { en: '881 profile/page visits', pt: '881 visitas a perfil/página' }, costPerResult: { en: 'R$ 0.14 per visit', pt: 'R$ 0,14 por visita' }, spend: { en: 'R$ 122.08', pt: 'R$ 122,08' } },
      { id: 'regional-music', name: { en: 'Regional music event', pt: 'Evento de música regional' }, result: { en: '72 profile/page visits', pt: '72 visitas a perfil/página' }, costPerResult: { en: 'R$ 0.10 per visit', pt: 'R$ 0,10 por visita' }, spend: { en: 'R$ 7.21', pt: 'R$ 7,21' } }
    ],
    results: { en: 'The supplied campaign records show profile and page visits acquired at reported costs between R$ 0.10 and R$ 0.14 per visit, alongside an awareness campaign that reached 17,853 accounts.', pt: 'Os registros fornecidos mostram visitas a perfis e páginas com custos informados entre R$ 0,10 e R$ 0,14 por visita, além de uma campanha de reconhecimento que alcançou 17.853 contas.' },
    evidence: [{ id: 'meta-ads-manager', url: '/images/portfolio/gerenciador-meta.png', width: 1041, height: 578, alt: { en: 'Meta Ads Manager screenshot in Portuguese showing seven campaign rows with reported results, cost, spend, impressions, and reach.', pt: 'Captura do Gerenciador de Anúncios da Meta em português, com sete campanhas e resultados, custos, gastos, impressões e alcance informados.' }, caption: { en: 'Source screenshot for the seven individual campaign records shown here. The aggregate metrics above are a separate reported dataset.', pt: 'Captura de origem dos sete registros individuais apresentados aqui. Os totais agregados acima pertencem a outro conjunto informado.' }, maskedRegion: { left: 14.2, top: 34, width: 9.3, height: 55 } }]
  },
  {
    id: 'conversations-to-sales',
    title: { en: 'From Conversations to Sales', pt: 'De conversas a vendas' },
    category: { en: 'PAID MEDIA / LEAD GENERATION', pt: 'MÍDIA PAGA / GERAÇÃO DE LEADS' },
    description: { en: 'A messaging campaign designed to generate direct customer conversations and support sales.', pt: 'Uma campanha de mensagens planejada para gerar conversas diretas com clientes e apoiar vendas.' },
    overview: { en: 'A paid messaging campaign designed to generate direct customer conversations and support a sales process.', pt: 'Uma campanha paga de mensagens planejada para gerar conversas diretas com clientes e apoiar um processo de vendas.' },
    objectives: [{ en: 'Generate customer inquiries through messaging and evaluate the reported conversion of conversations into sales.', pt: 'Gerar consultas de clientes por mensagens e avaliar a conversão informada de conversas em vendas.' }],
    strategy: { en: 'The campaign used a messaging objective to generate direct customer conversations.', pt: 'A campanha utilizou o objetivo de mensagens para gerar conversas diretas com clientes.' },
    execution: { en: 'The supplied figures include reported ad spend, conversations, ticket value, and an approximate conversion rate. No additional targeting or attribution details were provided.', pt: 'Os dados fornecidos incluem investimento informado, conversas, valor do ingresso e uma taxa de conversão aproximada. Não foram fornecidos detalhes adicionais de segmentação ou atribuição.' },
    featuredMetrics: [
      { id: 'spend', label: { en: 'Ad Spend', pt: 'Investimento em anúncios' }, value: { en: 'R$ 80.00', pt: 'R$ 80,00' }, source: 'reported' },
      { id: 'conversations', label: { en: 'Conversations Generated', pt: 'Conversas geradas' }, value: { en: '70', pt: '70' }, source: 'reported' },
      { id: 'cost-per-conversation', label: { en: 'Cost per Conversation', pt: 'Custo por conversa' }, value: { en: 'R$ 1.14', pt: 'R$ 1,14' }, source: 'calculated', note: { en: 'Calculated from R$ 80.00 ÷ 70 conversations.', pt: 'Calculado a partir de R$ 80,00 ÷ 70 conversas.' } },
      { id: 'ticket-value', label: { en: 'Ticket Value', pt: 'Valor do ingresso' }, value: { en: 'R$ 120.00', pt: 'R$ 120,00' }, source: 'reported' },
      { id: 'conversion-rate', label: { en: 'Reported Sales Conversion', pt: 'Conversão em vendas informada' }, value: { en: '≈ 60%', pt: '≈ 60%' }, source: 'reported', note: { en: 'Approximate rate; it is not converted into an exact sales count.', pt: 'Taxa aproximada; não foi convertida em uma quantidade exata de vendas.' } }
    ],
    results: { en: 'The campaign generated 70 conversations with R$ 80.00 in reported ad spend. The conversion rate is approximate and is not used to infer an exact number of sales or revenue.', pt: 'A campanha gerou 70 conversas com R$ 80,00 de investimento informado. A taxa de conversão é aproximada e não foi usada para inferir uma quantidade exata de vendas ou receita.' }
  },
  {
    id: 'direct-sales-performance',
    title: { en: 'Direct Sales Performance', pt: 'Desempenho de vendas diretas' },
    category: { en: 'PAID MEDIA / SALES PERFORMANCE', pt: 'MÍDIA PAGA / DESEMPENHO DE VENDAS' },
    description: { en: 'A messaging-led campaign focused on converting prospective customers into purchases.', pt: 'Uma campanha de mensagens focada em converter potenciais clientes em compras.' },
    overview: { en: 'A paid messaging campaign in which prospective customers initiated conversations and purchases were subsequently reported.', pt: 'Uma campanha paga de mensagens na qual potenciais clientes iniciaram conversas e, posteriormente, foram informadas compras.' },
    objectives: [{ en: 'Generate prospective customer conversations and support direct sales.', pt: 'Gerar conversas com potenciais clientes e apoiar vendas diretas.' }],
    strategy: { en: 'The campaign used a messaging-led approach to support direct sales.', pt: 'A campanha utilizou uma abordagem orientada a mensagens para apoiar vendas diretas.' },
    execution: { en: 'The supplied figures include ad spend, conversations initiated, reported sales, and ticket value. No attribution details were provided.', pt: 'Os dados fornecidos incluem investimento em anúncios, conversas iniciadas, vendas informadas e valor do ingresso. Não foram fornecidos detalhes de atribuição.' },
    featuredMetrics: [
      { id: 'spend', label: { en: 'Ad Spend', pt: 'Investimento em anúncios' }, value: { en: 'R$ 500.00', pt: 'R$ 500,00' }, source: 'reported' },
      { id: 'conversations', label: { en: 'Conversations Initiated', pt: 'Conversas iniciadas' }, value: { en: '18', pt: '18' }, source: 'reported' },
      { id: 'reported-sales', label: { en: 'Reported Sales', pt: 'Vendas informadas' }, value: { en: '12', pt: '12' }, source: 'reported' },
      { id: 'ticket-value', label: { en: 'Ticket Value', pt: 'Valor do ingresso' }, value: { en: 'R$ 299.00', pt: 'R$ 299,00' }, source: 'reported' },
      { id: 'cost-per-sale', label: { en: 'Cost per Reported Sale', pt: 'Custo por venda informada' }, value: { en: '≈ R$ 41.67', pt: '≈ R$ 41,67' }, source: 'calculated', note: { en: 'R$ 500.00 ÷ 12 reported sales.', pt: 'R$ 500,00 ÷ 12 vendas informadas.' } },
      { id: 'gross-revenue', label: { en: 'Gross Revenue', pt: 'Receita bruta' }, value: { en: 'R$ 3,588.00', pt: 'R$ 3.588,00' }, source: 'calculated', note: { en: 'Assumes all 12 reported purchases were made at R$ 299.00 each.', pt: 'Pressupõe que as 12 compras informadas foram feitas por R$ 299,00 cada.' } },
      { id: 'conversation-sale-rate', label: { en: 'Conversation-to-Sale Rate', pt: 'Taxa conversa-venda' }, value: { en: '≈ 66.7%', pt: '≈ 66,7%' }, source: 'calculated', note: { en: 'Assumes the 12 reported sales came from the 18 conversations.', pt: 'Pressupõe que as 12 vendas informadas vieram das 18 conversas.' } },
      { id: 'revenue-ad-spend', label: { en: 'Gross Revenue / Ad Spend', pt: 'Receita bruta / investimento' }, value: { en: '≈ 7.18×', pt: '≈ 7,18×' }, source: 'calculated', note: { en: 'Gross revenue-to-ad-spend ratio, not profit or attribution-based ROAS.', pt: 'Relação entre receita bruta e investimento, não lucro nem ROAS baseado em atribuição.' } }
    ],
    results: { en: 'Twelve reported sales at R$ 299.00 per sale correspond to R$ 3,588.00 in gross revenue, assuming every purchase was made at that ticket value. The derived revenue-to-ad-spend ratio is approximately 7.18×; it is not profit or a verified attribution-based ROAS.', pt: 'Doze vendas informadas a R$ 299,00 cada correspondem a R$ 3.588,00 em receita bruta, supondo que todas as compras ocorreram por esse valor. A relação calculada entre receita e investimento é de aproximadamente 7,18×; não representa lucro nem ROAS verificado por atribuição.' }
  }
];
