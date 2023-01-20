import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);

  const config  = new DocumentBuilder()
    .setTitle('Интернет магазин')
    .setDescription('Документация')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`server started on port - ${PORT}`));
}
bootstrap();
