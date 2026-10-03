// Home page copy, verbatim from the live site (desktop, pt-BR).

export type IconName =
  | "rocket"
  | "handshake"
  | "bolt"
  | "award"
  | "window"
  | "bag"
  | "pen"
  | "sparkles"
  | "route"
  | "cloud";

export const hero = {
  // Lines are kept so the desktop break "Ideias Em / Produtos / Reais." is preserved.
  title: [
    { text: "Ideias Em", accent: false },
    { text: "Produtos", accent: true },
    { text: "Reais.", accent: true },
  ],
  lead: "Sites, aplicações web, assistentes com IA e automações, projetados e desenvolvidos de ponta a ponta por um dev com mais de 13 anos de experiência.",
};

/** Hero marquee, in the live order. Files live in /src/icons/tech. */
export const techMarks = [
  "javascript",
  "css3",
  "html5",
  "typescript",
  "react",
  "php",
  "wordpress",
  "laravel",
  "vercel",
  "git",
  "nextjs",
  "tailwindcss",
  "sass",
  "github",
  "unidentified-caped-figure",
  "threejs",
  "framer",
  "inkscape",
  "figma",
  "postgresql",
  "ionic",
  "nodejs",
  "supabase",
  "unidentified-drop",
  "cloudflare",
  "aws",
] as const;

export const values = {
  eyebrow: "Por Que Trabalhar Comigo",
  title: { text: "Feito para Funcionar.", accent: "Feito para Durar." },
  items: [
    {
      icon: "rocket" as IconName,
      title: "Lance com Confiança",
      body: "Entregue um produto testado, seguro e pronto para usuários reais.",
      side: "left" as const,
    },
    {
      icon: "handshake" as IconName,
      title: "Um Único Contato",
      body: "Design, código, IA e infraestrutura com a mesma pessoa.",
      side: "left" as const,
    },
    {
      icon: "bolt" as IconName,
      title: "Ganhe Velocidade:",
      body: "Automações e IA eliminam o trabalho manual que atrasa sua equipe.",
      side: "right" as const,
    },
    {
      icon: "award" as IconName,
      title: "Experiência Comprovada",
      body: "Mais de 13 anos criando para startups e grandes marcas.",
      side: "right" as const,
    },
  ],
};

export const services = {
  eyebrow: "O que eu Crio",
  title: { text: "Tudo que seu Produto Precisa.", accent: "Feito do jeito Certo." },
  items: [
    { icon: "window" as IconName, title: "Aplicações Web", body: "Apps full-stack com React, Next.js e APIs sólidas." },
    { icon: "bag" as IconName, title: "Sites & E-commerce", body: "Sites e lojas feitos para performar e vender." },
    { icon: "pen" as IconName, title: "UI/UX", body: "Interfaces que as pessoas entendem de primeira." },
    { icon: "sparkles" as IconName, title: "Assistentes com IA & RAG", body: "Chatbots que respondem com base nos seus documentos e dados." },
    { icon: "route" as IconName, title: "Automação de Processos", body: "Fluxos no n8n que conectam suas ferramentas e reduzem o trabalho manual." },
    { icon: "cloud" as IconName, title: "Deploy & Suporte", body: "Hospedagem, segurança e cuidado muito depois do lançamento." },
  ],
};

export const journey = {
  // The live site shows no visible heading for this section; this one is for screen readers.
  srTitle: "Jornada do projeto",
  steps: [
    { title: "Faísca", body: "Transformamos sua ideia em plano, escopo e orçamento claros." },
    { title: "Forma", body: "Desenhamos a experiência antes da primeira linha de código." },
    { title: "Construção", body: "Desenvolvemos o produto, as integrações e as automações." },
    { title: "Test Drive", body: "Refinamos cada detalhe com o seu feedback real." },
    { title: "No Ar", body: "Lançamento seguro, configurado e pronto para crescer." },
  ],
};

export const clients = {
  eyebrow: "Empresas que confiaram no meu trabalho",
  logos: [
    { name: "Bradesco", file: "bradesco" },
    { name: "CAIXA", file: "caixa" },
    { name: "Cargill", file: "cargill" },
    { name: "Santander", file: "santander" },
    { name: "Xiaomi", file: "xiaomi" },
  ],
};

export const selectedWork = {
  eyebrow: "Trabalhos Selecionados",
  title: { text: "Projetos que", accent: "Movem" },
  cta: { label: "Todos os Projetos", href: "/cases" },
};

export const testimonialsSection = {
  title: { text: "Aprovado Por", accent: "Clientes." },
};

export const faq = {
  eyebrow: "Perguntas Frequentes",
  title: { text: "Perguntas", accent: "& Respostas." },
  items: [
    {
      q: "Que tipo de projeto você atende?",
      a: "Sites, e-commerce, aplicações web full-stack, assistentes com IA e RAG, e automações com n8n. Se roda na web, provavelmente dá para construir.",
    },
    {
      q: "Como um projeto começa?",
      a: "Com uma conversa rápida para entender seus objetivos. Depois, você recebe escopo, prazo e orçamento claros antes de qualquer trabalho começar.",
    },
    {
      q: "Quanto tempo leva um projeto?",
      a: "Depende do escopo. Uma landing page pode levar dias; uma aplicação sob medida, semanas. Você recebe um prazo realista desde o início, com atualizações frequentes.",
    },
    {
      q: "Você trabalha com meu site ou sistema atual?",
      a: "Sim. Posso melhorar, migrar ou integrar com o que você já tem, seja WordPress, WooCommerce, um app próprio ou suas ferramentas atuais",
    },
    {
      q: "O que acontece depois do lançamento?",
      a: "Cuido do deploy, domínio e SSL, e ofereço suporte contínuo para atualizações, correções e novas funcionalidades sempre que precisar.",
    },
    {
      q: "IA e automação podem mesmo ajudar meu negócio?",
      a: "Se sua equipe repete as mesmas tarefas, responde as mesmas perguntas ou move dados entre ferramentas, sim. Começamos identificando onde isso economiza tempo de verdade.",
    },
  ],
};

export const cta = {
  eyebrow: "Próximo passo",
  // Line breaks as on the live desktop layout. "ORBITA" has no accent on the live site.
  title: ["Tem uma ideia?", "Vamos colocar", "em orbita."],
  button: "Iniciar Projeto",
  mailLead: "ou escreva para",
};

export const footer = {
  eyebrow: "Pronto para começar?",
  lead: ["Vamos construir, lançar", "e manter em movimento."],
  copyright: "© Webcraftz. Todos os direitos reservados.",
  reach: "Brasil — Atendendo clientes no mundo todo",
};

export const loader = { caption: "Preparando a órbita" };
