import { type User } from 'domain/entities/user/User';
import { type UserRepository } from 'domain/repositories/UserRepository';
import { type RelayPagination } from 'domain/shared/dtos/RelayPagination';
import {
  type FindUserRequestDTO,
  type UpdateUserRequestDTO,
  type FindAllUsersRequestDTO,
} from 'domain/dtos/repositories/UserRepositoryDTO';

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async count(): Promise<number> {
    return this.users.length;
  }

  async create(user: User): Promise<User> {
    const isUserExist = this.users.some(item => item.id === user.id);

    if (isUserExist) {
      throw new Error('User already exists!');
    }

    this.users.push(user);

    return user;
  }

  async delete(id: string): Promise<User> {
    const user = this.users.find(item => item.id === id);

    if (!user) {
      throw new Error('User not found!');
    }

    const userIndex = this.users.findIndex(item => item.id === user.id);

    this.users.splice(userIndex, 1);

    return user;
  }

  async findUnique(parameters: FindUserRequestDTO): Promise<User> {
    const user = this.users.find(
      item =>
        item.id === parameters.where.id ||
        item.email === parameters.where.email ||
        item.document === parameters.where.document,
    );

    if (!user) {
      throw new Error('User not found!');
    }

    return user;
  }

  async deleteMany(ids: string[]): Promise<User[]> {
    const users: User[] = [];

    for (const id of ids) {
      const user = this.users.find(item => item.id === id);

      if (!user) {
        throw new Error('User not found!');
      }

      const userIndex = this.users.findIndex(item => item.id === user.id);

      this.users.splice(userIndex, 1);

      users.push(user);
    }

    return users;
  }

  async update(parameters: UpdateUserRequestDTO): Promise<User> {
    const user = this.users.find(item => item.id === parameters.id);

    if (!user) {
      throw new Error('User not found!');
    }

    const userIndex = this.users.findIndex(item => item.id === user.id);

    user.document = parameters?.document ?? user.document;
    user.password = parameters?.password ?? user.password;
    user.avatarUrl = parameters?.avatar_url ?? user.avatarUrl;

    this.users[userIndex] = user;

    return user;
  }

  async updateMany(parameters: UpdateUserRequestDTO[]): Promise<User[]> {
    const users: User[] = [];

    for (const current of parameters) {
      const user = this.users.find(item => item.id === current.id);

      if (!user) {
        throw new Error('User not found!');
      }

      const userIndex = this.users.findIndex(item => item.id === user.id);

      user.email = current.email;
      user.document = current.document;
      user.password = current.password;
      user.fullName = current.full_name;
      user.avatarUrl = current.avatar_url;

      this.users[userIndex] = user;

      users.push(user);
    }

    return users;
  }

  async findAll(
    parameters: FindAllUsersRequestDTO,
  ): Promise<RelayPagination<User>> {
    const relay: RelayPagination<User> = {
      nodes: this.users,
      count: this.users.length,
      totalCount: this.users.length,
      edges: this.users.map(item => ({
        node: item,
        cursor: item.id,
      })),
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: this.users.slice(parameters.first, parameters.last)[0].id,
        endCursor: this.users.slice(parameters.first, parameters.last).at(-1)
          .id,
      },
    };

    const edges = relay.edges.map(edge => ({
      ...edge,
      node: edge.node,
    }));

    const nodes = relay.edges.map(edge => edge.node);

    return {
      edges,
      nodes,
      count: relay.count,
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
