import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfig, getEnvPath } from './common/config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvPath(process.env.NODE_ENV),
      load: [appConfig],
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
      }),
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
