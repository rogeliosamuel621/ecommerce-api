import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Swagger configuration
   */
  const config = new DocumentBuilder()
    .setTitle('E-commerce API')
    .setDescription('API for E-commerce actions')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  /**
   * Server configuration
   */
  app.useGlobalPipes(new ValidationPipe());

  /**
   * Start of the app
   */
  await app.listen(4000, () => {
    console.log('Running on port 4000');
  });
}
bootstrap();
