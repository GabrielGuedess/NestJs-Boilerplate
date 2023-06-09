import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

import { PrismaService } from 'infra/database/prisma/prisma.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
