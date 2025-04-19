import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { ActivateUserUseCase } from 'application/useCases/user/activateUser/ActivateUserUseCase';

describe('Activate User', () => {
  it('should be able to activate user with use case', async () => {
    const usersRepository = new InMemoryUserRepository();

    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
      active: false,
    });

    await usersRepository.create(user);

    const activateUserUseCase = new ActivateUserUseCase(usersRepository);

    await activateUserUseCase.execute({
      where: {
        document: '44754358899',
      },
    });

    expect(usersRepository.users[0].active).toBeTruthy();
  });
});
