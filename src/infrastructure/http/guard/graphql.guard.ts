import { JwtService } from '@nestjs/jwt';
import { I18nService } from 'nestjs-i18n';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

import { Request } from 'express';
import { I18nTranslations } from '@root/i18n/generated';

import { User } from 'domain/entities/user/User';
import { AppError, StatusCode } from 'domain/shared/errors/AppError';

import { env } from 'infrastructure/env';

@Injectable()
export class GraphQLAuthGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {
    super();
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    if (!request?.headers?.authorization) {
      throw new AppError({
        statusCode: StatusCode.FORBIDDEN,
        message: this.i18n.t('guards.ERROR_MISSING_TOKEN'),
      });
    }

    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }

  async canActivate(executionContext: ExecutionContext): Promise<boolean> {
    const context = GqlExecutionContext.create(executionContext);

    const { req } = context.getArgByIndex<{ req: { user: User } & Request }>(2);

    const token = this.extractTokenFromHeader(req);

    if (!token) {
      throw new AppError({
        statusCode: StatusCode.FORBIDDEN,
        message: this.i18n.t('guards.ERROR_MISSING_TOKEN'),
      });
    }

    try {
      const payload = await this.jwtService.verifyAsync<User>(token, {
        secret: env.SECRET_TOKEN,
      });

      req.user = payload;
    } catch {
      throw new AppError({
        statusCode: StatusCode.UNAUTHORIZED,
        message: this.i18n.t('guards.ERROR_INVALID_TOKEN'),
      });
    }

    return super.canActivate(new ExecutionContextHost([req])) as boolean;
  }
}
