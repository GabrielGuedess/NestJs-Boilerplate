import { Field, InputType } from '@nestjs/graphql';

import { GraphQLEmailAddress } from 'graphql-scalars';
import { IsEmail, IsString, MinLength } from 'class-validator';

import { type AuthRequestDTO } from 'infrastructure/http/dtos/auth/AuthRequestDTO';

@InputType()
export class AuthUserInput implements AuthRequestDTO {
  @Field()
  @IsString()
  @MinLength(8)
  password: string;

  @Field(() => GraphQLEmailAddress, { nullable: false })
  @IsEmail()
  @IsString()
  email: string;
}
