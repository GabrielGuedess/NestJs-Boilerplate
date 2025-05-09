import { type KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/infrastructure/main.ts'],
  plop: {
    config: ['generators/plopfile.mjs'],
  },
  ignoreUnresolved: ['./src../.jest/jest.setup.ts', '.../.jest/jest.setup.ts'],
  jest: {
    config: ['jest.config.ts', 'jest.config.husky.ts', '.jest/jest.setup.ts'],
  },
  ignore: [
    'docs/**',
    '**/generated/**',
    '**/validators/**',
    '**/services/aws/**',
    'src/domain/shared/**',
  ],
  ignoreDependencies: [
    '@aws-sdk/client-s3',
    'eslint-formatter-mo',
    'prisma-dbml-generator',
    'prisma-nestjs-graphql',
    'eslint-import-resolver-typescript',
  ],
};

export default config;
