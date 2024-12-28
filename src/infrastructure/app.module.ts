import { join } from 'node:path';

import { INQUIRER } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';
import { GraphQLModule } from '@nestjs/graphql';
import { CacheModule } from '@nestjs/cache-manager';
import { Scope, Module, Logger } from '@nestjs/common';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';

import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { HttpModule } from 'infrastructure/http/http.module';
import { DatabaseModule } from 'infrastructure/database/database.module';

@Module({
  providers: [
    {
      provide: Logger,
      inject: [INQUIRER],
      scope: Scope.TRANSIENT,
      useFactory: (parentClass: object) =>
        new Logger(parentClass.constructor.name),
    },
  ],
  imports: [
    HttpModule,
    DatabaseModule,
    CacheModule.register(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      sortSchema: true,
      playground: false,
      introspection: true,
      driver: ApolloDriver,
      csrfPrevention: false,
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
    }),
    LoggerModule.forRoot({ pinoHttp: { level: 'error' } }),
  ],
})
export class AppModule {}
