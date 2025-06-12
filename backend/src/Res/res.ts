import { HttpException } from '@nestjs/common';

export function success(code: number, msg: string, data: object | null = null) {
  return {
    code,
    msg,
    data,
  };
}

export function error(code: number, msg: string) {
  throw new HttpException(msg, code);
}
