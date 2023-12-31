import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST, // DB 호스트
  port: +process.env.DB_PORT, // DB 포트
  username: process.env.DB_USERNAME, // DB 사용자 이름
  password: process.env.DB_PASSWORD, // DB 비밀번호
  database: process.env.DB_DATABASE, // DB 이름
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // 엔티티 위치
  synchronize: true, // DB 스키마 자동 동기화
});

/*

import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as config from 'config'

const dbConfig = config.get('db')
export const typeormConfig = (): TypeOrmModuleOptions => ({
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  ...
})



*/
