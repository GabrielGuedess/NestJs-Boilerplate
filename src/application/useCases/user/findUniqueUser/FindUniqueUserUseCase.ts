import { Injectable } from '@nestjs/common';

import { type User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';

import { type FindUniqueUserUseCaseRequestDTO } from 'application/dtos/user/FindUniqueUserUseCaseDTO';

@Injectable()
export class FindUniqueUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(request: FindUniqueUserUseCaseRequestDTO): Promise<User> {
    const user = await this.userRepository.findUnique({ where: request.where });

    return user;
  }
}
