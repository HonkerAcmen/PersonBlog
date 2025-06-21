import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { error } from 'src/Res/res';
import * as md5 from 'md5';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtSerivce: JwtService,
  ) {}

  async login(email: string, password: string) {
    // eslint-disable-next-line no-useless-catch
    try {
      const user = await this.userService.getUserInfoByEmail(email);
      if (!user) {
        error(404, '用户不存在');
        return;
      }

      const md5password: string = md5(password);

      if (user.password.toUpperCase() !== md5password.toUpperCase()) {
        throw new UnauthorizedException('密码错误');
      }

      const payload = { sub: user.id, email };
      return {
        userId: user.id,
        email: user.email,
        token: await this.jwtSerivce.signAsync(payload),
      };
    } catch (err) {
      throw err;
    }
  }
}
