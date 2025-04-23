import { type INestApplication } from '@nestjs/common';
import { Test, type TestingModule } from '@nestjs/testing';

import { hash } from 'bcryptjs';
import { print } from 'graphql';
import request from 'supertest';
import { gql } from 'apollo-server-express';

import { User } from 'domain/entities/user/User';

import { AppModule } from 'infrastructure/app.module';
import { GraphQLAuthGuard } from 'infrastructure/http/guard/graphql.guard';
import { PrismaService } from 'infrastructure/database/prisma/prisma.service';
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

describe('GraphQL Auth Mutations (E2E)', () => {
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

  describe('signIn', () => {
    it('should sign in successfully with valid credentials', async () => {
      const query = print(gql`
        mutation SignIn($signIn: AuthUserInput!) {
          signIn(signIn: $signIn) {
            refresh_token
            refresh_token_expires
            token
            token_expires
            user_id
          }
        }
      `);

      const variables = {
        signIn: {
          password: 'Password123!',
          email: 'gabrielrguedess@gmail.com',
        },
      };

      const passwordHash = await hash('Password123!', 10);

      mockPrismaService.user.findUnique.mockResolvedValueOnce({
        ...prismaUsers[0],
        password: passwordHash,
      });

      await request(app.getHttpServer() as string)
        .post('/graphql')
        .send({ query, variables })
        .expect(response => {
          expect(response.body.data.signIn.token).toBeTruthy();

          expect(response.body.data.signIn.refresh_token).toBeTruthy();

          expect(
            new Date(response.body.data.signIn.token_expires).getTime(),
          ).toBeGreaterThan(Date.now());

          expect(
            new Date(response.body.data.signIn.refresh_token_expires).getTime(),
          ).toBeGreaterThan(Date.now());
        });
    });
  });
});
