import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule as HttpsAxiosModule } from '@nestjs/axios';

import { AuthUserUseCase } from 'application/useCases/auth/authUser/AuthUserUseCase';
import { CountUsersUseCase } from 'application/useCases/user/countUsers/CountUsersUseCase';
import { CreateUserUseCase } from 'application/useCases/user/createUser/CreateUserUseCase';
import { DeleteUserUseCase } from 'application/useCases/user/deleteUser/DeleteUserUseCase';
import { UpdateUserUseCase } from 'application/useCases/user/updateUser/UpdateUserUseCase';
import { FindAllUsersUseCase } from 'application/useCases/user/findAllUsers/FindAllUsersUseCase';
import { RefreshTokenUseCase } from 'application/useCases/auth/refreshToken/RefreshTokenUseCase';
import { ActivateUserUseCase } from 'application/useCases/user/activateUser/ActivateUserUseCase';
import { FindFirstUserUseCase } from 'application/useCases/user/findFirstUser/FindFirstUserUseCase';
import { FindUniqueUserUseCase } from 'application/useCases/user/findUniqueUser/FindUniqueUserUseCase';
import { DeactivateUserUseCase } from 'application/useCases/user/deactivateUser/DeactivateUserUseCase';
import { CreateManyUsersUseCase } from 'application/useCases/user/createManyUser/CreateManyUsersUseCase';
import { DeleteManyUsersUseCase } from 'application/useCases/user/deleteManyUsers/DeleteManyUsersUseCase';
import { UpdateManyUsersUseCase } from 'application/useCases/user/updateManyUsers/UpdateManyUsersUseCase';
import { PaginationCursorUsersUseCase } from 'application/useCases/user/paginationCursorUsers/PaginationCursorUsersUseCase';
import { PaginationOffsetUsersUseCase } from 'application/useCases/user/paginationOffsetUsers/PaginationOffsetUsersUseCase';

import { DatabaseModule } from 'infrastructure/database/database.module';
import { ServicesModule } from 'infrastructure/services/services.module';
import { PrismaService } from 'infrastructure/database/prisma/prisma.service';
import { JwtStrategy } from 'infrastructure/http/guard/strategies/jwt.strategy';
import { UserResolver } from 'infrastructure/http/graphql/resolvers/user.resolver';
import { AuthResolver } from 'infrastructure/http/graphql/resolvers/auth.resolver';
import { HealthController } from 'infrastructure/http/controllers/health.controller';
import { PrismaHealthIndicator } from 'infrastructure/database/prisma/prisma-health.service';
import { JwtRefreshStrategy } from 'infrastructure/http/guard/strategies/jwt-refresh.strategy';

@Module({
  controllers: [HealthController],
  imports: [
    HttpModule,
    TerminusModule,
    DatabaseModule,
    ServicesModule,
    TerminusModule,
    HttpsAxiosModule,
  ],
  providers: [
    // JWT
    JwtService,
    JwtStrategy,
    JwtRefreshStrategy,

    // Prisma
    PrismaService,
    PrismaHealthIndicator,

    // Auth
    AuthResolver,
    AuthUserUseCase,
    RefreshTokenUseCase,

    // User
    UserResolver,
    CountUsersUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    CreateUserUseCase,
    FindAllUsersUseCase,
    ActivateUserUseCase,
    FindFirstUserUseCase,
    DeactivateUserUseCase,
    FindUniqueUserUseCase,
    CreateManyUsersUseCase,
    DeleteManyUsersUseCase,
    UpdateManyUsersUseCase,
    PaginationCursorUsersUseCase,
    PaginationOffsetUsersUseCase,
  ],
})
export class HttpModule {}
