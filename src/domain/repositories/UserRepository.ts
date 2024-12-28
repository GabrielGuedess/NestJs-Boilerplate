import { type User } from 'domain/entities/user/User';
import { type RelayPagination } from 'domain/shared/dtos/RelayPagination';
import {
  type FindUserRequestDTO,
  type CountUsersRequestDTO,
  type UpdateUserRequestDTO,
  type FindAllUsersRequestDTO,
} from 'domain/dtos/repositories/UserRepositoryDTO';

export abstract class UserRepository {
  abstract create(user: User): Promise<User>;
  abstract delete(id: string): Promise<User>;
  abstract deleteMany(ids: string[]): Promise<User[]>;
  abstract update(parameters: UpdateUserRequestDTO): Promise<User>;
  abstract count(parameters: CountUsersRequestDTO): Promise<number>;
  abstract findUnique(parameters: FindUserRequestDTO): Promise<User>;
  abstract updateMany(parameters: UpdateUserRequestDTO[]): Promise<User[]>;
  abstract findAll(
    parameters: FindAllUsersRequestDTO,
  ): Promise<RelayPagination<User>>;
}
