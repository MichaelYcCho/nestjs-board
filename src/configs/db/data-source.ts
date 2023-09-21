import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { resolve } from 'path';

// import { DataSource, DataSourceOptions } from 'typeorm';

// export const dataSourceOptions: DataSourceOptions = {
//   type: 'postgres',
//   host: process.env.DB_HOST, // DB 호스트
//   port: +process.env.DB_PORT, // DB 포트
//   username: process.env.DB_USERNAME, // DB 사용자 이름
//   password: process.env.DB_PASSWORD, // DB 비밀번호
//   database: process.env.DB_DATABASE, // DB 이름
//   entities: [__dirname + '/../**/*.entity.{js,ts}'], // 엔티티 위치
//   synchronize: false, // DB 스키마 자동 동기화
//   //migrations: [__dirname + '/../migrations/*{.js}'],
//   migrations: ['src/database/migrations/*.ts'],
//   migrationsTableName: 'migrations',
// };

// console.log('username', process.env.DB_USERNAME);

// const dataSource = new DataSource(dataSourceOptions);
// export default dataSource;

// TODO: 이렇게 말고 다른 방법으로 env 파일을 읽어오는 방법 필요 (23.09.22)
config({ path: resolve(__dirname, '..', '..', '..', '.env.dev') });
const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
