import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { InMemoryUploaderProvider } from '@test/providers/in-memory-uploader-provider';

import { type FileUploadDTO } from 'domain/shared/dtos/FileUploadDTO';

import { CreateUserUseCase } from 'application/useCases/user/createUser/CreateUserUseCase';

describe('Create User', () => {
  it('should be able to create a user with use case', async () => {
    const usersRepository = new InMemoryUserRepository();
    const uploaderProvider = new InMemoryUploaderProvider();

    const createUserUseCase = new CreateUserUseCase(
      usersRepository,
      uploaderProvider,
    );

    const user = await createUserUseCase.execute({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
    });

    expect(usersRepository.users).toHaveLength(1);
    expect(usersRepository.users[0]).toEqual(user);
  });

  it('should be able to create a user upload avatar with use case', async () => {
    const usersRepository = new InMemoryUserRepository();
    const uploaderProvider = new InMemoryUploaderProvider();

    const createUserUseCase = new CreateUserUseCase(
      usersRepository,
      uploaderProvider,
    );

    const user = await createUserUseCase.execute({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar: { filename: 'avatar.jpg' } as FileUploadDTO,
    });

    expect(usersRepository.users).toHaveLength(1);
    expect(usersRepository.users[0]).toEqual(user);
    expect(usersRepository.users[0].avatarUrl).toBe(
      `users/${user.document}/avatar/avatar.jpg`,
    );
  });
});
