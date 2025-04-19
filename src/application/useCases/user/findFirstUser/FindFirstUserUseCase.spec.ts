import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { FindFirstUserUseCase } from 'application/useCases/user/findFirstUser/FindFirstUserUseCase';

describe('Find First User', () => {
  it('should be able to find first User with use case', async () => {
    const userRepository = new InMemoryUserRepository();

    const userExist = await userRepository.create(
      new User({
        email: 'valid-email',
        document: 'valid-document',
        password: 'valid-password',
        full_name: 'valid-full_name',
      }),
    );

    const findFirstUsersUseCase = new FindFirstUserUseCase(userRepository);

    const foundUsers = await findFirstUsersUseCase.execute({
      where: {
        email: { contains: userExist.email },
      },
    });

    expect(foundUsers).toEqual(userExist);
  });
});
