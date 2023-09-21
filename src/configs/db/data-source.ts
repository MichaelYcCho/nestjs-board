import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST, // DB 호스트
  port: +process.env.DB_PORT, // DB 포트
  username: process.env.DB_USERNAME, // DB 사용자 이름
  password: process.env.DB_PASSWORD, // DB 비밀번호
  database: process.env.DB_DATABASE, // DB 이름
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // 엔티티 위치
  synchronize: false, // DB 스키마 자동 동기화
  //migrations: [__dirname + '/../migrations/*{.js}'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
};

console.log('username', process.env.DB_USERNAME);

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
