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
    titulo: "Embriagados da nossa própria voz",
    subtitulo: "Sobre o vício de ouvir apenas o que já pensamos",
    data: "2024-01-08",
    tempoLeitura: 7,
    simbolo: true,
    excerpt: "Há um momento específico em que a opinião deixa de ser uma ferramenta e se torna um vício. Não é quando começamos a defender o que pensamos — isso é saudável. É quando paramos de conseguir ouvir qualquer coisa que a contrarie.",
    conteudo: `<p>Há um momento específico em que a opinião deixa de ser uma ferramenta e se torna um vício. Não é quando começamos a defender o que pensamos — isso é saudável. É quando paramos de conseguir ouvir qualquer coisa que a contrarie.</p><p>Chame-lhe embriaguez intelectual. Ou câmara de eco. Ou simplesmente: o preço de ter passado demasiado tempo rodeado de pessoas que pensam como nós.</p><blockquote>A voz que mais nos seduz é sempre a nossa própria — especialmente quando a ouvimos amplificada pelos outros.</blockquote><p><em>[O texto completo desta carta será publicado em breve. Subscreva para receber cada edição directamente na sua caixa de correio.]</em></p>`,
    tags: ["pensamento", "diálogo", "consciência"],
  },
  {
    slug: "o-bombeiro-voluntario",
    numero: 2,
    titulo: "O Bombeiro Voluntário",
    subtitulo: "Sobre quem resolve crises que criou",
    data: "2024-01-15",
    tempoLeitura: 6,
    simbolo: false,
    excerpt: "Existe um perfil de pessoa que se torna indispensável pela sua capacidade de resolver problemas urgentes. O que raramente se percebe é que muitos desses problemas foram, de forma inconsciente, criados pela mesma pessoa.",
    conteudo: `<p>Existe um perfil de pessoa que se torna indispensável pela sua capacidade de resolver problemas urgentes. O que raramente se percebe é que muitos desses problemas foram, de forma inconsciente, criados pela mesma pessoa.</p><p>É o bombeiro voluntário. Alguém que adora o fogo — não por maldade, mas porque o fogo o justifica.</p><blockquote>Não confunda energia com produtividade. Não confunda movimento com direcção. Não confunda resolver com criar.</blockquote><p><em>[O texto completo desta carta será publicado em breve.]</em></p>`,
    tags: ["padrões", "comportamento", "organizações"],
  },
  {
    slug: "oportunidade-revela",
    numero: 3,
    titulo: "Oportunidade Revela",
    subtitulo: "O que a escassez e a abundância mostram de nós",
    data: "2024-01-22",
    tempoLeitura: 8,
    simbolo: true,
    excerpt: "A oportunidade não transforma as pessoas. Revela-as. Quando alguém muda radicalmente ao ganhar poder, dinheiro ou visibilidade, o que está a acontecer não é uma transformação — é uma revelação.",
    conteudo: `<p>A oportunidade não transforma as pessoas. Revela-as.</p><blockquote>O carácter não se constrói na adversidade. Revela-se. A adversidade é apenas a luz que ilumina o que já existia.</blockquote><p><em>[O texto completo desta carta será publicado em breve.]</em></p>`,
    tags: ["carácter", "poder", "revelação"],
  },
  {
    slug: "o-que-esta-oculto",
    numero: 4,
    titulo: "O que está oculto",
    subtitulo: "Sobre as camadas que não vemos nas decisões alheias",
    data: "2024-01-29",
    tempoLeitura: 7,
    simbolo: true,
    excerpt: "Toda a decisão visível tem uma estrutura invisível por baixo. Quando alguém diz 'sim' a algo, está simultaneamente a dizer 'não' a outras dez coisas.",
    conteudo: `<p>Toda a decisão visível tem uma estrutura invisível por baixo.</p><blockquote>Antes de julgar a decisão de alguém, pergunte-se: que informação tenho eu que essa pessoa não tem?</blockquote><p><em>[O texto completo desta carta será publicado em breve.]</em></p>`,
    tags: ["decisão", "contexto", "empatia estratégica"],
  },
  {
    slug: "os-meus-50-porcento",
    numero: 5,
    titulo: "Os meus 50%",
    subtitulo: "Sobre a responsabilidade que nos pertence em qualquer conflito",
    data: "2024-02-05",
    tempoLeitura: 6,
    simbolo: false,
    excerpt: "Em qualquer conflito, há pelo menos dois protagonistas. E cada um contribui com alguma coisa para o que aconteceu — mesmo que as proporções sejam muito desiguais.",
    conteudo: `<p>Em qualquer conflito, há pelo menos dois protagonistas.</p><blockquote>Pode ter razão sobre o que o outro fez. E ainda assim ser responsável pela forma como respondeu.</blockquote><p><em>[O texto completo desta carta será publicado em breve.]</em></p>`,
    tags: ["responsabilidade", "conflito", "relações"],
  },
  {
    slug: "problema-vs-inconveniencia",
    numero: 6,
    titulo: "Problema vs. Inconveniência",
    subtitulo: "Sobre a distinção que muda tudo",
    data: "2024-02-12",
    tempoLeitura: 5,
    simbolo: false,
    excerpt: "A maioria das coisas que chamamos problemas são inconveniências. A distinção importa porque os problemas requerem soluções e os inconvenientes requerem apenas tolerância.",
    conteudo: `<p>A maioria das coisas que chamamos problemas são inconveniências.</p><blockquote>Um problema tem uma solução. Uma inconveniência tem apenas um custo. Confundir os dois é a origem de muito sofrimento desnecessário.</blockquote><p><em>[O texto completo desta carta será publicado em breve.]</em></p>`,
    tags: ["clareza", "linguagem", "perspectiva"],
  },
];

export function getCartaBySlug(slug: string): Carta | undefined {
  return cartas.find((c) => c.slug === slug);
}

export function getCartasAdjacentesBySlug(slug: string): { anterior: Carta | null; seguinte: Carta | null } {
  const index = cartas.findIndex((c) => c.slug === slug);
  return {
    anterior: index > 0 ? cartas[index - 1] : null,
    seguinte: index < cartas.length - 1 ? cartas[index + 1] : null,
  };
}

export function formatarData(data: string): string {
  const date = new Date(data);
  return date.toLocaleDateString("pt-PT", { year: "numeric", month: "long", day: "numeric" });
}