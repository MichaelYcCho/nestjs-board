import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './configs/typeorm.config';
import { nestConfig } from './configs/config';
//import { dataSourceOptions } from './configs/db/data-source';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(nestConfig),
    TypeOrmModule.forRoot(getTypeOrmConfig()),
    // TypeOrmModule.forRoot(dataSourceOptions),
    BoardsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
