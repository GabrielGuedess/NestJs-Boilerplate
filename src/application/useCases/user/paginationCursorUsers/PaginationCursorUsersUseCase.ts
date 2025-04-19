import { Injectable } from '@nestjs/common';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { RelayPagination } from 'domain/shared/dtos/RelayPagination';

import { PaginationCursorUsersUseCaseRequestDTO } from 'application/dtos/user/PaginationCursorUsersUseCaseDTO';

@Injectable()
export class PaginationCursorUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    request: PaginationCursorUsersUseCaseRequestDTO,
  ): Promise<RelayPagination<User>> {
    const users = await this.userRepository.paginationCursor({
      last: request.last,
      after: request.after,
      first: request.first,
      order: request.order,
      where: request.where,
      before: request.before,
    });

    return users;
  }
}
