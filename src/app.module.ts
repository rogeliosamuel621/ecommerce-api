import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './common/config/values/values.config';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './common/config/config.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot(dbConfig().MONGO_DB_URI),
    AuthModule,
    DatabaseModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
