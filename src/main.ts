import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
//import * as config from 'config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  //  const port = config.get('server.port')
  await app.listen(3000);
  Logger.log(`Application running on port ${port}`);
}
bootstrap();
