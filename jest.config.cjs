module.exports = {
  transform: {
    '^.+\\.(ts|js)$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester',
  },
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules)[/\\\\]',
    '<rootDir>/src/tests/e2e',
  ],
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  moduleNameMapper: {
    '^\\$lib(.*)$': '<rootDir>/src/lib$1',
    '^\\$app(.*)$': [
      '<rootDir>/.svelte-kit/dev/runtime/app$1',
      '<rootDir>/.svelte-kit/build/runtime/app$1',
    ],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
}
