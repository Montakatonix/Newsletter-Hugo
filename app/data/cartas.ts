export interface Carta {
  slug: string;
  numero: number;
  titulo: string;
  subtitulo?: string;
  data: string;
  tempoLeitura: number;
  simbolo?: boolean;
  excerpt: string;
  conteudo: string;
  tags?: string[];
}

export const cartas: Carta[] = [
  {
    slug: "embriagados-da-nossa-propria-voz",
    numero: 1,
    titulo: "Embriagados da nossa prÃ³pria voz",
    subtitulo: "Sobre o vÃ­cio de ouvir apenas o que jÃ¡ pensamos",
    data: "2024-01-08",
    tempoLeitura: 7,
    simbolo: true,
    excerpt: "HÃ¡ um momento especÃ­fico em que a opiniÃ£o deixa de ser uma ferramenta e se torna um vÃ­cio.",
    conteudo: `<p>HÃ¡ um momento especÃ­fico em que a opiniÃ£o deixa de ser uma ferramenta e se torna um vÃ­cio.</p>`,
    tags: ["pensamento", "diÃ¡logo"],
  },
  {
    slug: "o-bombeiro-voluntario",
    numero: 2,
    titulo: "O Bombeiro VoluntÃ¡rio",
    subtitulo: "Sobre quem resolve crises que criou",
    data: "2024-01-15",
    tempoLeitura: 6,
    simbolo: false,
    excerpt: "Existe um perfil de pessoa que se torna indispensÃ¡vel pela sua capacidade de resolver problemas urgentes.",
    conteudo: `<p>Existe um perfil de pessoa que se torna indispensÃ¡vel pela sua capacidade de resolver problemas urgentes.</p>`,
    tags: ["padrÃµes", "comportamento"],
  },
  {
    slug: "oportunidade-revela",
    numero: 3,
    titulo: "Oportunidade Revela",
    subtitulo: "O que a escassez e a abundÃ¢ncia mostram de nÃ³s",
    data: "2024-01-22",
    tempoLeitura: 8,
    simbolo: true,
    excerpt: "A oportunidade nÃ£o transforma as pessoas. Revela-as.",
    conteudo: `<p>A oportunidade nÃ£o transforma as pessoas. Revela-as.</p>`,
    tags: ["carÃ¡cter", "poder"],
  },
  {
    slug: "o-que-esta-oculto",
    numero: 4,
    titulo: "O que estÃ¡ oculto",
    subtitulo: "Sobre as camadas que nÃ£o vemos nas decisÃµes alheias",
    data: "2024-01-29",
    tempoLeitura: 7,
    simbolo: true,
    excerpt: "Toda a decisÃ£o visÃ­vel tem uma estrutura invisÃ­vel por baixo.",
    conteudo: `<p>Toda a decisÃ£o visÃ­vel tem uma estrutura invisÃ­vel por baixo.</p>`,
    tags: ["decisÃ£o", "contexto"],
  },
  {
    slug: "os-meus-50-porcento",
    numero: 5,
    titulo: "Os meus 50%",
    subtitulo: "Sobre a responsabilidade que nos pertence em qualquer conflito",
    data: "2024-02-05",
    tempoLeitura: 6,
    simbolo: false,
    excerpt: "Em qualquer conflito, hÃ¡ pelo menos dois protagonistas.",
    conteudo: `<p>Em qualquer conflito, hÃ¡ pelo menos dois protagonistas.</p>`,
    tags: ["responsabilidade", "conflito"],
  },
  {
    slug: "problema-vs-inconveniencia",
    numero: 6,
    titulo: "Problema vs. InconveniÃªncia",
    subtitulo: "Sobre a distinÃ§Ã£o que muda tudo",
    data: "2024-02-12",
    tempoLeitura: 5,
    simbolo: false,
    excerpt: "A maioria das coisas que chamamos problemas sÃ£o inconveniÃªncias.",
    conteudo: `<p>A maioria das coisas que chamamos problemas sÃ£o inconveniÃªncias.</p>`,
    tags: ["clareza", "linguagem"],
  },
];

export function getCartaBySlug(slug: string): Carta | undefined {
  return cartas.find((c) => c.slug === slug);
}

export function getCartasAdjacentesBySlug(slug: string): {
  anterior: Carta | null;
  seguinte: Carta | null;
} {
  const index = cartas.findIndex((c) => c.slug === slug);
  return {
    anterior: index > 0 ? cartas[index - 1] : null,
    seguinte: index < cartas.length - 1 ? cartas[index + 1] : null,
  };
}

export function formatarData(data: string): string {
  const date = new Date(data);
  return date.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
