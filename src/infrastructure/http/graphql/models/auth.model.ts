import { Field, ObjectType } from '@nestjs/graphql';

import { GraphQLJWT, GraphQLUUID, GraphQLDateTimeISO } from 'graphql-scalars';

import { UserModel } from 'infrastructure/http/graphql/models/user.model';
import { type AuthResponseDTO } from 'infrastructure/http/dtos/auth/AuthResponseDTO';

@ObjectType()
export class AuthUserModel implements AuthResponseDTO {
  @Field(() => GraphQLJWT)
  token: string;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => GraphQLUUID)
  user_id: string;

  @Field(() => GraphQLJWT)
  refresh_token: string;

  @Field(() => GraphQLDateTimeISO)
  token_expires: Date;

  @Field(() => GraphQLDateTimeISO)
  refresh_token_expires: Date;
}

@ObjectType()
export class RefreshModel {
  @Field(() => GraphQLJWT)
  token: string;

  @Field(() => GraphQLDateTimeISO)
  token_expires: Date;
}
