import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { BoardsRepository } from './board.repository';

@Module({
  controllers: [BoardsController],
  providers: [BoardsRepository, BoardsService],
})
export class BoardsModule {}
