// Shared site data: navigation, contact and footer.

export const site = {
  name: "Webcraftz",
  url: "https://www.webcraftz.com.br",
  title: "Webcraftz — da faísca para a órbita.",
  description:
    "Para fundadores e empresas que precisam de mais do que um site. Aplicações web, assistentes de IA e automações, entregues por meio de um processo claro, da primeira ideia ao lançamento e além.",
  email: "contact@webcraftz.com.br",
  /** "Iniciar projeto" destination until Diego provides a form or booking link. */
  startProjectHref: "mailto:contact@webcraftz.com.br?subject=Novo%20projeto",
  location: ["Rio Grande do Sul,", "Brasil"],
  timeZone: "America/Sao_Paulo",
};

export const nav = [
  { label: "Sobre", href: "/#why-us-showup-trigger" },
  { label: "Cases", href: "/cases" },
  { label: "Serviços", href: "/#features-content-showup-trigger" },
  { label: "Jornada", href: "/#journey-content" },
  { label: "FAQ", href: "/#faq-section" },
];

export const contactNav = { label: "Contato", href: "/#cta-section" };

export const sitemap = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/cases" },
  { label: "Contato", href: "/#cta-section" },
];

// The live site links LinkedIn to https://linkedin.com and Workana to https://behance.net,
// which are placeholders. Until Diego supplies the real profile URLs these point at the
// services' home pages; replace `href` when known.
export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", needsReview: true },
  { label: "Workana", href: "https://www.workana.com/", needsReview: true },
];
