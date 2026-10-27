# Portfólio Profissional — Débora

Portfólio editorial de Marketing Digital, Mídia Paga e Estratégia, desenvolvido com **Astro** e **React** com suporte bilíngue (Português e Inglês).

---

## 📂 Estrutura de Imagens e Organização (`public/images/`)

A pasta `public/images/` gerencia todos os recursos visuais do projeto. O diretório está estruturado da seguinte forma:

```
public/
└── images/
    ├── profile/                # Retratos profissionais da Débora (.gitkeep)
    ├── creative-studio/        # Galerias de clientes e projetos criativos
    │   └── house-burger/       # Exemplo de pasta para o cliente House Burger
    ├── case-studies/           # Imagens e diagramas para os estudos de caso (.gitkeep)
    └── general/                # Ícones, favicon e ativos gerais (.gitkeep)
```

As pastas vazias contêm um arquivo `.gitkeep` para garantir que sejam rastreadas pelo Git.

---

## 🖼️ Onde Adicionar Cada Arquivo

1. **Foto Profissional (Retrato)**:
   - **Destino**: `public/images/profile/`
   - **Exemplo de nome sugerido**: `hero-portrait.webp` ou `creative-studio-portrait.webp`

2. **Criativos e Campanhas (Creative Studio)**:
   - **Destino**: `public/images/creative-studio/[nome-da-empresa]/`
   - **Exemplo**: `public/images/creative-studio/house-burger/cover.webp`, `ad-1.webp`

3. **Estudos de Caso (Case Studies)**:
   - **Destino**: `public/images/case-studies/`

4. **Imagens Gerais**:
   - **Destino**: `public/images/general/`

---

## 🔗 Como Referenciar Imagens nas Páginas Astro

No Astro, qualquer arquivo colocado dentro da pasta `public/` é servido diretamente a partir da raiz do site. Portanto, para referenciar uma imagem em componentes ou páginas, basta utilizar o caminho absoluto a partir de `/images/`:

```html
<!-- Exemplo em componente ou página Astro / React -->
<img src="/images/profile/hero-portrait.webp" alt="Retrato de Débora" />
```

Para as galerias do *Creative Studio*, os caminhos são mapeados centralmente em `src/data/portfolioData.ts`.

---

## 🚀 Como Executar o Projeto Localmente

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:4321` (Português) ou `http://localhost:4321/en/` (Inglês).

3. **Gerar o build de produção**:
   ```bash
   npm run build
   ```
   Os arquivos compilados estarão na pasta `dist/`.
