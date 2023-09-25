import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersRepository } from './user.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersRepository],
})
export class AuthModule {}
