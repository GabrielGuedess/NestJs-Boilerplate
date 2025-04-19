import { i18nValidationMessage } from 'nestjs-i18n';
import { Field, InputType, PartialType } from '@nestjs/graphql';

import { Type } from 'class-transformer';
import { type I18nTranslations } from '@root/i18n/generated';
import { GraphQLUUID, GraphQLEmailAddress } from 'graphql-scalars';
import {
  IsEmail,
  MinLength,
  ValidateNested,
  IsStrongPassword,
} from 'class-validator';

import { IsCPF } from 'infrastructure/http/validators/cpf.decorator';
import { type UserRequestDTO } from 'infrastructure/http/dtos/user/UserRequestDTO';
import { AtLeastOneField } from 'infrastructure/http/decorators/at-least-one-field.decorator';

@InputType()
@AtLeastOneField<UserWhereUniqueInput>(['id', 'document', 'email'])
export class UserWhereUniqueInput {
  @Field(() => GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  document?: string;

  @Field(() => GraphQLEmailAddress, { nullable: true })
  email?: string;
}

@InputType()
export class CreateUserInput implements UserRequestDTO {
  @Field(() => String)
  @IsCPF({
    message: i18nValidationMessage<I18nTranslations>('validation.IS_CPF'),
  })
  document: string;

  @Field(() => String)
  @MinLength(3, {
    message: i18nValidationMessage<I18nTranslations>('validation.MIN_LENGTH'),
  })
  full_name: string;

  @Field(() => GraphQLEmailAddress, { nullable: false })
  @IsEmail(
    {},
    {
      message: i18nValidationMessage<I18nTranslations>('validation.IS_EMAIL'),
    },
  )
  email: string;

  @Field(() => String)
  @MinLength(8, {
    message: i18nValidationMessage<I18nTranslations>('validation.MIN_LENGTH'),
  })
  @IsStrongPassword(
    { minLength: 8 },
    {
      message: i18nValidationMessage<I18nTranslations>(
        'validation.IS_STRONG_PASSWORD',
      ),
    },
  )
  password: string;
}

@InputType()
class UpdateDataUserInput extends PartialType(CreateUserInput) {}

@InputType()
export class UpdateUserInput {
  @Field(() => UpdateDataUserInput)
  @ValidateNested()
  @Type(() => UpdateDataUserInput)
  data: UpdateDataUserInput;

  @Field(() => UserWhereUniqueInput)
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  where: UserWhereUniqueInput;
}

@InputType()
export class DeleteUserInput {
  @Field(() => UserWhereUniqueInput)
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  where?: UserWhereUniqueInput;
}
