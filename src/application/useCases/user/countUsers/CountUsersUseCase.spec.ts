import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { CountUsersUseCase } from 'application/useCases/user/countUsers/CountUsersUseCase';

describe('Count Users', () => {
  it('should be able to count all users with use case', async () => {
    const usersRepository = new InMemoryUserRepository();

    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
    });

    await usersRepository.create(user);

    const countUsersUseCase = new CountUsersUseCase(usersRepository);

    await countUsersUseCase.execute({ where: {} });

    expect(usersRepository.users).toHaveLength(1);
  });
});
