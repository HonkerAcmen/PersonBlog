import { DataSource } from 'typeorm';
import { UserEntity } from './user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(UserEntity);
    },
    inject: ['DATA_SOURCE'],
  },
];
