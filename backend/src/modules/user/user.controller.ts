import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(
    @Body() { email, password }: { email: string; password: string },
  ) {
    return await this.userService.createUser(email, password);
  }

  @Post('updateUsername')
  async updateUserUsernameById(
    @Body() { id, username }: { id: number; username: string },
  ) {
    return await this.userService.updateUserUsernameById(id, username);
  }

  @Post('updatePassword')
  async updateUserPasswordById(
    @Body() { id, password }: { id: number; password: string },
  ) {
    return await this.userService.updateUserPasswordById(id, password);
  }

  @Post('updateEmail')
  async updateUserEmailById(
    @Body() { id, email }: { id: number; email: string },
  ) {
    return await this.userService.updateUserEmailById(id, email);
  }

  @Post('updateRole')
  async updateUserRoleById(@Body() { id, role }: { id: number; role: string }) {
    return await this.userService.updateUserRoleById(id, role);
  }

  @Post('updateIsActive')
  async updateUserIsActiveById(
    @Body() { id, is_active }: { id: number; is_active: number },
  ) {
    return await this.userService.updateUserIsActiveById(id, is_active);
  }
  @Get()
  async getUserInfoById(@Query('id') id: number) {
    return await this.userService.getUserInfoById(id);
  }

  @Get('email')
  async getUserEmailById(@Query('id') id: number) {
    return await this.userService.getUserEmailById(id);
  }

  @Get('username')
  async getUserUsernameById(@Query('id') id: number) {
    return await this.userService.getUserUsernameById(id);
  }
}
