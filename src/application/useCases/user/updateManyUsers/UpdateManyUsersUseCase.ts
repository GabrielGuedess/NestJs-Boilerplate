import { Injectable } from '@nestjs/common';

import { hash } from 'bcrypt';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';

import { UpdateUserUseCaseRequestDTO } from 'application/dtos/user/UpdateUserUseCaseDTO';

@Injectable()
export class UpdateManyUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: UpdateUserUseCaseRequestDTO[]): Promise<User[]> {
    const updatedData = await Promise.all(
      request.map(async ({ data, where }) => {
        if (data.password) {
          const passwordHash = await hash(data.password, 10);

          return {
            where,
            data: {
              ...data,
              password: passwordHash,
            },
          };
        }

        return { data, where };
      }),
    );

    const updateUsers = await this.userRepository.updateMany(updatedData);

    return updateUsers;
  }
}
