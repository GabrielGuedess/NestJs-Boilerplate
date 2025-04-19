import { NestFactory } from '@nestjs/core';
import { I18nValidationPipe } from 'nestjs-i18n';

import colors from 'colors';
import { graphqlUploadExpress } from 'graphql-upload-minimal';

import { env } from 'infrastructure/env';
import { AppModule } from 'infrastructure/app.module';
import { I18nGqlValidationExceptionFilter } from 'infrastructure/http/exception/i18n-validation-exception.filter';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new I18nValidationPipe({
      transform: true,
    }),
  );

  app.useGlobalFilters(new I18nGqlValidationExceptionFilter());

  app.use(graphqlUploadExpress({ maxFiles: 10, maxFileSize: 10_000_000 }));

  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3333'],
  });

  await app.listen(env.API_PORT, '0.0.0.0');

  colors.enable();
};

bootstrap();
