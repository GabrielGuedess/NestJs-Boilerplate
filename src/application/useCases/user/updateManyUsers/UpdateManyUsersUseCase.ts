import { Injectable } from '@nestjs/common';

import { hash } from 'bcrypt';

import { type User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';

import { type UpdateUserUseCaseRequestDTO } from 'application/dtos/user/UpdateUserUseCaseDTO';

@Injectable()
export class UpdateManyUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(request: UpdateUserUseCaseRequestDTO[]): Promise<User[]> {
    const data = await Promise.all(
      request.map(async user => {
        if (user.password) {
          const passwordHash = await hash(user.password, 10);

          return {
            ...user,
            password: passwordHash,
          };
        }

        return user;
      }),
    );

    const updateUsers = await this.userRepository.updateMany(data);

    return updateUsers;
  }
}
