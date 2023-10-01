import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Board } from '../boards/board.entity';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // eager - true: user를 가져올 때 board도 같이 가져옴
  @OneToMany(() => Board, (board) => board.user, { eager: true })
  boards: Board[];

  async validatePassword(password: string): Promise<boolean> {
    let isValid = await bcrypt.compare(password, this.password);
    return isValid;
  }
}
