import { ID, Field, ObjectType } from '@nestjs/graphql';

import * as Relay from 'graphql-relay';
import {
  GraphQLURL,
  GraphQLDateTimeISO,
  GraphQLEmailAddress,
} from 'graphql-scalars';

import { OffsetPagination } from 'domain/shared/dtos/OffsetPagination';

import { Role } from 'infrastructure/http/graphql/generated/prisma/role.enum';
import { UserResponseDTO } from 'infrastructure/http/dtos/user/UserResponseDTO';
import { PageInfoCursor } from 'infrastructure/http/graphql/pagination/page-info';
import { PageInfoOffset } from 'infrastructure/http/graphql/pagination/page-info-offset';

@ObjectType()
export class UserModel implements UserResponseDTO {
  @Field(() => ID)
  id: string;

  @Field(() => Role)
  role: Role;

  @Field(() => Boolean)
  active: boolean;

  @Field(() => String)
  document: string;

  @Field(() => String)
  full_name: string;

  @Field(() => Boolean)
  validated: boolean;

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

  @Field(() => String)
  readonly cursor: Relay.ConnectionCursor;
}

@ObjectType()
export class UsersCursorConnection implements Relay.Connection<UserModel> {
  @Field(() => [UserModel])
  nodes: UserModel[];

  @Field(() => Number, { defaultValue: 0 })
  count: number = 0;

  @Field(() => PageInfoCursor)
  readonly pageInfo: PageInfoCursor;

  @Field(() => Number, { defaultValue: 0 })
  totalCount: number = 0;

  @Field(() => [UsersEdge])
  readonly edges: Array<Relay.Edge<UserModel>>;
}

@ObjectType()
export class UsersOffsetConnection implements OffsetPagination<UserModel> {
  @Field(() => [UserModel])
  nodes: UserModel[];

  @Field(() => Number, { defaultValue: 0 })
  count: number = 0;

  @Field(() => PageInfoOffset)
  readonly pageInfo: PageInfoOffset;

  @Field(() => Number, { defaultValue: 0 })
  totalCount: number = 0;
}
