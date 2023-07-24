export interface CardName {
  cardName: string;
}

export interface CardData {
  title: string;
  description: string;
  links: { path: string; text: string }[];
}
