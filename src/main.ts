import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './common/config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(appConfig().PORT);
}
bootstrap();
