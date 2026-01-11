
export type Language = 'KO' | 'EN';

export interface Translation {
  nav: {
    home: string;
    vision: string;
    solution: string;
    system: string;
    business: string;
  };
  hero: {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
  };
  intro: {
    header: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  challenges: {
    title: string;
    items: string[];
  };
  solution: {
    title: string;
    subtitle: string;
    description: string;
    processTitle: string;
    processDesc: string;
  };
  business: {
    title: string;
    predictTitle: string;
    predictDesc: string;
    cycleTitle: string;
    cycleDesc: string;
  };
  footer: {
    rights: string;
    author: string;
  };
}
