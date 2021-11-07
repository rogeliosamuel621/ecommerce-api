import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpResponse } from 'src/common/utils/HttpResponse.util';
import { ICategory } from './interfaces/categories.interface';
import { IProduct } from './interfaces/product.interface';
import { ProductService } from './product.service';

@ApiTags('Products')
@Controller('content')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('all/products')
  getAllProducts(): HttpResponse<IProduct[]> {
    return this.productService.getAllProducts();
  }

  @Get('all/categories')
  getAllCategories(): HttpResponse<ICategory[]> {
    return this.productService.getAllCategories();
  }
}
