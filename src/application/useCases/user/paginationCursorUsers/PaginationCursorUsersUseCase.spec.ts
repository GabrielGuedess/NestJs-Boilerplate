import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { PaginationCursorUsersUseCase } from 'application/useCases/user/paginationCursorUsers/PaginationCursorUsersUseCase';

describe('Pagination Cursor Users', () => {
  it('should be able to pagination cursor users with use case', async () => {
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

    const paginationCursorUsersUseCase = new PaginationCursorUsersUseCase(
      usersRepository,
    );

    const foundUsers = await paginationCursorUsersUseCase.execute({});

    expect(foundUsers).toEqual({
      count: 1,
      totalCount: 1,
      nodes: [userExist],
      edges: [{ node: userExist, cursor: userExist.id }],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        endCursor: userExist.id,
        startCursor: userExist.id,
      },
    });
  });
});
