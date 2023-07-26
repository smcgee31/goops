export interface CardName {
  cardName: string;
}

export interface CardData {
  title: string;
  description: string;
  links: LinkType[];
}

type LinkType = {
  path: string;
  text: string;
};

export type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;
