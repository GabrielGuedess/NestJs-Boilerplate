import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { DeactivateUserUseCase } from 'application/useCases/user/deactivateUser/DeactivateUserUseCase';

describe('Deactivate User', () => {
  it('should be able to deactivate user with use case', async () => {
    const usersRepository = new InMemoryUserRepository();

    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
      active: true,
    });

    await usersRepository.create(user);

    const deactivateUserUseCase = new DeactivateUserUseCase(usersRepository);

    await deactivateUserUseCase.execute({
      where: {
        document: '44754358899',
      },
    });

    expect(usersRepository.users[0].active).toBeFalsy();
  });
});
