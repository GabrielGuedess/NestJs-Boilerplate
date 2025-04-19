import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { UpdateManyUsersUseCase } from 'application/useCases/user/updateManyUsers/UpdateManyUsersUseCase';

describe('Update User', () => {
  it('should be able to update a user with use case', async () => {
    const userRepository = new InMemoryUserRepository();

    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
    });

    await userRepository.create(user);

    const updateManyUsersUseCase = new UpdateManyUsersUseCase(userRepository);

    const newDocument = '123';

    await updateManyUsersUseCase.execute([
      {
        where: { id: user.id },
        data: { document: newDocument },
      },
    ]);

    expect(userRepository.users[0].document).toEqual(newDocument);
  });

  it('should be able to update password user with use case', async () => {
    const userRepository = new InMemoryUserRepository();

    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
    });

    await userRepository.create(user);

    const updateManyUsersUseCase = new UpdateManyUsersUseCase(userRepository);

    const oldPassword = user.password;
    const newPassword = '987654321';

    await updateManyUsersUseCase.execute([
      {
        where: { id: user.id },
        data: { password: newPassword },
      },
    ]);

    expect(userRepository.users[0].password).not.toBe(oldPassword);
  });
});
