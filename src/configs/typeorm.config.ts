import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'as', // DB 계정
  password: 'asd', // DB 비밀번호
  database: 'board-app', // DB 이름
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // 엔티티 위치
  synchronize: true, // DB 스키마 자동 동기화
};
