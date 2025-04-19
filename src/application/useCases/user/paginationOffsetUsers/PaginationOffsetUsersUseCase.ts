import { Injectable } from '@nestjs/common';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { OffsetPagination } from 'domain/shared/dtos/OffsetPagination';

import { PaginationOffsetUsersUseCaseRequestDTO } from 'application/dtos/user/PaginationOffsetUsersUseCaseDTO';

@Injectable()
export class PaginationOffsetUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    request: PaginationOffsetUsersUseCaseRequestDTO,
  ): Promise<OffsetPagination<User>> {
    const users = await this.userRepository.paginationOffset({
      page: request.page,
      limit: request.limit,
      order: request.order,
      where: request.where,
    });

    return users;
  }
}
