import { Injectable } from '@nestjs/common';

import { hash } from 'bcrypt';

import { type User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { UploaderProvider } from 'domain/providers/UploaderProvider';

import { type UpdateUserUseCaseRequestDTO } from 'application/dtos/user/UpdateUserUseCaseDTO';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private uploaderProvider: UploaderProvider,
  ) {}

  async execute(request: UpdateUserUseCaseRequestDTO): Promise<User> {
    if (request.avatar) {
      const currentUser = await this.userRepository.findUnique({
        where: { id: request.id },
      });

      const { path } = await this.uploaderProvider.upload({
        file: request.avatar,
        filename: currentUser.document,
        folder: `users/${currentUser.document}/avatar`,
      });

      await this.userRepository.update({
        id: request.id,
        avatar_url: path,
      });
    }

    if (request.password) {
      const passwordHash = await hash(request.password, 10);

      await this.userRepository.update({
        id: request.id,
        password: passwordHash,
      });
    }

    const updateUser = await this.userRepository.update({
      id: request.id,
      email: request.email,
      document: request.document,
      full_name: request.full_name,
    });

    return updateUser;
  }
}
