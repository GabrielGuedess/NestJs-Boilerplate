import { InMemoryAuthRepository } from '@test/repositories/in-memory-auth-repository';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { RefreshTokenUseCase } from 'application/useCases/auth/refreshToken/RefreshTokenUseCase';

describe('Create Token', () => {
  it('should be able create token using refresh token with use case', async () => {
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

    const authUserUseCase = new RefreshTokenUseCase(inMemoryAuthRepository);

    const userLogged = await authUserUseCase.execute({
      id: user.id,
      email: user.email,
    });

    expect(userLogged.token).toBeTruthy();
  });
});
