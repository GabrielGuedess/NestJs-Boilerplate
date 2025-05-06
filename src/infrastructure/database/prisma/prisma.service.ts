import { Injectable, type OnModuleInit } from '@nestjs/common';

import { pagination } from 'prisma-extension-pagination';
import { PrismaClient } from '@root/prisma/generated/prisma/client';

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
