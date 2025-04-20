import { I18nService } from 'nestjs-i18n';
import { Injectable } from '@nestjs/common';

import { I18nTranslations } from '@root/i18n/generated';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { RelayPagination } from 'domain/shared/dtos/RelayPagination';
import { AppError, StatusCode } from 'domain/shared/errors/AppError';
import { OffsetPagination } from 'domain/shared/dtos/OffsetPagination';
import {
  CountUsersRequestDTO,
  UpdateUserRequestDTO,
  DeleteUserRequestDTO,
  FindAllUsersRequestDTO,
  FindFirstUserRequestDTO,
  FindUniqueUserRequestDTO,
  PaginationOffsetUsersRequestDTO,
  PaginationCursorUsersRequestDTO,
} from 'domain/dtos/repositories/UserRepositoryDTO';

import { PrismaService } from 'infrastructure/database/prisma/prisma.service';
import { PrismaUserMapper } from 'infrastructure/database/prisma/mappers/PrismaUserMapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async count(parameters: CountUsersRequestDTO): Promise<number> {
    const count = await this.prisma.user.count({
      where: parameters.where,
    });

    return count;
  }

  async findAll(parameters: FindAllUsersRequestDTO): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      where: parameters.where,
    });

    return users.map(user => PrismaUserMapper.toDomain(user));
  }

  async findFirst({
    where,
    returnError = true,
  }: FindFirstUserRequestDTO): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where,
    });

    if (!user && returnError) {
      throw new AppError({
        statusCode: StatusCode.NOT_FOUND,
        message: this.i18n.t('repositories.ERROR_NOT_FOUND', {
          args: { name: 'User' },
        }),
      });
    }

    return user ? PrismaUserMapper.toDomain(user) : null;
  }

  async findUnique({
    where,
    returnError = true,
  }: FindUniqueUserRequestDTO): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where,
    });

    if (!user && returnError) {
      throw new AppError({
        statusCode: StatusCode.NOT_FOUND,
        message: this.i18n.t('repositories.ERROR_NOT_FOUND', {
          args: { name: 'User' },
        }),
      });
    }

    return user ? PrismaUserMapper.toDomain(user) : null;
  }

  async create(user: User): Promise<User> {
    const userExist = await this.prisma.user.findUnique({
      where: { document: user.document },
    });

    if (userExist) {
      throw new AppError({
        statusCode: StatusCode.CONFLICT,
        message: this.i18n.t('repositories.ERROR_ALREADY_EXISTS', {
          args: { name: 'User' },
        }),
      });
    }

    const userPrisma = await this.prisma.user.create({
      data: PrismaUserMapper.toPrisma(user),
    });

    const userDomain = PrismaUserMapper.toDomain(userPrisma);

    return userDomain;
  }

  async paginationOffset(
    parameters: PaginationOffsetUsersRequestDTO,
  ): Promise<OffsetPagination<User>> {
    const [users, pageInfo] = await this.prisma.prismaExtended.user
      .paginate({
        where: parameters.where ?? {},
        orderBy: parameters.order ?? {},
      })
      .withPages({
        includePageCount: true,
        page: parameters.page ?? 1,
        limit: parameters?.limit ?? 10,
      });

    const nodes = users.map(user => new User(user, user.id));

    const totalCount = await this.prisma.user.count({
      where: parameters.where ?? {},
    });

    return {
      nodes,
      pageInfo,
      totalCount,
      count: users?.length ?? 0,
    };
  }

  async delete(parameters: DeleteUserRequestDTO): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: parameters.where,
    });

    if (!user) {
      throw new AppError({
        statusCode: StatusCode.NOT_FOUND,
        message: this.i18n.t('repositories.ERROR_NOT_FOUND', {
          args: { name: 'User' },
        }),
      });
    }

    const userPrisma = await this.prisma.user.delete({
      where: parameters.where,
    });

    if (!userPrisma) {
      throw new AppError({
        statusCode: StatusCode.BAD_REQUEST,
        message: this.i18n.t('repositories.ERROR_NOT_DELETED', {
          args: { name: 'User' },
        }),
      });
    }

    const userDomain = PrismaUserMapper.toDomain(userPrisma);

    return userDomain;
  }

  async createMany(users: User[]): Promise<User[]> {
    const createdUsers: User[] = [];

    await Promise.all(
      users.map(async user => {
        const userExist = await this.prisma.user.findUnique({
          where: { document: user.document },
        });

        if (userExist) {
          throw new AppError({
            statusCode: StatusCode.CONFLICT,
            message: this.i18n.t('repositories.ERROR_ALREADY_EXISTS', {
              args: { name: 'User' },
            }),
          });
        }

        const userPrisma = await this.prisma.user.create({
          data: PrismaUserMapper.toPrisma(user),
        });

        const userDomain = PrismaUserMapper.toDomain(userPrisma);

        createdUsers.push(userDomain);
      }),
    );

    return createdUsers;
  }

  async update(parameters: UpdateUserRequestDTO): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: parameters.where,
    });

    if (!user) {
      throw new AppError({
        statusCode: StatusCode.NOT_FOUND,
        message: this.i18n.t('repositories.ERROR_NOT_FOUND', {
          args: { name: 'User' },
        }),
      });
    }

    const userPrisma = await this.prisma.user.update({
      data: parameters.data,
      where: parameters.where,
    });

    if (!userPrisma) {
      throw new AppError({
        statusCode: StatusCode.BAD_REQUEST,
        message: this.i18n.t('repositories.ERROR_NOT_UPDATED', {
          args: { name: 'User' },
        }),
      });
    }

    const userDomain = PrismaUserMapper.toDomain(userPrisma);

    return userDomain;
  }

  async activate(parameters: DeleteUserRequestDTO): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: parameters.where,
    });

    if (!user) {
      throw new AppError({
        statusCode: StatusCode.NOT_FOUND,
        message: this.i18n.t('repositories.ERROR_NOT_FOUND', {
          args: { name: 'User' },
        }),
      });
    }

    const userPrisma = await this.prisma.user.update({
      data: { active: true },
      where: parameters.where,
    });

    if (!userPrisma) {
      throw new AppError({
        statusCode: StatusCode.BAD_REQUEST,
        message: this.i18n.t('repositories.ERROR_NOT_UPDATED', {
          args: { name: 'User' },
        }),
      });
    }

    const userDomain = PrismaUserMapper.toDomain(userPrisma);

    return userDomain;
  }

  async deactivate(parameters: DeleteUserRequestDTO): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: parameters.where,
    });

    if (!user) {
      throw new AppError({
        statusCode: StatusCode.NOT_FOUND,
        message: this.i18n.t('repositories.ERROR_NOT_FOUND', {
          args: { name: 'User' },
        }),
      });
    }

    const userPrisma = await this.prisma.user.update({
      data: { active: false },
      where: parameters.where,
    });

    if (!userPrisma) {
      throw new AppError({
        statusCode: StatusCode.BAD_REQUEST,
        message: this.i18n.t('repositories.ERROR_NOT_UPDATED', {
          args: { name: 'User' },
        }),
      });
    }

    const userDomain = PrismaUserMapper.toDomain(userPrisma);

    return userDomain;
  }

  async deleteMany(parameters: DeleteUserRequestDTO[]): Promise<User[]> {
    const users: User[] = [];

    await Promise.all(
      parameters.map(async ({ where }) => {
        const user = await this.prisma.user.findUnique({
          where,
        });

        if (!user) {
          throw new AppError({
            statusCode: StatusCode.NOT_FOUND,
            message: this.i18n.t('repositories.ERROR_NOT_FOUND', {
              args: { name: 'User' },
            }),
          });
        }

        const userPrisma = await this.prisma.user.delete({
          where,
        });

        if (!userPrisma) {
          throw new AppError({
            statusCode: StatusCode.BAD_REQUEST,
            message: this.i18n.t('repositories.ERROR_NOT_DELETED', {
              args: { name: 'User' },
            }),
          });
        }

        const userDomain = PrismaUserMapper.toDomain(userPrisma);

        users.push(userDomain);
      }),
    );

    return users;
  }

  async updateMany(parameters: UpdateUserRequestDTO[]): Promise<User[]> {
    const users: User[] = [];

    await Promise.all(
      parameters.map(async ({ data, where }) => {
        const user = await this.prisma.user.findUnique({
          where,
        });

        if (!user) {
          throw new AppError({
            statusCode: StatusCode.NOT_FOUND,
            message: this.i18n.t('repositories.ERROR_NOT_FOUND', {
              args: { name: 'User' },
            }),
          });
        }

        const userPrisma = await this.prisma.user.update({
          where,
          data: {
            ...data,
            updated_at: new Date(),
          },
        });

        if (!userPrisma) {
          throw new AppError({
            statusCode: StatusCode.BAD_REQUEST,
            message: this.i18n.t('repositories.ERROR_NOT_UPDATED', {
              args: { name: 'User' },
            }),
          });
        }

        const userDomain = PrismaUserMapper.toDomain(userPrisma);

        users.push(userDomain);
      }),
    );

    return users;
  }

  async paginationCursor(
    parameters: PaginationCursorUsersRequestDTO,
  ): Promise<RelayPagination<User>> {
    const keys = Object.keys(parameters.order ?? {});

    if (keys?.length > 1) {
      throw new AppError({
        statusCode: StatusCode.CONFLICT,
        message: this.i18n.t('repositories.ERROR_SORT_MULTIPLE_PARAMS'),
      });
    }

    const relay = await findManyCursorConnection(
      args =>
        this.prisma.user.findMany({
          ...args,
          orderBy: parameters.order,
          where: parameters.where ?? {},
        }),
      () => this.prisma.user.count(),
      {
        last: parameters.last,
        first: parameters.first,
        after: parameters.after,
        before: parameters.before,
      },
      {
        getCursor: record => ({ id: record.id }),
      },
    );

    const edges = relay.edges.map(edge => ({
      ...edge,
      node: new User(edge.node, edge.node.id),
    }));

    const nodes = relay.edges.map(edge => new User(edge.node, edge.node.id));

    return {
      edges,
      nodes,
      count: edges.length,
      totalCount: relay.totalCount,
      pageInfo: {
        endCursor: relay.pageInfo.endCursor,
        hasNextPage: relay.pageInfo.hasNextPage,
        startCursor: relay.pageInfo.startCursor,
        hasPreviousPage: relay.pageInfo.hasPreviousPage,
      },
    };
  }
}
