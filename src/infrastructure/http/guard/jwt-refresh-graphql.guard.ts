import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import {
  Injectable,
  HttpStatus,
  type CanActivate,
  type ExecutionContext,
} from '@nestjs/common';

import { type Request } from 'express';
import { GraphQLError } from 'graphql';

import { type User } from 'domain/entities/user/User';

import { env } from 'infrastructure/env';

@Injectable()
export class JwtRefreshGraphQLAuthGuard
  extends AuthGuard('jwtRefresh')
  implements CanActivate
{
  constructor(private jwtService: JwtService) {
    super();
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    if (!request?.headers?.authorization) {
      throw new GraphQLError('Missing token!', {
        extensions: { code: HttpStatus.FORBIDDEN },
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
      throw new GraphQLError('Missing token!', {
        extensions: { code: HttpStatus.FORBIDDEN },
      });
    }

    try {
      const payload = await this.jwtService.verifyAsync<User>(token, {
        secret: env.SECRET_REFRESH_TOKEN,
      });

      req.user = payload;
    } catch {
      throw new GraphQLError('Invalid token!', {
        extensions: { code: HttpStatus.UNAUTHORIZED },
      });
    }

    return super.canActivate(new ExecutionContextHost([req])) as boolean;
  }
}
