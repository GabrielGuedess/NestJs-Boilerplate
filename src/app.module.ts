import { CacheModule, Module } from '@nestjs/common';

import * as redisStore from 'cache-manager-redis-store';
import { PrismaService } from 'infra/database/prisma/prisma.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CacheModule.register({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
