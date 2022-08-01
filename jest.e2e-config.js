/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.e2e-spec.ts'],
  testPathIgnorePatterns: ['dist'],
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  rootDir: 'src',
  setupFilesAfterEnv: ['./setup-e2e-tests.ts'],
};
