import { Injectable } from '@nestjs/common';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';

import { FindAllUsersUseCaseRequestDTO } from 'application/dtos/user/FindAllUsersUseCaseDTO';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: FindAllUsersUseCaseRequestDTO): Promise<User[]> {
    const users = await this.userRepository.findAll({
      order: request.order,
      where: request.where,
    });

    return users;
  }
}
