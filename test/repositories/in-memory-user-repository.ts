import { type User } from 'domain/entities/user/User';
import { type UserRepository } from 'domain/repositories/UserRepository';
import { type RelayPagination } from 'domain/shared/dtos/RelayPagination';
import { type OffsetPagination } from 'domain/shared/dtos/OffsetPagination';
import {
  type UpdateUserRequestDTO,
  type DeleteUserRequestDTO,
  type FindFirstUserRequestDTO,
  type FindUniqueUserRequestDTO,
  type PaginationOffsetUsersRequestDTO,
  type PaginationCursorUsersRequestDTO,
} from 'domain/dtos/repositories/UserRepositoryDTO';

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async findAll(): Promise<User[]> {
    return this.users;
  }

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

  async createMany(users: User[]): Promise<User[]> {
    const existingUsers = users.filter(user =>
      this.users.some(existingUser => existingUser.id === user.id),
    );

    if (existingUsers.length > 0) {
      throw new Error('Some users already exist!');
    }

    this.users.push(...users);

    return users;
  }

  async findUnique(parameters: FindUniqueUserRequestDTO): Promise<User> {
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

  async activate(parameters: DeleteUserRequestDTO): Promise<User> {
    const user = this.users.find(
      item =>
        item.id === parameters.where.id ||
        item.email === parameters.where.email ||
        item.document === parameters.where.document,
    );

    if (!user) {
      throw new Error('User not found!');
    }

    user.active = true;

    return user;
  }

  async deactivate(parameters: DeleteUserRequestDTO): Promise<User> {
    const user = this.users.find(
      item =>
        item.id === parameters.where.id ||
        item.email === parameters.where.email ||
        item.document === parameters.where.document,
    );

    if (!user) {
      throw new Error('User not found!');
    }

    user.active = false;

    return user;
  }

  async delete(parameters: DeleteUserRequestDTO): Promise<User> {
    const user = this.users.find(
      item =>
        item.id === parameters.where.id ||
        item.email === parameters.where.email ||
        item.document === parameters.where.document,
    );

    if (!user) {
      throw new Error('User not found!');
    }

    const userIndex = this.users.findIndex(item => item.id === user.id);

    this.users.splice(userIndex, 1);

    return user;
  }

  async deleteMany(parameters: DeleteUserRequestDTO[]): Promise<User[]> {
    const users: User[] = [];

    for (const { where } of parameters) {
      const user = this.users.find(
        item =>
          item.id === where.id ||
          item.email === where.email ||
          item.document === where.document,
      );

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
    const user = this.users.find(
      item =>
        item.id === parameters.where.id ||
        item.email === parameters.where.email ||
        item.document === parameters.where.document,
    );

    if (!user) {
      throw new Error('User not found!');
    }

    const userIndex = this.users.findIndex(item => item.id === user.id);

    user.document = parameters?.data?.document ?? user.document;
    user.password = parameters?.data?.password ?? user.password;
    user.avatarUrl = parameters?.data?.avatar_url ?? user.avatarUrl;

    this.users[userIndex] = user;

    return user;
  }

  async findFirst(parameters: FindFirstUserRequestDTO): Promise<User> {
    const user = this.users.find(currentUser => {
      if (
        parameters.where?.id &&
        currentUser.id !== parameters.where.id.equals
      ) {
        return true;
      }

      if (
        parameters.where?.email &&
        currentUser.email !== parameters.where.email.equals
      ) {
        return true;
      }

      if (
        parameters.where?.document &&
        currentUser.document !== parameters.where.document.equals
      ) {
        return true;
      }

      return false;
    });

    if (!user) {
      throw new Error('User not found!');
    }

    return user;
  }

  async updateMany(parameters: UpdateUserRequestDTO[]): Promise<User[]> {
    const users: User[] = [];

    for (const current of parameters) {
      const user = this.users.find(
        item =>
          item.id === current.where.id ||
          item.email === current.where.email ||
          item.document === current.where.document,
      );

      if (!user) {
        throw new Error('User not found!');
      }

      const userIndex = this.users.findIndex(item => item.id === user.id);

      user.email = current.data.email;
      user.document = current.data.document;
      user.password = current.data.password;
      user.fullName = current.data.full_name;
      user.avatarUrl = current.data.avatar_url;

      this.users[userIndex] = user;

      users.push(user);
    }

    return users;
  }

  async paginationCursor(
    parameters: PaginationCursorUsersRequestDTO,
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

  async paginationOffset(
    parameters: PaginationOffsetUsersRequestDTO,
  ): Promise<OffsetPagination<User>> {
    const { where, order, page = 1, limit = 10 } = parameters;

    const filteredUsers = this.users.filter(user => {
      if (where?.email && user.email !== where.email.equals) {
        return false;
      }

      if (where?.document && user.document !== where.document.equals) {
        return false;
      }

      return true;
    });

    const orderedUsers = filteredUsers.sort((a, b) => {
      if (!order) return 0;

      for (const [key, direction] of Object.entries(order)) {
        const fieldA = a[key as keyof User];
        const fieldB = b[key as keyof User];

        if (fieldA < fieldB) return direction === 'asc' ? -1 : 1;
        if (fieldA > fieldB) return direction === 'asc' ? 1 : -1;
      }

      return 0;
    });

    const offset = (page - 1) * limit;

    const paginatedUsers = orderedUsers.slice(offset, offset + limit);

    return {
      nodes: paginatedUsers,
      count: paginatedUsers.length,
      totalCount: filteredUsers.length,
      pageInfo: {
        currentPage: page,
        nextPage: page + 1,
        previousPage: page - 1,
        isFirstPage: page === 1,
        isLastPage: offset + limit >= filteredUsers.length,
      },
    };
  }
}
