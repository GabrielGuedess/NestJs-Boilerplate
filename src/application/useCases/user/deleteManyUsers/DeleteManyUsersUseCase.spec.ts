import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { InMemoryUploaderProvider } from '@test/providers/in-memory-uploader-provider';

import { User } from 'domain/entities/user/User';

import { DeleteManyUsersUseCase } from 'application/useCases/user/deleteManyUsers/DeleteManyUsersUseCase';

describe('Delete User', () => {
  it('should be able to delete many a user with use case', async () => {
    const userRepository = new InMemoryUserRepository();
    const uploaderProvider = new InMemoryUploaderProvider();

    const deleteManyUsersUseCase = new DeleteManyUsersUseCase(
      userRepository,
      uploaderProvider,
    );

    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
    });

    await userRepository.create(user);

    const deletedUsers = await deleteManyUsersUseCase.execute([user.id]);

    expect(deletedUsers).toStrictEqual([user]);
  });
});
