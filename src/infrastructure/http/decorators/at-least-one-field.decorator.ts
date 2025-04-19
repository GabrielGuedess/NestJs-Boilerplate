import { I18nContext } from 'nestjs-i18n';

import { type I18nTranslations } from '@root/i18n/generated';
import {
  registerDecorator,
  type ValidationOptions,
  type ValidationArguments,
} from 'class-validator';

export const AtLeastOneField =
  <T>(fields: (keyof T)[], validationOptions?: ValidationOptions) =>
  (target: any) => {
    registerDecorator({
      target,
      constraints: [fields],
      name: 'atLeastOneField',
      options: validationOptions,
      propertyName: '__atLeastOneField__',
      validator: {
        validate: (_: any, args: ValidationArguments) => {
          const [currentFields] = args.constraints;

          return currentFields.some((field: string) => {
            const value = (args.object as any)[field];

            return value !== undefined && value !== null;
          });
        },
        defaultMessage: (args: ValidationArguments) => {
          const [currentFields] = args.constraints;

          const i18n = I18nContext.current<I18nTranslations>();

          if (i18n) {
            return i18n.t('decorators.AT_LEAST_ONE_FIELD', {
              args: { fields: currentFields.join(', ') },
            });
          }

          return `least one of the fields must be informed: ${currentFields.join(', ')}`;
        },
      },
    });
  };
