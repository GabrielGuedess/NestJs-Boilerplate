import { Injectable } from '@nestjs/common';

import { type User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';

import { type ActivateUserUseCaseRequestDTO } from 'application/dtos/user/ActivateUserUseCaseDTO';

@Injectable()
export class ActivateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(request: ActivateUserUseCaseRequestDTO): Promise<User> {
    const user = await this.userRepository.activate({ where: request.where });

    return user;
  }
}
