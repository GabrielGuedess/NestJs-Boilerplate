import { Injectable } from '@nestjs/common';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { UploaderProvider } from 'domain/providers/UploaderProvider';

import { DeleteUserUseCaseRequestDTO } from 'application/dtos/user/DeleteUserUseCaseDTO';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly uploaderProvider: UploaderProvider,
  ) {}

  async execute(request: DeleteUserUseCaseRequestDTO): Promise<User> {
    const currentUser = await this.userRepository.findUnique({
      where: request.where,
    });

    if (currentUser?.avatarUrl) {
      await this.uploaderProvider.delete({
        isFolder: true,
        path: `${currentUser.avatarUrl}`,
        folder: `users/${currentUser.document}/avatar`,
      });
    }

    const user = await this.userRepository.delete({ where: request.where });

    return user;
  }
}
