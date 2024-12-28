import { InMemoryAuthRepository } from '@test/repositories/in-memory-auth-repository';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { AuthUserUseCase } from 'application/useCases/auth/authUser/AuthUserUseCase';

describe('Sign In User', () => {
  it('should be able sign in a user with use case', async () => {
    const usersRepository = new InMemoryUserRepository();

    const password = '123456';

    const user = await usersRepository.create(
      new User({
        password,
        document: '44754358899',
        full_name: 'Gabriel Guedes',
        email: 'gabrielrguedess@gmail.com',
        avatar_url: 'https://github.com/GabrielGuedess.png',
      }),
    );

    const inMemoryAuthRepository = new InMemoryAuthRepository(usersRepository);

    const authUserUseCase = new AuthUserUseCase(inMemoryAuthRepository);

    const userLogged = await authUserUseCase.execute({
      password,
      email: user.email,
    });

    expect(userLogged.token).toBeTruthy();
  });

  it('should not be able sign in a user when user number is wrong', async () => {
    const usersRepository = new InMemoryUserRepository();

    const password = '123456';

    const user = await usersRepository.create(
      new User({
        password,
        document: '44754358899',
        full_name: 'Gabriel Guedes',
        email: 'gabrielrguedess@gmail.com',
        avatar_url: 'https://github.com/GabrielGuedess.png',
      }),
    );

    const inMemoryAuthRepository = new InMemoryAuthRepository(usersRepository);

    const authUserUseCase = new AuthUserUseCase(inMemoryAuthRepository);

    await expect(
      async () =>
        await authUserUseCase.execute({
          password: user.password,
          email: 'wrong@gmail.com',
        }),
    ).rejects.toThrow('E-mail not found!');
  });

  it('should not be able sign in a user when password is wrong', async () => {
    const usersRepository = new InMemoryUserRepository();

    const password = '123456';
    const passwordWrong = '000000';

    const user = await usersRepository.create(
      new User({
        password,
        document: '44754358899',
        full_name: 'Gabriel Guedes',
        email: 'gabrielrguedess@gmail.com',
        avatar_url: 'https://github.com/GabrielGuedess.png',
      }),
    );

    const inMemoryAuthRepository = new InMemoryAuthRepository(usersRepository);

    const authUserUseCase = new AuthUserUseCase(inMemoryAuthRepository);

    await expect(
      async () =>
        await authUserUseCase.execute({
          email: user.email,
          password: passwordWrong,
        }),
    ).rejects.toThrow('Password incorrect!');
  });
});
