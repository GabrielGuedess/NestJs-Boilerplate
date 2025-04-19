import { Injectable } from '@nestjs/common';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';

import { FindFirstUserUseCaseRequestDTO } from 'application/dtos/user/FindFirstUserUseCaseDTO';

@Injectable()
export class FindFirstUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: FindFirstUserUseCaseRequestDTO): Promise<User> {
    const user = await this.userRepository.findFirst({
      where: request.where,
    });

    return user;
  }
}
