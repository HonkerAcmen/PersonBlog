/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from './public.decorator';
import { jwtConstants } from './constarnts';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const token: string = extractTokenFromHeader(request.headers);

    if (!token) {
      throw new UnauthorizedException('token 验证失败');
    }

    try {
      // 指定 verifyAsync 的返回值为 Record<string, unknown>，替代 any
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      request['user'] = payload;
    } catch (err) {
      throw new UnauthorizedException(
        err instanceof Error ? err.message : 'token 验证失败',
      );
    }
    return true;
  }
}

function extractTokenFromHeader(headers: Record<string, any>): string {
  const authHeader = headers.authorization as string | undefined;
  if (!authHeader) {
    return '';
  }
  const [type, token] = authHeader.split(' ');
  return type === 'Bearer' ? token : '';
}
