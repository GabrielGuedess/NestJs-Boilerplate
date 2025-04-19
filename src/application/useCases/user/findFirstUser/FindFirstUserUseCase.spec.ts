import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { FindFirstUserUseCase } from 'application/useCases/user/findFirstUser/FindFirstUserUseCase';

describe('Find First User', () => {
  it('should be able to find first user with use case', async () => {
    const usersRepository = new InMemoryUserRepository();

    const userExist = await usersRepository.create(
      new User({
        password: '123456789',
        document: '44754358899',
        full_name: 'Gabriel Guedes',
        email: 'gabrielrguedess@gmail.com',
        avatar_url: 'https://github.com/GabrielGuedess.png',
      }),
    );

    const findFirstUsersUseCase = new FindFirstUserUseCase(usersRepository);

    const foundUsers = await findFirstUsersUseCase.execute({
      where: {
        email: { contains: userExist.email },
      },
    });

    expect(foundUsers).toEqual(userExist);
  });
});
