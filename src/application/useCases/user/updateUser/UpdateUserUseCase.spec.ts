import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { InMemoryUploaderProvider } from '@test/providers/in-memory-uploader-provider';

import { User } from 'domain/entities/user/User';
import { type FileUploadDTO } from 'domain/shared/dtos/FileUploadDTO';

import { UpdateUserUseCase } from 'application/useCases/user/updateUser/UpdateUserUseCase';

describe('Update User', () => {
  it('should be able to update a user with use case', async () => {
    const userRepository = new InMemoryUserRepository();
    const uploaderProvider = new InMemoryUploaderProvider();

    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
    });

    await userRepository.create(user);

    const updateUserUseCase = new UpdateUserUseCase(
      userRepository,
      uploaderProvider,
    );

    const newDocument = '123';

    await updateUserUseCase.execute({
      id: user.id,
      document: newDocument,
    });

    expect(userRepository.users[0].document).toEqual(newDocument);
  });

  it('should be able to update avatar user with use case', async () => {
    const userRepository = new InMemoryUserRepository();
    const uploaderProvider = new InMemoryUploaderProvider();

    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
    });

    await userRepository.create(user);

    const updateUserUseCase = new UpdateUserUseCase(
      userRepository,
      uploaderProvider,
    );

    await updateUserUseCase.execute({
      id: user.id,
      avatar: { filename: 'avatar.jpg' } as FileUploadDTO,
    });

    expect(userRepository.users[0].avatarUrl).toBe(
      `users/${user.document}/avatar/avatar.jpg`,
    );
  });

  it('should be able to update password user with use case', async () => {
    const userRepository = new InMemoryUserRepository();
    const uploaderProvider = new InMemoryUploaderProvider();

    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
    });

    await userRepository.create(user);

    const updateUserUseCase = new UpdateUserUseCase(
      userRepository,
      uploaderProvider,
    );

    const oldPassword = user.password;
    const newPassword = '987654321';

    await updateUserUseCase.execute({
      id: user.id,
      password: newPassword,
    });

    expect(userRepository.users[0].password).not.toBe(oldPassword);
  });
});
