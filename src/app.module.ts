import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig, getEnvPath } from './common/config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvPath(process.env.NODE_ENV),
      load: [appConfig],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
