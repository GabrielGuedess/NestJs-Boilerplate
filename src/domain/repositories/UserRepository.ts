import { type User } from 'domain/entities/user/User';
import { type RelayPagination } from 'domain/shared/dtos/RelayPagination';
import { type OffsetPagination } from 'domain/shared/dtos/OffsetPagination';
import {
  type CountUsersRequestDTO,
  type UpdateUserRequestDTO,
  type DeleteUserRequestDTO,
  type FindAllUsersRequestDTO,
  type ActivateUserRequestDTO,
  type FindFirstUserRequestDTO,
  type FindUniqueUserRequestDTO,
  type DeactivateUserRequestDTO,
  type PaginationCursorUsersRequestDTO,
  type PaginationOffsetUsersRequestDTO,
} from 'domain/dtos/repositories/UserRepositoryDTO';

export abstract class UserRepository {
  abstract create(user: User): Promise<User>;
  abstract createMany(users: User[]): Promise<User[]>;
  abstract delete(parameters: DeleteUserRequestDTO): Promise<User>;
  abstract update(parameters: UpdateUserRequestDTO): Promise<User>;
  abstract count(parameters: CountUsersRequestDTO): Promise<number>;
  abstract activate(parameters: ActivateUserRequestDTO): Promise<User>;
  abstract findAll(parameters: FindAllUsersRequestDTO): Promise<User[]>;
  abstract findFirst(parameters: FindFirstUserRequestDTO): Promise<User>;
  abstract deactivate(parameters: DeactivateUserRequestDTO): Promise<User>;
  abstract findUnique(parameters: FindUniqueUserRequestDTO): Promise<User>;
  abstract updateMany(parameters: UpdateUserRequestDTO[]): Promise<User[]>;
  abstract deleteMany(parameters: DeleteUserRequestDTO[]): Promise<User[]>;
  abstract paginationCursor(
    parameters: PaginationCursorUsersRequestDTO,
  ): Promise<RelayPagination<User>>;
  abstract paginationOffset(
    parameters: PaginationOffsetUsersRequestDTO,
  ): Promise<OffsetPagination<User>>;
}
