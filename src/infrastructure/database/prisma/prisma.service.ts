import { Injectable, type OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { pagination } from 'prisma-extension-pagination';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  public readonly prismaExtended;

  constructor() {
    super();

    this.prismaExtended = this.$extends(pagination());
  }

  async onModuleInit() {
    await this.$connect();
  }
}
