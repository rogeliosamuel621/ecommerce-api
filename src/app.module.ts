import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfig, getEnvPath } from './common/config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvPath(process.env.NODE_ENV),
      load: [appConfig],
      isGlobal: true,
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
