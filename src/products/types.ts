export interface TitleAndDescriptionTypes {
  en: string;
  ru: string;
}

export interface PriceTypes {
  usd?: number;
  ruble: number;
}

export interface ProductCreationAttrs {
  title: TitleAndDescriptionTypes;
  description: TitleAndDescriptionTypes;
  price: PriceTypes;
  categoryId: number;
  inStock: number;
  tags: string[];
  image: string;
}