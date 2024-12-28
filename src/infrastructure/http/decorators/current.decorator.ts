import { createParamDecorator, type ExecutionContext } from '@nestjs/common';

import { type Request } from 'express';

import { type User } from 'domain/entities/user/User';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const { req } = context.getArgByIndex<{ req: { user: User } & Request }>(2);

    const { user } = req;

    return user;
  },
);
