import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { ConfigModule } from './common/config/config.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [DatabaseModule, ConfigModule, AuthModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
