import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { InMemoryUploaderProvider } from '@test/providers/in-memory-uploader-provider';

import { User } from 'domain/entities/user/User';

import { DeleteUserUseCase } from 'application/useCases/user/deleteUser/DeleteUserUseCase';

describe('Delete User', () => {
  it('should be able to delete a user with use case', async () => {
    const userRepository = new InMemoryUserRepository();
    const uploaderProvider = new InMemoryUploaderProvider();

    const deleteUserUseCase = new DeleteUserUseCase(
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

    const deleteUser = await deleteUserUseCase.execute({
      id: user.id,
    });

    expect(deleteUser).toBe(user);
  });
});
