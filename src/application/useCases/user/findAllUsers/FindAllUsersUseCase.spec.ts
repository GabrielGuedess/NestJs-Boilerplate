import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { FindAllUsersUseCase } from 'application/useCases/user/findAllUsers/FindAllUsersUseCase';

describe('Find All Users', () => {
  it('should be able to find all user with use case', async () => {
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

    const findAllUsersUseCase = new FindAllUsersUseCase(usersRepository);

    const foundUsers = await findAllUsersUseCase.execute({});

    expect(foundUsers).toEqual([userExist]);
  });
});
