import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { CountUsersUseCase } from 'application/useCases/user/countUsers/CountUsersUseCase';

describe('Count Users', () => {
  it('should be able to count all user with use case', async () => {
    const usersRepository = new InMemoryUserRepository();

    const user = new User({
      email: 'valid-email',
      document: 'valid-document',
      password: 'valid-password',
      full_name: 'valid-full_name',
    });

    await usersRepository.create(user);

    const countUsersUseCase = new CountUsersUseCase(usersRepository);

    await countUsersUseCase.execute({ where: {} });

    expect(usersRepository.users).toHaveLength(1);
  });
});
