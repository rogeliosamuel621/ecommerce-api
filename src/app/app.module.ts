import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '../common/config/config.module';
import { DatabaseModule } from '../common/database/database.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DatabaseModule, ConfigModule, AuthModule, ProductModule],
})
export class AppModule {}
