import { Injectable } from '@nestjs/common';

import { hash } from 'bcrypt';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { UploaderProvider } from 'domain/providers/UploaderProvider';

import { CreateUserUseCaseRequestDTO } from 'application/dtos/user/CreateUserUseCaseDTO';

@Injectable()
export class CreateManyUsersUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly uploaderProvider: UploaderProvider,
  ) {}

  async execute(request: CreateUserUseCaseRequestDTO[]): Promise<User[]> {
    const users = request.map(async data => {
      const avatar =
        data?.avatar &&
        (await this.uploaderProvider.upload({
          file: data.avatar,
          filename: data.document,
          folder: `users/${data.document}/avatar`,
        }));

      const passwordHash = await hash(data.password, 10);

      const createUser = new User({
        email: data.email,
        password: passwordHash,
        document: data.document,
        full_name: data.full_name,
        ...(avatar?.path && { avatar_url: avatar.path }),
      });

      const createdUser = await this.userRepository.create(createUser);

      return createdUser;
    });

    const createdUsers = await Promise.all(users);

    return createdUsers;
  }
}
