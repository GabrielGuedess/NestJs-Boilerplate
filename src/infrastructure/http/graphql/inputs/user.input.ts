import { Field, InputType } from '@nestjs/graphql';

import { GraphQLUUID, GraphQLEmailAddress } from 'graphql-scalars';
import {
  IsUUID,
  IsEmail,
  IsString,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
} from 'class-validator';

import { IsCPF } from 'infrastructure/http/validators/cpf.decorator';
import { type UserRequestDTO } from 'infrastructure/http/dtos/user/UserRequestDTO';

@InputType()
export class CreateUserInput implements UserRequestDTO {
  @Field()
  @IsCPF()
  @IsString()
  document: string;

  @Field()
  @MinLength(3)
  @IsString()
  full_name: string;

  @Field()
  @IsString()
  @IsStrongPassword({ minLength: 8 })
  @MinLength(8)
  password: string;

  @Field(() => GraphQLEmailAddress, { nullable: false })
  @IsEmail()
  @IsString()
  email: string;
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  @IsCPF()
  @IsString()
  @IsOptional()
  document?: string;

  @Field(() => GraphQLUUID, { nullable: false })
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @Field({ nullable: true })
  @IsString()
  @MinLength(3)
  @IsOptional()
  full_name: string;

  @Field(() => GraphQLEmailAddress, { nullable: true })
  @IsEmail()
  @IsString()
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @IsString()
  @MinLength(8)
  @IsStrongPassword({ minLength: 8 })
  @IsOptional()
  password: string;
}

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  @IsCPF()
  document?: string;
}
