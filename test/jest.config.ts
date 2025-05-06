import { type Config } from 'jest';

const config: Config = {
  rootDir: '.',
  testRegex: '.test.ts$',
  testEnvironment: 'node',
  modulePaths: ['<rootDir>'],
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  moduleFileExtensions: ['js', 'json', 'ts'],
  setupFiles: ['<rootDir>../.jest/jest.setup.ts'],
  moduleDirectories: ['<rootDir>/../src', 'node_modules'],
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>../$1',
    '^@test(.*)$': '<rootDir>../test$1',
  },
};

export default config;
