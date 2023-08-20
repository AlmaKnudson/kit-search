import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', //client's origin
  });
  const config = new DocumentBuilder()
    .setTitle('Bibot Kits API')
    .setDescription(`Alma's edition of the Biobot Kits API...`)
    .setContact(
      'Alma Knudson',
      'https://github.com/AlmaKnudson',
      'knudson.dell@gmail.com',
    )
    .setVersion('0.1')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3001);
}
bootstrap();
