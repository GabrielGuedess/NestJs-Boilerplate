import { Injectable } from '@nestjs/common';

import { type User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { RelayPagination } from 'domain/shared/dtos/RelayPagination';

import { type FindAllUsersUseCaseRequestDTO } from 'application/dtos/user/FindAllUsersUseCaseDTO';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    request: FindAllUsersUseCaseRequestDTO,
  ): Promise<RelayPagination<User>> {
    const users = await this.userRepository.findAll({
      last: request.last,
      order: request.order,
      after: request.after,
      first: request.first,
      where: request.where,
      before: request.before,
    });

    return users;
  }
}
