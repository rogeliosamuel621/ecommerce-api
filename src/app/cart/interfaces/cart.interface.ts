import { IProduct } from 'src/app/product/interfaces/product.interface';

export type TCartItem = Pick<
  IProduct,
  'id' | 'name' | 'slug' | 'price' | 'images'
>;
