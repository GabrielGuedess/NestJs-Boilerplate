import { type INestApplication } from '@nestjs/common';
import { type TestingModule, Test } from '@nestjs/testing';

import request from 'supertest';

import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/infra/database/prisma/prisma.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  const mockPrismaService = {
    user: {
      findMany: jest.fn().mockResolvedValue([]),
      findUnique: jest.fn().mockResolvedValue({}),
      update: jest.fn().mockResolvedValue({}),
      create: jest.fn().mockResolvedValue({}),
      delete: jest.fn().mockResolvedValue({}),
    },
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () =>
    request(app.getHttpServer()).get('/').expect(200).expect('Hello World!'));
});
