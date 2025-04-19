import { Injectable } from '@nestjs/common';

import { User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { UploaderProvider } from 'domain/providers/UploaderProvider';

import { DeleteUserUseCaseRequestDTO } from 'application/dtos/user/DeleteUserUseCaseDTO';

@Injectable()
export class DeleteManyUsersUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly uploaderProvider: UploaderProvider,
  ) {}

  async execute(request: DeleteUserUseCaseRequestDTO[]): Promise<User[]> {
    const users = await this.userRepository.deleteMany(request);

    for await (const user of users) {
      if (user.avatarUrl) {
        await this.uploaderProvider.delete({
          isFolder: true,
          path: `${user.avatarUrl}`,
          folder: `users/${user.document}/avatar`,
        });
      }
    }

    return users;
  }
}
