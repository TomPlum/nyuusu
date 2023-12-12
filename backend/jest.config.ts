import type {Config} from 'jest';

const config: Config = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

export default config;