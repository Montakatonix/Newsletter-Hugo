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