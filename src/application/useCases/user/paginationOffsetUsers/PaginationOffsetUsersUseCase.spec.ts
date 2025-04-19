import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { User } from 'domain/entities/user/User';

import { PaginationOffsetUsersUseCase } from 'application/useCases/user/paginationOffsetUsers/PaginationOffsetUsersUseCase';

describe('Pagination Offset Users', () => {
  it('should be able to pagination offset users with use case', async () => {
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

    const paginationOffsetUsersUseCase = new PaginationOffsetUsersUseCase(
      usersRepository,
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
