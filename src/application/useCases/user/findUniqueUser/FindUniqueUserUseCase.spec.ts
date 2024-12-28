import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { FindUniqueUserUseCase } from 'application/useCases/user/findUniqueUser/FindUniqueUserUseCase';

describe('Find User By Id', () => {
  it('should be able to find a user with use case', async () => {
    const usersRepository = new InMemoryUserRepository();

    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
    });

    await usersRepository.create(user);

    const findUniqueUserUseCase = new FindUniqueUserUseCase(usersRepository);

    const foundUser = await findUniqueUserUseCase.execute({
      where: { id: user.id },
    });

    expect(foundUser).toEqual(user);
  });
});
