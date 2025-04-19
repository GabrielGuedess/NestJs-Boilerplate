import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { PaginationOffsetUsersUseCase } from 'application/useCases/user/paginationOffsetUsers/PaginationOffsetUsersUseCase';

describe('Pagination Offset Users', () => {
  it('should be able to pagination offset Users with use case', async () => {
    const userRepository = new InMemoryUserRepository();

    const userExist = await userRepository.create(
      new User({
        email: 'valid-email',
        document: 'valid-document',
        password: 'valid-password',
        full_name: 'valid-full_name',
      }),
    );

    const paginationOffsetUsersUseCase = new PaginationOffsetUsersUseCase(
      userRepository,
    );

    const foundUsers = await paginationOffsetUsersUseCase.execute({});

    expect(foundUsers).toEqual({
      count: 1,
      totalCount: 1,
      nodes: [userExist],
      pageInfo: {
        nextPage: 2,
        currentPage: 1,
        previousPage: 0,
        isLastPage: true,
        isFirstPage: true,
      },
    });
  });
});
