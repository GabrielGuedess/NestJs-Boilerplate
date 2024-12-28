import { type Config } from 'jest';

import defaultConfig from './jest.config';

const config: Config = {
  ...defaultConfig,
  coverageThreshold: undefined,
};

export default config;
