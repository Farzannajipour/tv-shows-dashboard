export interface Show {
  id: number;
  name: string;
  image?: { medium?: string; original?: string };
  rating?: { average?: number };
  genres?: string[];
  schedule?: { days?: string[]; time?: string };
  summary?: string;
}
