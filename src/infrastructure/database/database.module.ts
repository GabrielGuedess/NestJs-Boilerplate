import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserRepository } from 'domain/repositories/UserRepository';
import { AuthRepository } from 'domain/repositories/AuthRepository';

import { PrismaService } from 'infrastructure/database/prisma/prisma.service';
import { PrismaUserRepository } from 'infrastructure/database/prisma/repositories/PrismaUserRepository';
import { PrismaAuthRepository } from 'infrastructure/database/prisma/repositories/PrismaAuthRepository';

@Module({
  exports: [AuthRepository, UserRepository],

  providers: [
    // JWT
    JwtService,

    // Prisma
    PrismaService,

    // Auth
    {
      provide: AuthRepository,
      useClass: PrismaAuthRepository,
    },

    // User
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class DatabaseModule {}
