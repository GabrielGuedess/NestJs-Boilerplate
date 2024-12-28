import { PageInfo } from 'nestjs-graphql-relay';
import { ID, Field, ObjectType } from '@nestjs/graphql';

import * as Relay from 'graphql-relay';
import {
  GraphQLURL,
  GraphQLDateTimeISO,
  GraphQLEmailAddress,
} from 'graphql-scalars';

import { Role } from 'infrastructure/http/graphql/generated/prisma/role.enum';
import { type UserResponseDTO } from 'infrastructure/http/dtos/user/UserResponseDTO';

@ObjectType()
export class UserModel implements UserResponseDTO {
  @Field()
  active: boolean;

  @Field()
  document: string;

  @Field()
  full_name: string;

  @Field()
  validated: boolean;

  @Field(() => ID)
  id: string;

  @Field(() => Role)
  role: Role;

  @Field(() => GraphQLEmailAddress)
  email: string;

  @Field(() => GraphQLDateTimeISO)
  created_at: Date;

  @Field(() => GraphQLDateTimeISO)
  updated_at: Date;

  @Field(() => GraphQLURL, { nullable: true })
  avatar_url?: string;
}

@ObjectType({ isAbstract: true })
abstract class UsersEdge implements Relay.Edge<UserModel> {
  @Field(() => UserModel)
  readonly node: UserModel;

  @Field()
  readonly cursor: Relay.ConnectionCursor;
}

@ObjectType()
export class UsersConnection implements Relay.Connection<UserModel> {
  @Field()
  readonly pageInfo: PageInfo;

  @Field(() => [UserModel])
  nodes: UserModel[];

  @Field(() => Number, { defaultValue: 0 })
  count: number = 0;

  @Field(() => Number, { defaultValue: 0 })
  totalCount: number = 0;

  @Field(() => [UsersEdge])
  readonly edges: Array<Relay.Edge<UserModel>>;
}
