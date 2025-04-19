import { Injectable } from '@nestjs/common';

import { hash } from 'bcrypt';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { UploaderProvider } from 'domain/providers/UploaderProvider';

import { UpdateUserUseCaseRequestDTO } from 'application/dtos/user/UpdateUserUseCaseDTO';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly uploaderProvider: UploaderProvider,
  ) {}

  async execute(request: UpdateUserUseCaseRequestDTO): Promise<User> {
    if (request?.data?.avatar?.filename) {
      const currentUser = await this.userRepository.findUnique({
        where: request.where,
      });

      const { path } = await this.uploaderProvider.upload({
        file: request.data.avatar,
        filename: currentUser.document,
        folder: `users/${currentUser.document}/avatar`,
      });

      await this.userRepository.update({
        where: request.where,
        data: {
          avatar_url: path,
        },
      });
    }

    if (request?.data?.password) {
      const passwordHash = await hash(request.data.password, 10);

      await this.userRepository.update({
        where: request.where,
        data: {
          password: passwordHash,
        },
      });
    }

    const updateUser = await this.userRepository.update({
      data: request.data,
      where: request.where,
    });

    return updateUser;
  }
}
