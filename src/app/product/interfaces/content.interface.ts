import { ICategory } from './categories.interface';
import { IProduct } from './product.interface';

export interface IContent {
  products: IProduct[];
  categories: ICategory[];
}
