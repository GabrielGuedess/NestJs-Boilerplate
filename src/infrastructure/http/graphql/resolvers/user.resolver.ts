import { UseGuards } from '@nestjs/common';
import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';

import { GraphQLUpload } from 'graphql-upload-minimal';

import { FileUploadDTO } from 'domain/shared/dtos/FileUploadDTO';
import { RelayPagination } from 'domain/shared/dtos/RelayPagination';

import { CountUsersUseCase } from 'application/useCases/user/countUsers/CountUsersUseCase';
import { CreateUserUseCase } from 'application/useCases/user/createUser/CreateUserUseCase';
import { DeleteUserUseCase } from 'application/useCases/user/deleteUser/DeleteUserUseCase';
import { UpdateUserUseCase } from 'application/useCases/user/updateUser/UpdateUserUseCase';
import { FindAllUsersUseCase } from 'application/useCases/user/findAllUsers/FindAllUsersUseCase';
import { FindUniqueUserUseCase } from 'application/useCases/user/findUniqueUser/FindUniqueUserUseCase';
import { DeleteManyUsersUseCase } from 'application/useCases/user/deleteManyUsers/DeleteManyUsersUseCase';
import { UpdateManyUsersUseCase } from 'application/useCases/user/updateManyUsers/UpdateManyUsersUseCase';

import { GraphQLAuthGuard } from 'infrastructure/http/guard/graphql.guard';
import { UserViewModel } from 'infrastructure/http/view-models/UserViewModel';
import { type UserResponseDTO } from 'infrastructure/http/dtos/user/UserResponseDTO';
import {
  UserModel,
  UsersConnection,
} from 'infrastructure/http/graphql/models/user.model';
import {
  CreateUserInput,
  UpdateUserInput,
} from 'infrastructure/http/graphql/inputs/user.input';
import {
  UserArgs,
  UsersArgs,
  CountUsersArgs,
} from 'infrastructure/http/graphql/args/user.args';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private countUsersUseCase: CountUsersUseCase,
    private createUserUseCase: CreateUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private findAllUsersUseCase: FindAllUsersUseCase,
    private findUniqueUserUseCase: FindUniqueUserUseCase,
    private updateManyUsersUseCase: UpdateManyUsersUseCase,
    private deleteManyUsersUseCase: DeleteManyUsersUseCase,
  ) {}

  @Query(() => Number)
  @UseGuards(GraphQLAuthGuard)
  async totalUsers(@Args() args: CountUsersArgs): Promise<number> {
    const total = await this.countUsersUseCase.execute({ where: args.where });

    return total;
  }

  @Mutation(() => UserModel)
  @UseGuards(GraphQLAuthGuard)
  async deleteUser(
    @Args('id', { type: () => String }) id: string,
  ): Promise<UserResponseDTO> {
    const deleteUser = await this.deleteUserUseCase.execute({
      id,
    });

    return UserViewModel.toHTTP(deleteUser);
  }

  @Mutation(() => [UserModel])
  @UseGuards(GraphQLAuthGuard)
  async deleteManyUsers(
    @Args('ids', { type: () => [String] }) ids: string[],
  ): Promise<UserResponseDTO[]> {
    const deleteUsers = await this.deleteManyUsersUseCase.execute(ids);

    return deleteUsers.map(user => UserViewModel.toHTTP(user));
  }

  @Mutation(() => [UserModel])
  @UseGuards(GraphQLAuthGuard)
  async updateManyUsers(
    @Args('users', { type: () => [UpdateUserInput] })
    users: UpdateUserInput[],
  ): Promise<UserResponseDTO[]> {
    const updateUsers = await this.updateManyUsersUseCase.execute(users);

    return updateUsers.map(user => UserViewModel.toHTTP(user));
  }

  @Query(() => UserModel)
  @UseGuards(GraphQLAuthGuard)
  async user(@Args() args: UserArgs): Promise<UserResponseDTO> {
    const user = await this.findUniqueUserUseCase.execute({
      where: {
        id: args?.where?.id,
        email: args?.where?.email,
        document: args?.where?.document,
      },
    });

    return UserViewModel.toHTTP(user);
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args('user') user: CreateUserInput,
    @Args('avatar', { nullable: true, type: () => GraphQLUpload })
    avatar: FileUploadDTO,
  ): Promise<UserResponseDTO> {
    const newUser = await this.createUserUseCase.execute({
      avatar,
      email: user.email,
      document: user.document,
      password: user.password,
      full_name: user.full_name,
    });

    return UserViewModel.toHTTP(newUser);
  }

  @Mutation(() => UserModel)
  @UseGuards(GraphQLAuthGuard)
  async updateUser(
    @Args('user')
    user: UpdateUserInput,
    @Args('avatar', { nullable: true, type: () => GraphQLUpload })
    avatar: FileUploadDTO,
  ): Promise<UserResponseDTO> {
    const updateUser = await this.updateUserUseCase.execute({
      id: user.id,
      avatar,
      email: user.email,
      document: user.document,
      password: user.password,
      full_name: user.full_name,
    });

    return UserViewModel.toHTTP(updateUser);
  }

  @Query(() => UsersConnection)
  @UseGuards(GraphQLAuthGuard)
  async users(
    @Args() args: UsersArgs,
  ): Promise<RelayPagination<UserResponseDTO>> {
    const users = await this.findAllUsersUseCase.execute({
      last: args.last,
      order: args.order,
      after: args.after,
      first: args.first,
      where: args.where,
      before: args.before,
    });

    const edges = users.edges.map(edge => ({
      ...edge,
      node: UserViewModel.toHTTP(edge.node),
    }));

    const nodes = users.edges.map(edge => UserViewModel.toHTTP(edge.node));

    return {
      edges,
      nodes,
      count: users.count,
      totalCount: users.totalCount,
      pageInfo: {
        endCursor: users.pageInfo.endCursor,
        hasNextPage: users.pageInfo.hasNextPage,
        startCursor: users.pageInfo.startCursor,
        hasPreviousPage: users.pageInfo.hasPreviousPage,
      },
    };
  }
}
