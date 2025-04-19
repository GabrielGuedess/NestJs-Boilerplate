import { Injectable } from '@nestjs/common';

import { UserRepository } from 'domain/repositories/UserRepository';

import { type CountUsersUseCaseRequestDTO } from 'application/dtos/user/CountUsersUseCaseDTO';

@Injectable()
export class CountUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: CountUsersUseCaseRequestDTO): Promise<number> {
    const user = await this.userRepository.count({ where: request.where });

    return user;
  }
}
