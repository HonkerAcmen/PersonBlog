import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';
import { DatabaseModule } from 'src/model/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [...userProviders],
})
export class UserModule {}
