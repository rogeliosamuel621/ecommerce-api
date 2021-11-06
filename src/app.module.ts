import { Module } from '@nestjs/common';
import { AuthModule } from './app/auth/auth.module';
import { ConfigModule } from './common/config/config.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [DatabaseModule, ConfigModule, AuthModule],
})
export class AppModule {}
