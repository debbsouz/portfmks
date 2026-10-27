import type { LocalizedText } from './portfolioData';

export interface PhotographyAsset {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: LocalizedText;
}

/** Supplied files in their original sequence; no client or event credits are implied. */
export const photographyAssets: PhotographyAsset[] = [
  { id: 'photography-01', src: '/images/photography/photography1.jpg', width: 960, height: 1200, alt: { en: 'Studio portrait of a woman holding a small flower against a dark background.', pt: 'Retrato de estúdio de uma mulher segurando uma pequena flor diante de um fundo escuro.' } },
  { id: 'photography-02', src: '/images/photography/photography2.jpg', width: 736, height: 1104, alt: { en: 'Man working at a laptop in an office setting.', pt: 'Homem trabalhando em um notebook em um ambiente de escritório.' } },
  { id: 'photography-03', src: '/images/photography/photography3.jpg', width: 1076, height: 1687, alt: { en: 'Monochrome close portrait of a person against a dark background.', pt: 'Retrato fechado em preto e branco de uma pessoa diante de um fundo escuro.' } },
  { id: 'photography-04', src: '/images/photography/photography4.jpg', width: 1200, height: 1600, alt: { en: 'Fashion portrait beside a clothing rack in a bright studio.', pt: 'Retrato de moda ao lado de um cabideiro em um estúdio claro.' } },
  { id: 'photography-05', src: '/images/photography/photography5.jpg', width: 736, height: 1104, alt: { en: 'Close detail of a newborn’s hand and sleeve.', pt: 'Detalhe próximo da mão e da manga de um recém-nascido.' } },
  { id: 'photography-06', src: '/images/photography/photography6.jpg', width: 728, height: 1200, alt: { en: 'Monochrome portrait of an adult holding a newborn.', pt: 'Retrato em preto e branco de uma pessoa adulta segurando um recém-nascido.' } },
  { id: 'photography-07', src: '/images/photography/photography7.jpg', width: 736, height: 1104, alt: { en: 'Parent holding a newborn close during a quiet moment.', pt: 'Pessoa adulta segurando um recém-nascido junto ao corpo em um momento tranquilo.' } },
  { id: 'photography-08', src: '/images/photography/photography8.jpg', width: 736, height: 981, alt: { en: 'Maternity portrait in a softly lit studio.', pt: 'Retrato de gestação em um estúdio com luz suave.' } },
  { id: 'photography-09', src: '/images/photography/photography9.jpg', width: 735, height: 1103, alt: { en: 'Monochrome maternity portrait of a couple.', pt: 'Retrato de gestação em preto e branco de um casal.' } },
  { id: 'photography-10', src: '/images/photography/photography10.jpg', width: 736, height: 981, alt: { en: 'Silhouette portrait of a couple in a studio.', pt: 'Retrato em silhueta de um casal em estúdio.' } },
  { id: 'photography-11', src: '/images/photography/photography11.jpg', width: 736, height: 1104, alt: { en: 'Couple seated outdoors with a dog in the evening light.', pt: 'Casal sentado ao ar livre com um cachorro sob a luz do fim do dia.' } },
  { id: 'photography-12', src: '/images/photography/photography12.jpg', width: 736, height: 1104, alt: { en: 'Pair of small shoes arranged on an open book.', pt: 'Par de sapatinhos disposto sobre um livro aberto.' } },
  { id: 'photography-13', src: '/images/photography/photography13.jpg', width: 800, height: 1200, alt: { en: 'Close maternity portrait with hands resting over the abdomen.', pt: 'Retrato fechado de gestação com as mãos apoiadas sobre o abdômen.' } },
  { id: 'photography-14', src: '/images/photography/photography14.jpg', width: 1080, height: 1281, alt: { en: 'Expectant couple seated outdoors among trees at sunset.', pt: 'Casal à espera de um bebê sentado ao ar livre entre árvores ao entardecer.' } },
  { id: 'photography-15', src: '/images/photography/photography15.jpg', width: 736, height: 981, alt: { en: 'Monochrome portrait of an expectant couple outdoors.', pt: 'Retrato em preto e branco de um casal à espera de um bebê ao ar livre.' } },
  { id: 'photography-16', src: '/images/photography/photography16.jpg', width: 736, height: 981, alt: { en: 'Close detail of hands resting on a pregnant abdomen.', pt: 'Detalhe próximo de mãos apoiadas sobre um abdômen gestante.' } },
  { id: 'photography-17', src: '/images/photography/photography17.jpg', width: 736, height: 981, alt: { en: 'Expectant family photographed outdoors in warm evening light.', pt: 'Família à espera de um bebê fotografada ao ar livre na luz quente do entardecer.' } },
  { id: 'photography-18', src: '/images/photography/photography18.jpg', width: 1080, height: 1350, alt: { en: 'Monochrome portrait of two women together.', pt: 'Retrato em preto e branco de duas mulheres juntas.' } },
  { id: 'photography-19', src: '/images/photography/photography19.jpg', width: 736, height: 1104, alt: { en: 'Wedding portrait of a couple standing in a doorway.', pt: 'Retrato de casamento de um casal em uma entrada.' } },
  { id: 'photography-20', src: '/images/photography/photography20.jpg', width: 735, height: 1103, alt: { en: 'Wedding portrait of a couple in a bright interior.', pt: 'Retrato de casamento de um casal em um ambiente iluminado.' } },
  { id: 'photography-21', src: '/images/photography/photography21.jpg', width: 736, height: 1104, alt: { en: 'Monochrome close portrait of a couple.', pt: 'Retrato fechado em preto e branco de um casal.' } },
  { id: 'photography-22', src: '/images/photography/photography22.jpg', width: 735, height: 1103, alt: { en: 'Close detail of two hands meeting outdoors.', pt: 'Detalhe próximo de duas mãos que se encontram ao ar livre.' } },
  { id: 'photography-23', src: '/images/photography/photography23.jpg', width: 736, height: 1104, alt: { en: 'Wedding portrait of a couple outdoors.', pt: 'Retrato de casamento de um casal ao ar livre.' } },
  { id: 'photography-24', src: '/images/photography/photography24.jpg', width: 736, height: 981, alt: { en: 'Wedding couple walking together outdoors.', pt: 'Casal de noivos caminhando junto ao ar livre.' } },
  { id: 'photography-25', src: '/images/photography/photography25.jpg', width: 736, height: 981, alt: { en: 'Wedding couple walking along a tree-lined path.', pt: 'Casal de noivos caminhando por um caminho arborizado.' } },
  { id: 'photography-26', src: '/images/photography/photography26.jpg', width: 736, height: 1104, alt: { en: 'Close bridal portrait in natural light.', pt: 'Retrato fechado de noiva em luz natural.' } },
  { id: 'photography-27', src: '/images/photography/photography27.jpg', width: 736, height: 920, alt: { en: 'Close wedding portrait of a couple beneath a veil.', pt: 'Retrato fechado de casamento de um casal sob um véu.' } },
  { id: 'photography-28', src: '/images/photography/photography28.jpg', width: 1200, height: 1500, alt: { en: 'Wedding couple seated at a decorated table.', pt: 'Casal de noivos sentado à mesa decorada.' } },
  { id: 'photography-29', src: '/images/photography/photography29.jpg', width: 736, height: 981, alt: { en: 'Monochrome studio portrait of a seated woman.', pt: 'Retrato de estúdio em preto e branco de uma mulher sentada.' } },
  { id: 'photography-30', src: '/images/photography/photography30.jpg', width: 735, height: 1008, alt: { en: 'Portrait of a woman in dramatic red light.', pt: 'Retrato de uma mulher sob luz vermelha dramática.' } },
  { id: 'photography-31', src: '/images/photography/photography31.jpg', width: 736, height: 1104, alt: { en: 'Studio fashion portrait of a seated woman.', pt: 'Retrato de moda em estúdio de uma mulher sentada.' } },
  { id: 'photography-32', src: '/images/photography/photography32.jpg', width: 736, height: 1104, alt: { en: 'Fashion portrait with sunglasses and a textured coat.', pt: 'Retrato de moda com óculos escuros e casaco texturizado.' } },
  { id: 'photography-33', src: '/images/photography/photography33.jpg', width: 736, height: 1104, alt: { en: 'Studio portrait of a woman in a leather jacket.', pt: 'Retrato de estúdio de uma mulher com jaqueta de couro.' } },
  { id: 'photography-34', src: '/images/photography/photography34.jpg', width: 736, height: 950, alt: { en: 'Monochrome seated portrait in a dark outfit.', pt: 'Retrato sentado em preto e branco com roupa escura.' } },
  { id: 'photography-35', src: '/images/photography/photography35.jpg', width: 736, height: 1104, alt: { en: 'Monochrome portrait of a woman seated against a dark background.', pt: 'Retrato em preto e branco de uma mulher sentada diante de um fundo escuro.' } },
  { id: 'photography-36', src: '/images/photography/photography36.jpg', width: 736, height: 1308, alt: { en: 'Monochrome portrait of a woman seated in a light shirt.', pt: 'Retrato em preto e branco de uma mulher sentada com camisa clara.' } }
];
