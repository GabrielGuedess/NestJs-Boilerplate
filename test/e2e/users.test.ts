import { type INestApplication } from '@nestjs/common';
import { Test, type TestingModule } from '@nestjs/testing';

import { print } from 'graphql';
import request from 'supertest';
import { gql } from 'apollo-server-express';

import { User } from 'domain/entities/user/User';
import { type RelayPagination } from 'domain/shared/dtos/RelayPagination';

import { AppModule } from 'infrastructure/app.module';
import { GraphQLAuthGuard } from 'infrastructure/http/guard/graphql.guard';
import { PrismaService } from 'infrastructure/database/prisma/prisma.service';
import { type UserResponseDTO } from 'infrastructure/http/dtos/user/UserResponseDTO';
import { PrismaUserMapper } from 'infrastructure/database/prisma/mappers/PrismaUserMapper';

const users: User[] = [
  new User({
    password: '123456789',
    document: '44754358899',
    email: 'gabrielrguedess@gmail.com',
    full_name: 'Gabriel Ribeiro Guedes',
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

const mockPrismaService = {
  user: {
    count: jest.fn().mockResolvedValue(1),
    findMany: jest.fn().mockResolvedValue(prismaUsers),
  },
};

describe('GraphQL UserResolver (E2E)', () => {
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
          }
        }
      `);

      return request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect(response => {
          const body = response.body as {
            data: { users: RelayPagination<UserResponseDTO> };
          };

          expect(body.data.users.edges).toHaveLength(graphqlUsers.length);
        });
    });
  });
});
