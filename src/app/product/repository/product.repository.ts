import { Injectable } from '@nestjs/common';
import { ICategory } from '../interfaces/categories.interface';
import { IProduct } from '../interfaces/product.interface';
import { content } from './content';

const { categories, products } = content;
@Injectable()
export class ProductRepository {
  getAllProducts(): IProduct[] {
    return products;
  }

  getAllCategories(): ICategory[] {
    return categories;
  }
}
