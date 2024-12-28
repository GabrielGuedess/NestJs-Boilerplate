import { UseGuards } from '@nestjs/common';
import {
  Args,
  Parent,
  Mutation,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';

import { User } from 'domain/entities/user/User';

import { AuthUserUseCase } from 'application/useCases/auth/authUser/AuthUserUseCase';
import { RefreshTokenUseCase } from 'application/useCases/auth/refreshToken/RefreshTokenUseCase';
import { FindUniqueUserUseCase } from 'application/useCases/user/findUniqueUser/FindUniqueUserUseCase';

import { UserModel } from 'infrastructure/http/graphql/models/user.model';
import { UserViewModel } from 'infrastructure/http/view-models/UserViewModel';
import { AuthUserInput } from 'infrastructure/http/graphql/inputs/auth.input';
import { CurrentUser } from 'infrastructure/http/decorators/current.decorator';
import { type AuthResponseDTO } from 'infrastructure/http/dtos/auth/AuthResponseDTO';
import { type UserResponseDTO } from 'infrastructure/http/dtos/user/UserResponseDTO';
import {
  RefreshModel,
  AuthUserModel,
} from 'infrastructure/http/graphql/models/auth.model';
import { JwtRefreshGraphQLAuthGuard } from 'infrastructure/http/guard/jwt-refresh-graphql.guard';

@Resolver(() => AuthUserModel)
export class AuthResolver {
  constructor(
    private authUserUseCase: AuthUserUseCase,
    private refreshTokenUseCase: RefreshTokenUseCase,
    private findUserByIdUseCase: FindUniqueUserUseCase,
  ) {}

  @Mutation(() => AuthUserModel)
  async signIn(
    @Args('signIn') signIn: AuthUserInput,
  ): Promise<AuthResponseDTO> {
    return this.authUserUseCase.execute(signIn);
  }

  @ResolveField(() => UserModel)
  async user(@Parent() authUser: AuthUserModel): Promise<UserResponseDTO> {
    const user = await this.findUserByIdUseCase.execute({
      where: { id: authUser.user_id },
    });

    return UserViewModel.toHTTP(user);
  }

  @UseGuards(JwtRefreshGraphQLAuthGuard)
  @Mutation(() => RefreshModel)
  async refreshToken(
    @CurrentUser() user: User,
  ): Promise<{ token: string; token_expires: Date }> {
    const { token, token_expires: tokenExpires } =
      await this.refreshTokenUseCase.execute({
        id: user.id,
        email: user.email,
      });

    return {
      token,
      token_expires: tokenExpires,
    };
  }
}
