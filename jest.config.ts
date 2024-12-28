import { type Config } from 'jest';

const config: Config = {
  verbose: true,
  rootDir: './src',
  collectCoverage: true,
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  coverageDirectory: '../coverage',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['<rootDir>../.jest/jest.setup.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^@test(.*)$': '<rootDir>../test$1',
  },
  collectCoverageFrom: [
    'domain/entities/**/*.ts',
    'application/useCases/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 100,
      branches: 100,
      functions: 100,
      statements: 100,
    },
  },
};

export default config;
