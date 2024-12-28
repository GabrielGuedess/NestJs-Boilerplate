import { Get, Req, Controller } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

import { Request } from 'express';

import { PrismaHealthIndicator } from 'infrastructure/database/prisma/prisma-health.service';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(
    private readonly http: HttpHealthIndicator,
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
    private readonly database: PrismaHealthIndicator,
  ) {}

  @Get('readiness')
  @ApiOkResponse()
  @HealthCheck()
  async checkReadiness(@Req() request: Request): Promise<HealthCheckResult> {
    const { protocol } = request;

    const host = request.get('host');

    return this.health.check([
      () =>
        this.http.pingCheck(
          'apollo',
          `${protocol}://${host}/graphql?query=%7B__typename%7D`,
        ),
      () => this.database.pingCheck('prisma'),
      () => this.memory.checkHeap('memory_heap', 300 * 1024 * 1024),
      () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),
    ]);
  }
}
