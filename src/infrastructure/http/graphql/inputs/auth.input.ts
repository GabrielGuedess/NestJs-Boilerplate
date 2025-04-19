import { Field, InputType } from '@nestjs/graphql';
import { i18nValidationMessage } from 'nestjs-i18n';

import { IsEmail, MinLength } from 'class-validator';
import { GraphQLEmailAddress } from 'graphql-scalars';
import { I18nTranslations } from '@root/i18n/generated';

import { AuthRequestDTO } from 'infrastructure/http/dtos/auth/AuthRequestDTO';

@InputType()
export class AuthUserInput implements AuthRequestDTO {
  @Field(() => String)
  @MinLength(8, {
    message: i18nValidationMessage<I18nTranslations>('validation.MIN_LENGTH'),
  })
  password: string;

  @Field(() => GraphQLEmailAddress)
  @IsEmail(
    {},
    {
      message: i18nValidationMessage<I18nTranslations>('validation.IS_EMAIL'),
    },
  )
  email: string;
}
