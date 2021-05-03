import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { TransformInterceptor } from './shared/interceptors/transform.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: true,
  });
  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
    .setTitle('Challenge INDRA')
    .setDescription('By Jakeline Sofia Campos Cabello')
    .setVersion('1.0')
    .addTag('people')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  Logger.log('Listened on PORT 3000');
  await app.listen(3000);
}
bootstrap();
