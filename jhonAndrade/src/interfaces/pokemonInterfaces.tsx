export interface pokemonResponse {
  count: number;
  next: string;
  previus: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface pokemonSimple {
  id: string;
  name: string;
  img: string;
  color?: string;
}
