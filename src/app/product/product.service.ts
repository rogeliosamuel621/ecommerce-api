import { Injectable } from '@nestjs/common';
import { HttpResponse } from 'src/common/utils/HttpResponse.util';
import { ICategory } from './interfaces/categories.interface';
import { IProduct } from './interfaces/product.interface';
import { ProductRepository } from './repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  getAllProducts(): HttpResponse<IProduct[]> {
    const products = this.productRepository.getAllProducts();

    return new HttpResponse(products);
  }

  getAllCategories(): HttpResponse<ICategory[]> {
    const categories = this.productRepository.getAllCategories();

    return new HttpResponse(categories);
  }
}
