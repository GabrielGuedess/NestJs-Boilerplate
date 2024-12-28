import { Injectable } from '@nestjs/common';

import { type User } from 'domain/entities/user/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { UploaderProvider } from 'domain/providers/UploaderProvider';

@Injectable()
export class DeleteManyUsersUseCase {
  constructor(
    private userRepository: UserRepository,
    private uploaderProvider: UploaderProvider,
  ) {}

  async execute(request: string[]): Promise<User[]> {
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
