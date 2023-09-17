import { TypeOrmModuleOptions } from '@nestjs/typeorm';

console.log('process.env.DB_DATABASE', process.env.DB_DATABASE);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST, // DB 호스트
  port: +process.env.DB_PORT, // DB 포트
  username: process.env.DB_USERNAME, // DB 사용자 이름
  password: process.env.DB_PASSWORD, // DB 비밀번호
  database: process.env.DB_DATABASE, // DB 이름
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // 엔티티 위치
  synchronize: true, // DB 스키마 자동 동기화
};

console.log('process.env.DB_HOST', process.env.DB_HOST);
console.log('process.env.DB_PORT', process.env.DB_PORT);
console.log('process.env.DB_USERNAME', process.env.DB_USERNAME);
console.log('process.env.DB_PASSWORD', process.env.DB_PASSWORD);
