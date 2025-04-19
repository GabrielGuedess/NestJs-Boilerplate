import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { PaginationCursorUsersUseCase } from 'application/useCases/user/paginationCursorUsers/PaginationCursorUsersUseCase';

describe('Pagination Cursor Users', () => {
  it('should be able to pagination cursor Users with use case', async () => {
    const userRepository = new InMemoryUserRepository();

    const userExist = await userRepository.create(
      new User({
        email: 'valid-email',
        document: 'valid-document',
        password: 'valid-password',
        full_name: 'valid-full_name',
      }),
    );

    const paginationCursorUsersUseCase = new PaginationCursorUsersUseCase(
      userRepository,
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
