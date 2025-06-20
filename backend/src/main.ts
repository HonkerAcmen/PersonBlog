import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './HttpException/HttpExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const confingService = app.get(ConfigService);

  const corsOrigin = confingService.get<string>('CORS_ORIGIN');
  let isEnable = false;
  if (corsOrigin === '*' || corsOrigin === 'true') isEnable = true;

  app.enableCors({
    origin: isEnable,
    methods: 'GET,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });
  app.useGlobalFilters(new HttpExceptionFilter());

  app.setGlobalPrefix('api');
  await app.listen(confingService.get<number>('POST') ?? 3000);
}
bootstrap();
