import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { ActivateUserUseCase } from 'application/useCases/user/activateUser/ActivateUserUseCase';

describe('Activate User', () => {
  it('should be able to activate User with use case', async () => {
    const userRepository = new InMemoryUserRepository();

    const user = new User({
      email: 'valid-email',
      document: 'valid-document',
      password: 'valid-password',
      full_name: 'valid-full_name',
    });

    await userRepository.create(user);

    const activateUserUseCase = new ActivateUserUseCase(userRepository);

    await activateUserUseCase.execute({
      where: {
        id: user.id,
      },
    });

    expect(userRepository.users[0].active).toBeTruthy();
  });
});
