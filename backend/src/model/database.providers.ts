import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST || configService.get<string>('DB_HOST'),
        port:
          Number(process.env.DB_PORT) || configService.get<number>('DB_PORT'),
        username: process.env.DB_USER || configService.get<string>('DB_USER'),
        password:
          process.env.DB_PASSWORD || configService.get<string>('DB_PASS'),
        database:
          process.env.DB_DATABASE || configService.get<string>('DB_NAME'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false, //  关闭自动同步
        migrationsRun: true, //  启用迁移
      });
      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
