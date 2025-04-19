import { Injectable } from '@nestjs/common';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';

import { DeactivateUserUseCaseRequestDTO } from 'application/dtos/user/DeactivateUserUseCaseDTO';

@Injectable()
export class DeactivateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: DeactivateUserUseCaseRequestDTO): Promise<User> {
    const user = await this.userRepository.deactivate({ where: request.where });

    return user;
  }
}
