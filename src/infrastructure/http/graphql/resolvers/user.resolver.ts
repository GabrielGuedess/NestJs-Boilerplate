import { UseGuards } from '@nestjs/common';
import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';

import { GraphQLUpload } from 'graphql-upload-minimal';

import { FileUploadDTO } from 'domain/shared/dtos/FileUploadDTO';
import { RelayPagination } from 'domain/shared/dtos/RelayPagination';
import { OffsetPagination } from 'domain/shared/dtos/OffsetPagination';
import { WhereUserUniqueDTO } from 'domain/dtos/repositories/UserRepositoryDTO';

import { CountUsersUseCase } from 'application/useCases/user/countUsers/CountUsersUseCase';
import { CreateUserUseCase } from 'application/useCases/user/createUser/CreateUserUseCase';
import { UpdateUserUseCase } from 'application/useCases/user/updateUser/UpdateUserUseCase';
import { DeleteUserUseCase } from 'application/useCases/user/deleteUser/DeleteUserUseCase';
import { FindAllUsersUseCase } from 'application/useCases/user/findAllUsers/FindAllUsersUseCase';
import { ActivateUserUseCase } from 'application/useCases/user/activateUser/ActivateUserUseCase';
import { FindFirstUserUseCase } from 'application/useCases/user/findFirstUser/FindFirstUserUseCase';
import { FindUniqueUserUseCase } from 'application/useCases/user/findUniqueUser/FindUniqueUserUseCase';
import { DeactivateUserUseCase } from 'application/useCases/user/deactivateUser/DeactivateUserUseCase';
import { CreateManyUsersUseCase } from 'application/useCases/user/createManyUser/CreateManyUsersUseCase';
import { UpdateManyUsersUseCase } from 'application/useCases/user/updateManyUsers/UpdateManyUsersUseCase';
import { DeleteManyUsersUseCase } from 'application/useCases/user/deleteManyUsers/DeleteManyUsersUseCase';
import { PaginationCursorUsersUseCase } from 'application/useCases/user/paginationCursorUsers/PaginationCursorUsersUseCase';
import { PaginationOffsetUsersUseCase } from 'application/useCases/user/paginationOffsetUsers/PaginationOffsetUsersUseCase';

import { GraphQLAuthGuard } from 'infrastructure/http/guard/graphql.guard';
import { UserViewModel } from 'infrastructure/http/view-models/UserViewModel';
import { UserResponseDTO } from 'infrastructure/http/dtos/user/UserResponseDTO';
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
} from 'infrastructure/http/graphql/inputs/user.input';
import {
  UserModel,
  UsersCursorConnection,
  UsersOffsetConnection,
} from 'infrastructure/http/graphql/models/user.model';
import {
  UsersArgs,
  UserFirstArgs,
  UserUniqueArgs,
  UsersCountArgs,
  PaginationUsersCursorArgs,
  PaginationUsersOffsetArgs,
} from 'infrastructure/http/graphql/args/user.args';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private readonly countUsersUseCase: CountUsersUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
    private readonly activateUserUseCase: ActivateUserUseCase,
    private readonly findFirstUserUseCase: FindFirstUserUseCase,
    private readonly findUniqueUserUseCase: FindUniqueUserUseCase,
    private readonly deactivateUserUseCase: DeactivateUserUseCase,
    private readonly createManyUsersUseCase: CreateManyUsersUseCase,
    private readonly updateManyUsersUseCase: UpdateManyUsersUseCase,
    private readonly deleteManyUsersUseCase: DeleteManyUsersUseCase,
    private readonly paginationCursorUsersUseCase: PaginationCursorUsersUseCase,
    private readonly paginationOffsetUsersUseCase: PaginationOffsetUsersUseCase,
  ) {}

  // Queries

  @Query(() => Number)
  @UseGuards(GraphQLAuthGuard)
  async usersCount(@Args() args: UsersCountArgs): Promise<number> {
    return this.countUsersUseCase.execute({ where: args.where });
  }

  @Query(() => UserModel)
  @UseGuards(GraphQLAuthGuard)
  async userFirst(@Args() args: UserFirstArgs): Promise<UserResponseDTO> {
    const user = await this.findFirstUserUseCase.execute({ where: args.where });

    return UserViewModel.toHTTP(user);
  }

  @Query(() => UserModel)
  @UseGuards(GraphQLAuthGuard)
  async user(@Args() args: UserUniqueArgs): Promise<UserResponseDTO> {
    const user = await this.findUniqueUserUseCase.execute({
      where: args.where as WhereUserUniqueDTO,
    });

    return UserViewModel.toHTTP(user);
  }

  @Query(() => [UserModel])
  @UseGuards(GraphQLAuthGuard)
  async users(@Args() args: UsersArgs): Promise<UserResponseDTO[]> {
    const users = await this.findAllUsersUseCase.execute(args);

    return users.map(UserViewModel.toHTTP);
  }

  @Query(() => UsersOffsetConnection)
  @UseGuards(GraphQLAuthGuard)
  async usersPaginationOffset(
    @Args() args: PaginationUsersOffsetArgs,
  ): Promise<OffsetPagination<UserResponseDTO>> {
    const pagination = await this.paginationOffsetUsersUseCase.execute(args);

    return {
      ...pagination,
      nodes: pagination.nodes.map(UserViewModel.toHTTP),
    };
  }

  @Query(() => UsersCursorConnection)
  @UseGuards(GraphQLAuthGuard)
  async usersPaginationCursor(
    @Args() args: PaginationUsersCursorArgs,
  ): Promise<RelayPagination<UserResponseDTO>> {
    const pagination = await this.paginationCursorUsersUseCase.execute(args);

    return {
      ...pagination,
      nodes: pagination.edges.map(edge => UserViewModel.toHTTP(edge.node)),
      edges: pagination.edges.map(edge => ({
        ...edge,
        node: UserViewModel.toHTTP(edge.node),
      })),
    };
  }

  // Mutations

  @Mutation(() => UserModel)
  async createUser(
    @Args('user') user: CreateUserInput,
    @Args('avatar', { nullable: true, type: () => GraphQLUpload })
    avatar: FileUploadDTO,
  ): Promise<UserResponseDTO> {
    const newUser = await this.createUserUseCase.execute({ ...user, avatar });

    return UserViewModel.toHTTP(newUser);
  }

  @Mutation(() => [UserModel])
  async createManyUsers(
    @Args('user', { type: () => [CreateUserInput] }) users: CreateUserInput[],
  ): Promise<UserResponseDTO[]> {
    const result = await this.createManyUsersUseCase.execute(users);

    return result.map(UserViewModel.toHTTP);
  }

  @Mutation(() => UserModel)
  @UseGuards(GraphQLAuthGuard)
  async updateUser(
    @Args('user') user: UpdateUserInput,
    @Args('avatar', { nullable: true, type: () => GraphQLUpload })
    avatar: FileUploadDTO,
  ): Promise<UserResponseDTO> {
    const updated = await this.updateUserUseCase.execute({
      where: user.where as WhereUserUniqueDTO,
      data: { ...user.data, avatar: avatar?.filename ? avatar : undefined },
    });

    return UserViewModel.toHTTP(updated);
  }

  @Mutation(() => [UserModel])
  @UseGuards(GraphQLAuthGuard)
  async updateManyUsers(
    @Args('users', { type: () => [UpdateUserInput] }) users: UpdateUserInput[],
  ): Promise<UserResponseDTO[]> {
    const payload = users.map(({ data, where }) => ({
      data,
      where: where as WhereUserUniqueDTO,
    }));

    const result = await this.updateManyUsersUseCase.execute(payload);

    return result.map(UserViewModel.toHTTP);
  }

  @Mutation(() => UserModel)
  @UseGuards(GraphQLAuthGuard)
  async deleteUser(
    @Args('user') user: DeleteUserInput,
  ): Promise<UserResponseDTO> {
    const result = await this.deleteUserUseCase.execute({
      where: user.where as WhereUserUniqueDTO,
    });

    return UserViewModel.toHTTP(result);
  }

  @Mutation(() => [UserModel])
  @UseGuards(GraphQLAuthGuard)
  async deleteManyUsers(
    @Args('users', { type: () => [DeleteUserInput] }) users: DeleteUserInput[],
  ): Promise<UserResponseDTO[]> {
    const payload = users.map(({ where }) => ({
      where: where as WhereUserUniqueDTO,
    }));

    const result = await this.deleteManyUsersUseCase.execute(payload);

    return result.map(UserViewModel.toHTTP);
  }

  @Mutation(() => UserModel)
  @UseGuards(GraphQLAuthGuard)
  async activateUser(@Args() args: UserUniqueArgs): Promise<UserResponseDTO> {
    const user = await this.activateUserUseCase.execute({
      where: args.where as WhereUserUniqueDTO,
    });

    return UserViewModel.toHTTP(user);
  }

  @Mutation(() => UserModel)
  @UseGuards(GraphQLAuthGuard)
  async deactivateUser(@Args() args: UserUniqueArgs): Promise<UserResponseDTO> {
    const user = await this.deactivateUserUseCase.execute({
      where: args.where as WhereUserUniqueDTO,
    });

    return UserViewModel.toHTTP(user);
  }
}
