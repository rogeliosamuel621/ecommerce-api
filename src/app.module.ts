import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfig, dbConfig, getEnvPath } from './common/config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvPath(process.env.NODE_ENV),
      load: [appConfig, dbConfig],
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        MONGO_DB_URI: Joi.string().required(),
      }),
    }),
    MongooseModule.forRoot(dbConfig().MONGO_DB_URI),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
