import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerService } from './config/swagger/swagger.service';
import * as bodyParser from 'body-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    methods: process.env.CORS_METHODS,
    preflightContinue: process.env.CORS_PREFLIGHT === 'true' ? true : false,
    optionsSuccessStatus: parseInt(process.env.CORS_SUSS_STATUS),
  });

  new SwaggerService().init(app);
  console.log(`Application is running on: ${process.env.APP_PORT}`);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
