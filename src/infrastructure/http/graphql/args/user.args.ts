import { Field, ArgsType } from '@nestjs/graphql';

import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';

import { UserWhereUniqueInput } from 'infrastructure/http/graphql/inputs/user.input';
import {
  UserWhereInput,
  UserOrderByWithRelationInput,
} from 'infrastructure/http/graphql/generated/user';

@ArgsType()
export class UsersCountArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @IsOptional()
  where?: UserWhereInput;
}

@ArgsType()
export class UserFirstArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @IsOptional()
  where?: UserWhereInput;
}

@ArgsType()
export class UserUniqueArgs {
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  @IsOptional()
  where?: UserWhereUniqueInput;
}

@ArgsType()
export class UsersArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @IsOptional()
  where?: UserWhereInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  @Type(() => UserOrderByWithRelationInput)
  @IsOptional()
  order?: UserOrderByWithRelationInput;
}

@ArgsType()
export class PaginationUsersCursorArgs {
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

@ArgsType()
export class PaginationUsersOffsetArgs {
  @Field(() => Number, { nullable: true, defaultValue: 1 })
  @IsOptional()
  page?: number;

  @Field(() => Number, { nullable: true, defaultValue: 10 })
  @IsOptional()
  limit?: number;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @IsOptional()
  where?: UserWhereInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  @Type(() => UserOrderByWithRelationInput)
  @IsOptional()
  order?: UserOrderByWithRelationInput;
}
