import { HttpStatus, Injectable } from '@nestjs/common';

import { GraphQLError } from 'graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { User } from 'domain/entities/user/User';
import { RelayPagination } from 'domain/shared/dtos/RelayPagination';
import { type UserRepository } from 'domain/repositories/UserRepository';
import {
  FindUserRequestDTO,
  type CountUsersRequestDTO,
  type UpdateUserRequestDTO,
  type FindAllUsersRequestDTO,
} from 'domain/dtos/repositories/UserRepositoryDTO';

import { PrismaService } from 'infrastructure/database/prisma/prisma.service';
import { PrismaUserMapper } from 'infrastructure/database/prisma/mappers/PrismaUserMapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async count(parameters: CountUsersRequestDTO): Promise<number> {
    const count = this.prisma.user.count({ where: parameters.where });

    return count;
  }

  async create(user: User): Promise<User> {
    const userExist = await this.prisma.user.findUnique({
      where: { document: user.document },
    });

    if (userExist) {
      throw new GraphQLError('User already exists!', {
        extensions: { code: HttpStatus.CONFLICT },
      });
    }

    const userPrisma = await this.prisma.user.create({
      data: PrismaUserMapper.toPrisma(user),
    });

    const userDomain = PrismaUserMapper.toDomain(userPrisma);

    return userDomain;
  }

  async delete(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new GraphQLError('User not found!', {
        extensions: { code: HttpStatus.NOT_FOUND },
      });
    }

    const userPrisma = await this.prisma.user.delete({
      where: { id },
    });

    if (!userPrisma) {
      throw new GraphQLError('User not deleted!', {
        extensions: { code: HttpStatus.BAD_REQUEST },
      });
    }

    const userDomain = PrismaUserMapper.toDomain(userPrisma);

    return userDomain;
  }

  async update(parameters: UpdateUserRequestDTO): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: parameters.id },
    });

    if (!user) {
      throw new GraphQLError('User not found!', {
        extensions: { code: HttpStatus.NOT_FOUND },
      });
    }

    const userPrisma = await this.prisma.user.update({
      where: { id: parameters.id },
      data: {
        ...parameters,
        updated_at: new Date(),
      },
    });

    if (!userPrisma) {
      throw new GraphQLError('User not updated!', {
        extensions: { code: HttpStatus.BAD_REQUEST },
      });
    }

    const userDomain = PrismaUserMapper.toDomain(userPrisma);

    return userDomain;
  }

  async deleteMany(ids: string[]): Promise<User[]> {
    const users: User[] = [];

    await Promise.all(
      ids.map(async id => {
        const user = await this.prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new GraphQLError('User not found!', {
            extensions: { code: HttpStatus.NOT_FOUND },
          });
        }

        const userPrisma = await this.prisma.user.delete({
          where: { id },
        });

        if (!userPrisma) {
          throw new GraphQLError('User not deleted!', {
            extensions: { code: HttpStatus.BAD_REQUEST },
          });
        }

        const userDomain = PrismaUserMapper.toDomain(userPrisma);

        users.push(userDomain);
      }),
    );

    return users;
  }

  async findUnique(parameters: FindUserRequestDTO): Promise<User> {
    if (
      !parameters?.where?.id &&
      !parameters?.where?.email &&
      !parameters?.where?.document
    ) {
      throw new GraphQLError(
        'At least one field (id, email, or document) must be provided.',
        {
          extensions: { code: HttpStatus.BAD_REQUEST },
        },
      );
    }

    const user = await this.prisma.user.findUnique({
      where: {
        ...(parameters?.where?.id && { id: parameters.where.id }),
        ...(parameters?.where?.email && { email: parameters.where.email }),
        ...(parameters?.where?.document && {
          document: parameters.where.document,
        }),
      },
    });

    if (!user) {
      throw new GraphQLError('User not found!', {
        extensions: { code: HttpStatus.NOT_FOUND },
      });
    }

    return PrismaUserMapper.toDomain(user);
  }

  async updateMany(parameters: UpdateUserRequestDTO[]): Promise<User[]> {
    const users: User[] = [];

    await Promise.all(
      parameters.map(async item => {
        const user = await this.prisma.user.findUnique({
          where: { id: item.id },
        });

        if (!user) {
          throw new GraphQLError(`User with id "${item.id}" not found!`, {
            extensions: { code: HttpStatus.NOT_FOUND },
          });
        }

        const userPrisma = await this.prisma.user.update({
          where: { id: item.id },
          data: {
            ...item,
            updated_at: new Date(),
          },
        });

        if (!userPrisma) {
          throw new GraphQLError(`User with id "${item.id}" not updated!`, {
            extensions: { code: HttpStatus.BAD_REQUEST },
          });
        }

        const userDomain = PrismaUserMapper.toDomain(userPrisma);

        users.push(userDomain);
      }),
    );

    return users;
  }

  async findAll(
    parameters: FindAllUsersRequestDTO,
  ): Promise<RelayPagination<User>> {
    const keys = Object.keys(parameters.order ?? {});

    if (keys?.length > 1) {
      throw new GraphQLError('Only a single sort parameter can be passed!', {
        extensions: { code: HttpStatus.CONFLICT },
      });
    }

    const relay = await findManyCursorConnection(
      args =>
        this.prisma.user.findMany({
          ...args,
          where: parameters.where,
          orderBy: parameters.order,
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
