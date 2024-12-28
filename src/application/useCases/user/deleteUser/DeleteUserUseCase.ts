import { Injectable } from '@nestjs/common';

import { type User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { UploaderProvider } from 'domain/providers/UploaderProvider';

import { type DeleteUserUseCaseRequestDTO } from 'application/dtos/user/DeleteUserUseCaseDTO';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private uploaderProvider: UploaderProvider,
  ) {}

  async execute(request: DeleteUserUseCaseRequestDTO): Promise<User> {
    const currentUser = await this.userRepository.findUnique({
      where: { id: request.id },
    });

    if (currentUser.avatarUrl) {
      await this.uploaderProvider.delete({
        isFolder: true,
        path: `${currentUser.avatarUrl}`,
        folder: `users/${currentUser.document}/avatar`,
      });
    }

    const user = await this.userRepository.delete(request.id);

    return user;
  }
}
