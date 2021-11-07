import { TCartItem } from 'src/app/cart/interfaces/cart.interface';
import { IProduct } from 'src/app/product/interfaces/product.interface';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cart: TCartItem[];
  productsBought: IProduct[];
}

export type TRegisterUser = Pick<
  IUser,
  'email' | 'password' | 'firstName' | 'lastName'
>;
