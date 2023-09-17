import { Module } from '@nestjs/common';

import { BoardsModule } from './boards/boards.module';
import { BoardsController } from './boards/boards.controller';
import { BoardsService } from './boards/boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { nestConfig } from './configs/config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(nestConfig),
    TypeOrmModule.forRoot(typeOrmConfig),
    BoardsModule,
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class AppModule {}
