import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: {
        expiresIn: 3600, // 1h
      },
    }),
  ],
  controllers: [AuthController],
  // JWT Strategy를 해당 Auth 모듈에서 사용할수 있게 등록
  providers: [AuthService, UsersRepository, JwtStrategy],
  // JWT Strategy, PassportModule을 다른 모듈에서 사용할수 있게 등록
  exports: [JwtStrategy, PassportModule, JwtModule],
})
export class AuthModule {}
