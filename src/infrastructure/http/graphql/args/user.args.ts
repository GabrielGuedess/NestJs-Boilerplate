import { Field, ArgsType } from '@nestjs/graphql';

import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { UserWhereUniqueInput } from 'infrastructure/http/graphql/inputs/user.input';
import {
  UserWhereInput,
  UserOrderByWithRelationInput,
} from 'infrastructure/http/graphql/generated/user';

@ArgsType()
export class CountUsersArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @IsOptional()
  where?: UserWhereInput;
}

@ArgsType()
export class UserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  where?: UserWhereUniqueInput;
}

@ArgsType()
export class UsersArgs {
  @Field(() => Number, { nullable: true })
  @IsOptional()
  last?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  after?: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  first?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  before?: string;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @IsOptional()
  where?: UserWhereInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  @Type(() => UserOrderByWithRelationInput)
  @IsOptional()
  order?: UserOrderByWithRelationInput;
}
