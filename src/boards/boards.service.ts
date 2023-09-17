import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardsRepository } from './board.repository';
import { Board } from './board.entity';

export class BoardsService {
  constructor(private readonly boardsRepository: BoardsRepository) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardsRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }
}
