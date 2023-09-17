import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BoardsModule } from './boards/boards.module';
import { BoardsController } from './boards/boards.controller';
import { BoardsService } from './boards/boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './configs/typeorm.config';
import { nestConfig } from './configs/config';

@Module({
  imports: [
    ConfigModule.forRoot(nestConfig),
    TypeOrmModule.forRoot(getTypeOrmConfig()),
    BoardsModule,
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class AppModule {}
