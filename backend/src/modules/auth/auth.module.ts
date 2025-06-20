import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

import { APP_GUARD } from '@nestjs/core';
import { jwtConstants } from './constarnts';
import { AuthGuard } from './auth.guard';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '640800s' },
    }),
  ],
  providers: [
    AuthService,
    { provide: APP_GUARD, useClass: AuthGuard },
    UserService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
