import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { error, success } from 'src/Res/res';
import * as md5 from 'md5';

const passwordregex = /^[A-Za-z0-9_@]+$/;
const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userProviders: Repository<UserEntity>,
  ) {}

  async createUser(email: string, password: string) {
    if (!email) {
      error(400, 'email不能为空');
    }
    if (!emailregex.test(email)) {
      error(400, 'email格式不正确');
    }
    if (!password) {
      error(400, '密码不能为空');
    }
    if (password.length < 5) {
      error(400, '密码长度不能小于5位');
    }
    if (!passwordregex.test(password)) {
      error(400, '密码只能包含字母数字下划线@符号');
    }
    const create_at = new Date();
    const updated_at = new Date();
    const md5password = md5(password);
    const newuser = this.userProviders.create({
      email,
      password: md5password,
      create_at,
      updated_at,
    });

    return success(200, '用户创建成功', await this.userProviders.save(newuser));
  }

  async updateUserUsernameById(id: number, username: string) {
    if (!id) {
      error(400, 'id不能为空');
    }
    if (!username) {
      error(400, '用户名不能为空');
    }
    const user = await this.userProviders.findOneBy({ id });
    if (!user) {
      error(404, '用户不存在');
    }
    const newuser = user;
    newuser.username = username;
    try {
      const editduser = await this.userProviders.save(newuser);
      return success(200, '修改成功', editduser);
    } catch (error) {
      console.error(error);
      error(400, '修改发生错误');
    }
  }

  async updateUserPasswordById(id: number, password: string) {
    if (!id) {
      error(400, 'id不能为空');
    }
    if (!password) {
      error(400, '密码不能为空');
    }
    if (password.length < 5) {
      error(400, '密码长度不能小于5位');
    }
    if (!passwordregex.test(password)) {
      error(400, '密码只能包含字母数字下划线@符号');
    }
    const user = await this.userProviders.findOneBy({ id });
    if (!user) {
      error(404, '用户不存在');
    }
    const newuser = user;
    newuser.password = md5(password);
    try {
      const editduser = await this.userProviders.save(newuser);
      return success(200, '修改成功', editduser);
    } catch (error) {
      console.error(error);
      error(400, '修改发生错误');
    }
  }

  async updateUserEmailById(id: number, email: string) {
    if (!id) {
      error(400, 'id不能为空');
    }
    if (!email) {
      error(400, '电子邮件不能为空');
    }
    if (!emailregex.test(email)) {
      error(400, '电子邮件格式不正确');
    }

    const user = await this.userProviders.findOneBy({ id });
    if (!user) {
      error(404, '用户不存在');
    }
    const newuser = user;
    newuser.email = email;
    try {
      const editduser = await this.userProviders.save(newuser);
      return success(201, '修改成功', editduser);
    } catch (error) {
      console.error(error);
      error(400, '修改发生错误');
    }
  }

  async updateUserRoleById(id: number, role: string) {
    if (!id) {
      error(400, 'id不能为空');
    }
    if (!role) {
      error(400, '字段不能为空');
    }
    const user = await this.userProviders.findOneBy({ id });
    if (!user) {
      error(404, '用户不存在');
    }
    const newuser = user;
    newuser.role = role;
    try {
      const editduser = await this.userProviders.save(newuser);
      return success(200, '修改成功', editduser);
    } catch (error) {
      console.error(error);
      error(400, '修改发生错误');
    }
  }

  async updateUserIsActiveById(id: number, is_active: number) {
    if (!id) {
      error(400, 'id不能为空');
    }
    if (!is_active) {
      error(400, '字段不能为空');
    }
    const user = await this.userProviders.findOneBy({ id });
    if (!user) {
      error(404, '用户不存在');
    }
    const newuser = user;
    newuser.is_active = is_active;
    try {
      const editduser = await this.userProviders.save(newuser);
      return success(200, '修改成功', editduser);
    } catch (error) {
      console.error(error);
      error(400, '修改发生错误');
    }
  }

  async getUserInfoById(id: number) {
    if (!id) {
      return error(400, 'id不能为空');
    }
    const user = await this.userProviders.findOneBy({ id });
    if (!user) {
      return error(404, '用户不存在');
    }
    return success(200, '获取成功', user);
  }

  async getUserEmailById(id: number) {
    if (!id) {
      error(400, 'id不能为空');
    }
    const user = await this.userProviders.findOneBy({ id });
    if (!user) {
      error(404, '用户不存在');
    }
    return success(200, '获取成功', { email: user.email });
  }

  async getUserUsernameById(id: number) {
    if (!id) {
      error(400, 'id不能为空');
    }
    const user = await this.userProviders.findOneBy({ id });
    if (!user) {
      error(404, '用户不存在');
    }
    if (!user.username) {
      error(400, '此用户没有设置用户名');
    }
    return success(200, '查询成功', { username: user.username });
  }

  async getUserInfoAll() {
    return success(200, '获取成功', await this.userProviders.find());
  }

  async getUserInfoByEmail(email: string) {
    if (!email) {
      error(400, '电子邮件不能为空');
    }
    if (!emailregex.test(email)) {
      error(400, '电子邮件格式不正确');
    }

    return await this.userProviders.findOneBy({ email });
  }

  async deleteUserById(id: number) {
    if (!id) {
      error(400, 'id不能为空');
    }
    const user = await this.userProviders.findOneBy({ id });
    try {
      return success(200, '删除成功', await this.userProviders.delete(user.id));
    } catch (err) {
      console.warn(err);
      error(400, '删除失败');
    }
  }
}
