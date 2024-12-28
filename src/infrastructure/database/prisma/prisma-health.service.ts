import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';

import { PrismaService } from 'infrastructure/database/prisma/prisma.service';

@Injectable()
export class PrismaHealthIndicator extends HealthIndicator {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async pingCheck(databaseName: string): Promise<HealthIndicatorResult> {
    try {
      await this.prismaService.$queryRaw`SELECT 1`;

      return this.getStatus(databaseName, true);
    } catch (error) {
      throw new InternalServerErrorException('Prisma check failed', error);
    }
  }
}
