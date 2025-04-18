import path, { join } from 'node:path';

import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { GraphQLModule } from '@nestjs/graphql';
import { CacheModule } from '@nestjs/cache-manager';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import {
  I18nModule,
  QueryResolver,
  HeaderResolver,
  CookieResolver,
  GrpcMetadataResolver,
  AcceptLanguageResolver,
  GraphQLWebsocketResolver,
} from 'nestjs-i18n';

import { createKeyv } from '@keyv/redis';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { env } from 'infrastructure/env';
import { HttpModule } from 'infrastructure/http/http.module';
import { DatabaseModule } from 'infrastructure/database/database.module';

@Module({
  providers: [],
  imports: [
    HttpModule,
    DatabaseModule,
    CacheModule.register({
      ttl: 3600,
      isGlobal: true,
      stores: [createKeyv(`redis://${env.REDIS_HOST}:${env.REDIS_PORT}`)],
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en-US',
      fallbacks: {
        'en-*': 'en-US',
        'pt-*': 'pt-BR',
      },
      loaderOptions: {
        path: path.join(__dirname, '../../i18n/locales'),
        watch: true,
      },
      resolvers: [
        GrpcMetadataResolver,
        AcceptLanguageResolver,
        GraphQLWebsocketResolver,
        { use: QueryResolver, options: ['lang'] },
        { use: HeaderResolver, options: ['lang'] },
        { use: CookieResolver, options: ['lang'] },
      ],
      typesOutputPath: path.join(process.cwd(), 'i18n/generated/index.ts'),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      sortSchema: true,
      playground: false,
      introspection: true,
      driver: ApolloDriver,
      csrfPrevention: false,
      context: (context: any) => context,
      fieldResolverEnhancers: ['guards', 'filters', 'interceptors'],
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
      plugins: [
        ApolloServerPluginInlineTrace(),
        ApolloServerPluginLandingPageLocalDefault(),
      ],
      autoSchemaFile: {
        path: join(
          process.cwd(),
          'src/infrastructure/http/graphql/generated/schema.gql',
        ),
      },
      formatError: error => {
        const originalError = error.extensions?.originalError as {
          message: string[];
        };

        if (
          error?.extensions?.code === 'BAD_REQUEST' &&
          originalError?.message
        ) {
          return {
            message: originalError?.message.join(', '),
            status: 400,
          };
        }

        if (error?.extensions?.code === 'BAD_USER_INPUT') {
          return {
            message: error.message,
            status: 400,
          };
        }

        if (
          error?.extensions?.code === 'INTERNAL_SERVER_ERROR' &&
          error?.extensions?.stacktrace
        ) {
          const stacktrace = error.extensions.stacktrace as string[];

          if (stacktrace[0].includes('I18nValidationException')) {
            return {
              message: error.message,
              status: 400,
            };
          }
        }

        return {
          message: error.message,
          status: error.extensions.code,
        };
      },
    }),
    LoggerModule.forRoot({ pinoHttp: { level: 'error' } }),
  ],
})
export class AppModule {}
