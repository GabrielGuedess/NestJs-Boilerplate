import { Injectable } from '@nestjs/common';

import { hash } from 'bcrypt';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { UploaderProvider } from 'domain/providers/UploaderProvider';

import { CreateUserUseCaseRequestDTO } from 'application/dtos/user/CreateUserUseCaseDTO';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly uploaderProvider: UploaderProvider,
  ) {}

  async execute(request: CreateUserUseCaseRequestDTO): Promise<User> {
    const avatar =
      request?.avatar &&
      (await this.uploaderProvider.upload({
        file: request.avatar,
        filename: request.document,
        folder: `users/${request.document}/avatar`,
      }));

    const passwordHash = await hash(request.password, 10);

    const createUser = new User({
      email: request.email,
      password: passwordHash,
      document: request.document,
      full_name: request.full_name,
      ...(avatar?.path && { avatar_url: avatar.path }),
    });

    const user = await this.userRepository.create(createUser);

    return user;
  }
}
