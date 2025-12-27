export interface Dictionary {
  common: {
    siteName: string;
    poleursus: string;
    pulse: string;
    privacy: string;
    terms: string;
    contact: string;
    home: string;
  };
  nav: {
    pulse: string;
    privacy: string;
    terms: string;
  };
  home: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    products: {
      title: string;
      pulse: {
        name: string;
        description: string;
        cta: string;
      };
    };
  };
  pulse: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
    problem: {
      title: string;
      content: string;
    };
    pillars: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    difference: {
      title: string;
      content: string;
    };
    audience: {
      title: string;
      forWho: string;
      notFor: string;
    };
    screenshots: {
      title: string;
      alt: string;
    };
    faq: {
      title: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    footer: {
      description: string;
      links: string;
      copyright: string;
    };
  };
  privacy: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    lastUpdated: string;
    content: string;
  };
  terms: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    lastUpdated: string;
    content: string;
  };
}
