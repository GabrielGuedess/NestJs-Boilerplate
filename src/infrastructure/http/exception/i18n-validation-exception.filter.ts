import { GqlContextType } from '@nestjs/graphql';
import { formatI18nErrors } from 'nestjs-i18n/dist/utils';
import { I18nContext, I18nValidationException } from 'nestjs-i18n';
import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';

import { type I18nTranslations } from '@root/i18n/generated';

const extractConstraints = (errors: any[]): string | undefined => {
  for (const error of errors) {
    if (error.constraints && Object.values(error.constraints).length > 0) {
      return Object.values(error.constraints)?.[0] as string;
    }

    if (error.children && error.children.length > 0) {
      const nested = extractConstraints(error.children);
      if (nested) return nested;
    }
  }

  return undefined;
};

@Catch(I18nValidationException)
export class I18nGqlValidationExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    if (host.getType<GqlContextType>() !== 'graphql') {
      return exception;
    }

    const i18n = I18nContext.current<I18nTranslations>(host);

    if (!i18n) {
      return exception;
    }

    const errors = formatI18nErrors(exception.errors, i18n.service, {
      lang: i18n.lang,
    });

    const message = extractConstraints(errors);

    if (message) {
      exception.message = message;
      exception.extensions = { errors };
    }

    return exception;
  }
}
