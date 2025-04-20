import { type INestApplication } from '@nestjs/common';
import { Test, type TestingModule } from '@nestjs/testing';

import { print } from 'graphql';
import request from 'supertest';
import { gql } from 'apollo-server-express';

import { User } from 'domain/entities/user/User';

import { AppModule } from 'infrastructure/app.module';
import { GraphQLAuthGuard } from 'infrastructure/http/guard/graphql.guard';
import { PrismaService } from 'infrastructure/database/prisma/prisma.service';
import { type UserResponseDTO } from 'infrastructure/http/dtos/user/UserResponseDTO';
import { PrismaUserMapper } from 'infrastructure/database/prisma/mappers/PrismaUserMapper';

const users: User[] = [
  new User({
    document: '44754358899',
    password: 'Password123!',
    email: 'gabrielrguedess@gmail.com',
    full_name: 'Gabriel Ribeiro Guedes',
    active: true,
  }),
];

const graphqlUsers = users.map(user => ({
  id: user.id,
  role: user.role,
  email: user.email,
  document: user.document,
  full_name: user.fullName,
  validated: user.validated,
  active: user.active,
  updated_at: new Date(user.updatedAt).toISOString(),
  created_at: new Date(user.createdAt).toISOString(),
}));

const prismaUsers = users.map(user => PrismaUserMapper.toPrisma(user));

const mockPaginate = jest.fn().mockReturnValue({
  withPages: jest.fn().mockResolvedValue([
    prismaUsers,
    {
      pageCount: 1,
      currentPage: 1,
      nextPage: null,
      isLastPage: true,
      isFirstPage: true,
      previousPage: null,
    },
  ]),
});

const mockPrismaService = {
  prismaExtended: {
    user: {
      paginate: mockPaginate,
    },
  },
  user: {
    count: jest.fn().mockResolvedValue(1),
    findMany: jest.fn().mockResolvedValue(prismaUsers),
    delete: jest.fn().mockResolvedValue(prismaUsers[0]),
    update: jest.fn().mockResolvedValue(prismaUsers[0]),
    create: jest.fn().mockResolvedValue(prismaUsers[0]),
    findFirst: jest.fn().mockResolvedValue(prismaUsers[0]),
    findUnique: jest.fn().mockResolvedValue(prismaUsers[0]),
  },
};

describe('GraphQL User Queries (E2E)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .overrideGuard(GraphQLAuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    app = moduleFixture.createNestApplication();

    app.useLogger(false);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('users', () => {
    it('should be able to find all users', () => {
      const query = print(gql`
        query {
          users {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      return request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect(response => {
          const body = response.body as {
            data: { users: UserResponseDTO[] };
          };

          expect(body.data.users).toHaveLength(graphqlUsers.length);
        });
    });
  });

  describe('user', () => {
    it('should be able to find user by document using user query', async () => {
      const query = print(gql`
        query User($where: UserWhereUniqueInput) {
          user(where: $where) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        where: {
          document: '44754358899',
        },
      };

      return request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200)
        .expect(response => {
          const body = response.body as {
            data: { user: null | UserResponseDTO };
          };

          expect(body.data.user).not.toBeNull();
          expect(body.data.user?.document).toBe('44754358899');
        });
    });
  });

  describe('userFirst', () => {
    it('should be able to find user by document using userFirst query', async () => {
      const query = print(gql`
        query UserFirst($where: UserWhereInput) {
          userFirst(where: $where) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        where: {
          document: {
            contains: '44754358899',
          },
        },
      };

      return request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200)
        .expect(response => {
          const body = response.body as {
            data: { userFirst: null | UserResponseDTO };
          };

          expect(body.data.userFirst).toBeDefined();
          expect(body.data.userFirst?.document).toContain('44754358899');
        });
    });
  });

  describe('usersCount', () => {
    it('should return the total number of users', async () => {
      const query = print(gql`
        query Query {
          usersCount
        }
      `);

      return request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect(response => {
          const body = response.body as {
            data: { usersCount: number };
          };

          expect(body.data.usersCount).toBe(1);
        });
    });
  });

  describe('usersPaginationCursor', () => {
    it('should return paginated users with pagination metadata', async () => {
      const query = print(gql`
        query UsersPaginationCursor(
          $after: String
          $before: String
          $first: Float
          $last: Float
          $order: UserOrderByWithRelationInput
          $where: UserWhereInput
        ) {
          usersPaginationCursor(
            after: $after
            before: $before
            first: $first
            last: $last
            order: $order
            where: $where
          ) {
            count
            edges {
              cursor
              node {
                active
                avatar_url
                created_at
                document
                email
                full_name
                id
                role
                updated_at
                validated
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
            totalCount
          }
        }
      `);

      return request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect(response => {
          const body = response.body as {
            data: {
              usersPaginationCursor: {
                count: number;
                totalCount: number;
                edges: {
                  cursor: string;
                  node: UserResponseDTO;
                }[];
                pageInfo: {
                  hasNextPage: boolean;
                  endCursor: null | string;
                  hasPreviousPage: boolean;
                  startCursor: null | string;
                };
              };
            };
          };

          const result = body.data.usersPaginationCursor;

          expect(result).toBeDefined();
          expect(result.count).toBeGreaterThan(0);
          expect(result.totalCount).toBeGreaterThan(0);
          expect(result.edges).toHaveLength(graphqlUsers.length);

          for (const { node } of result.edges) {
            expect(node).toHaveProperty('id');
            expect(node).toHaveProperty('document');
          }

          expect(result.pageInfo).toHaveProperty('hasNextPage');
          expect(result.pageInfo).toHaveProperty('hasPreviousPage');
        });
    });
  });

  describe('usersPaginationOffset', () => {
    it('should return paginated users with offset pagination metadata', async () => {
      const query = print(gql`
        query UsersPaginationOffset(
          $limit: Float
          $order: UserOrderByWithRelationInput
          $page: Float
          $where: UserWhereInput
        ) {
          usersPaginationOffset(
            limit: $limit
            order: $order
            page: $page
            where: $where
          ) {
            count
            nodes {
              active
              avatar_url
              created_at
              document
              email
              full_name
              id
              role
              updated_at
              validated
            }
            pageInfo {
              currentPage
              isFirstPage
              isLastPage
              nextPage
              previousPage
            }
            totalCount
          }
        }
      `);

      const variables = {
        page: 1,
        limit: 10,
        order: {},
        where: {},
      };

      return request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200)
        .expect(response => {
          const body = response.body as {
            data: {
              usersPaginationOffset: {
                count: number;
                totalCount: number;
                nodes: UserResponseDTO[];
                pageInfo: {
                  currentPage: number;
                  isLastPage: boolean;
                  isFirstPage: boolean;
                  nextPage: null | number;
                  previousPage: null | number;
                };
              };
            };
          };

          const result = body.data.usersPaginationOffset;

          expect(result).toBeDefined();
          expect(result.count).toBeGreaterThan(0);
          expect(result.totalCount).toBeGreaterThan(0);
          expect(Array.isArray(result.nodes)).toBe(true);
          expect(result.pageInfo).toHaveProperty('currentPage', 1);
          expect(result.pageInfo).toHaveProperty('isFirstPage');
          expect(result.pageInfo).toHaveProperty('isLastPage');
        });
    });
  });
});

describe('GraphQL User Mutations (E2E)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .overrideGuard(GraphQLAuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    app = moduleFixture.createNestApplication();

    app.useLogger(false);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('activateUser', () => {
    it('should be able to activate a user by document using activateUser mutation', async () => {
      const query = print(gql`
        mutation ActivateUser($where: UserWhereUniqueInput) {
          activateUser(where: $where) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        where: {
          document: '44754358899',
        },
      };

      return request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200)
        .expect(response => {
          const body = response.body as {
            data: { activateUser: UserResponseDTO };
          };

          const activatedUser = body.data.activateUser;

          expect(activatedUser).toBeDefined();
          expect(activatedUser.document).toBe('44754358899');
          expect(activatedUser.active).toBe(true);
        });
    });
  });

  describe('deactivateUser', () => {
    it('should be able to deactivate a user by document using deactivateUser mutation', async () => {
      const query = print(gql`
        mutation DeactivateUser($where: UserWhereUniqueInput) {
          deactivateUser(where: $where) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        where: {
          document: '44754358899',
        },
      };

      mockPrismaService.user.findUnique.mockResolvedValueOnce({
        ...prismaUsers[0],
        active: true,
      });

      mockPrismaService.user.update.mockResolvedValueOnce({
        ...prismaUsers[0],
        active: false,
      });

      const response = await request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200);

      expect(response.body.data.deactivateUser.active).toBe(false);
      expect(response.body.data.deactivateUser.document).toBe('44754358899');
    });
  });

  describe('createManyUsers', () => {
    it('should be able to create many users using createManyUsers mutation', async () => {
      const query = print(gql`
        mutation CreateManyUsers($user: [CreateUserInput!]!) {
          createManyUsers(user: $user) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        user: [
          {
            document: '44754358899',
            password: 'Password123!',
            email: 'gabrielrguedess@gmail.com',
            full_name: 'Gabriel Ribeiro Guedes',
          },
        ],
      };

      const newUser = PrismaUserMapper.toPrisma(new User(variables.user[0]));

      mockPrismaService.user.create.mockResolvedValueOnce(newUser);

      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);

      return request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200)
        .expect(response => {
          const body = response.body as {
            data: { createManyUsers: UserResponseDTO[] };
          };

          const createdUser = body.data.createManyUsers[0];

          expect(createdUser).toBeDefined();
          expect(createdUser.document).toBe('44754358899');
          expect(createdUser.email).toBe('gabrielrguedess@gmail.com');
          expect(createdUser.full_name).toBe('Gabriel Ribeiro Guedes');
          expect(createdUser.active).toBe(true);
        });
    });

    it('should throw error if user already exists', async () => {
      const query = print(gql`
        mutation CreateManyUsers($user: [CreateUserInput!]!) {
          createManyUsers(user: $user) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        user: [
          {
            document: '44754358899',
            password: 'Password123!',
            email: 'gabrielrguedess@gmail.com',
            full_name: 'Gabriel Ribeiro Guedes',
          },
        ],
      };

      const newUser = PrismaUserMapper.toPrisma(new User(variables.user[0]));

      mockPrismaService.user.create.mockResolvedValueOnce(newUser);

      mockPrismaService.user.findUnique.mockResolvedValueOnce(prismaUsers[0]);

      await request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200)
        .expect(response => {
          expect(response.body.errors[0].status).toBe(409);
        });
    });
  });

  describe('createUser', () => {
    it('should be able to create a user using createUser mutation', async () => {
      const query = print(gql`
        mutation CreateUser($user: CreateUserInput!) {
          createUser(user: $user) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        user: {
          document: '44754358899',
          password: 'Password123!',
          email: 'gabrielrguedess@gmail.com',
          full_name: 'Gabriel Ribeiro Guedes',
        },
      };

      const newUser = PrismaUserMapper.toPrisma(new User(variables.user));

      mockPrismaService.user.create.mockResolvedValueOnce(newUser);

      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);

      return request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200)
        .expect(response => {
          const body = response.body as {
            data: {
              createUser: UserResponseDTO;
            };
          };

          const user = body.data.createUser;

          expect(user).toBeDefined();
          expect(user.document).toBe('44754358899');
          expect(user.email).toBe('gabrielrguedess@gmail.com');
          expect(user.full_name).toBe('Gabriel Ribeiro Guedes');
          expect(user.active).toBe(true);
        });
    });

    it('should throw error if user already exists', async () => {
      const query = print(gql`
        mutation CreateManyUsers($user: [CreateUserInput!]!) {
          createManyUsers(user: $user) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        user: {
          document: '44754358899',
          password: 'Password123!',
          email: 'gabrielrguedess@gmail.com',
          full_name: 'Gabriel Ribeiro Guedes',
        },
      };

      const newUser = PrismaUserMapper.toPrisma(new User(variables.user));

      mockPrismaService.user.create.mockResolvedValueOnce(newUser);

      mockPrismaService.user.findUnique.mockResolvedValueOnce(prismaUsers[0]);

      await request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200)
        .expect(response => {
          expect(response.body.errors[0].status).toBe(409);
        });
    });
  });

  describe('updateUser', () => {
    it('should be able to update a user using updateUser mutation', async () => {
      const query = print(gql`
        mutation UpdateUser($user: UpdateUserInput!) {
          updateUser(user: $user) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        user: {
          where: {
            document: '44754358899',
          },
          data: {
            email: 'gabrielrguedess2@gmail.com',
          },
        },
      };

      mockPrismaService.user.findUnique.mockResolvedValueOnce(prismaUsers[0]);

      mockPrismaService.user.update.mockResolvedValueOnce({
        ...prismaUsers[0],
        email: 'gabrielrguedess2@gmail.com',
      });

      const response = await request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200);

      const updatedUser = response.body.data.updateUser;

      expect(updatedUser.email).toBe('gabrielrguedess2@gmail.com');
      expect(updatedUser.document).toBe('44754358899');
    });
  });

  describe('updateManyUsers', () => {
    it('should be able to update many users using updateManyUsers mutation', async () => {
      const query = print(gql`
        mutation UpdateManyUsers($users: [UpdateUserInput!]!) {
          updateManyUsers(users: $users) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        users: [
          {
            where: {
              document: '44754358899',
            },
            data: {
              email: 'gabrielrguedess2@gmail.com',
            },
          },
        ],
      };

      mockPrismaService.user.findUnique.mockResolvedValueOnce(prismaUsers[0]);

      mockPrismaService.user.update.mockResolvedValueOnce({
        ...prismaUsers[0],
        email: 'gabrielrguedess2@gmail.com',
      });

      const response = await request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200);

      const updatedUsers = response.body.data.updateManyUsers;

      expect(Array.isArray(updatedUsers)).toBe(true);
      expect(updatedUsers).toHaveLength(1);
      expect(updatedUsers[0].email).toBe('gabrielrguedess2@gmail.com');
      expect(updatedUsers[0].document).toBe('44754358899');
    });
  });

  describe('deleteUser', () => {
    it('should be able to delete a user using deleteUser mutation', async () => {
      const query = print(gql`
        mutation DeleteUser($user: DeleteUserInput!) {
          deleteUser(user: $user) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        user: {
          where: {
            document: '44754358899',
          },
        },
      };

      mockPrismaService.user.findUnique.mockResolvedValueOnce(prismaUsers[0]);

      mockPrismaService.user.update.mockResolvedValueOnce({
        ...prismaUsers[0],
        active: false,
      });

      const response = await request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200);

      const deletedUser = response.body.data.deleteUser;

      expect(deletedUser.document).toBe('44754358899');
    });
  });

  describe('deleteManyUsers', () => {
    it('should be able to delete many users using deleteManyUsers mutation', async () => {
      const query = print(gql`
        mutation DeleteManyUsers($users: [DeleteUserInput!]!) {
          deleteManyUsers(users: $users) {
            active
            avatar_url
            created_at
            document
            email
            full_name
            id
            role
            updated_at
            validated
          }
        }
      `);

      const variables = {
        users: [
          {
            where: { document: '44754358899' },
          },
        ],
      };

      mockPrismaService.user.findUnique.mockResolvedValueOnce(prismaUsers[0]);

      mockPrismaService.user.update.mockResolvedValueOnce({
        ...prismaUsers[0],
        active: false,
      });

      const response = await request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(200);

      expect(response.body.data.deleteManyUsers).toHaveLength(1);
      expect(response.body.data.deleteManyUsers[0].document).toBe(
        '44754358899',
      );
    });
  });
});
