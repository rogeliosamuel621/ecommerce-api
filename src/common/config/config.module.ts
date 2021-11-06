import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { appConfig, dbConfig, getEnvPath } from './values/values.config';
import { schemaValidations } from './schemas/schemas.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: getEnvPath(process.env.NODE_ENV),
      load: [appConfig, dbConfig],
      isGlobal: true,
      validationSchema: schemaValidations,
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}
