export interface IProduct {
  id: number;
  name: string;
  slug: string;
  price: IPrice[];
  description: string;
  images: IImage[];
  categoryId: TCategoriesIds[];
  colors: TColors[];
  sizes: TSizes[];
  reviews: number;
  reviewAverage: number;
}

export interface IPrice {
  basePrice: number;
  salePrice: number;
  currency: TCurrency;
}

export interface IImage {
  image: string;
  color: TColors;
  isDefault: boolean;
}

export type TCurrency = 'USD' | 'MXN';

export type TColors =
  | 'black'
  | 'white'
  | 'blue'
  | 'gray'
  | 'pink'
  | 'green'
  | 'red';

export type TCategoriesIds = 1 | 2 | 3 | 4;

export enum categories {
  'Best seller' = 1,
  'Casual clothes' = 2,
  'Jackets' = 3,
  'Sweet nights' = 4,
}

export type TSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XLL' | '2XL' | '3XL';
