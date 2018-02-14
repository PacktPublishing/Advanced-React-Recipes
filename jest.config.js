module.exports = {
  modulePathIgnorePatterns: ['/dist/', '/node_modules/'],
  testRegex: '/src/.*?(Spec)\\.js$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/utils/fileMock.js',
  },
  setupFiles: ['<rootDir>/src/specs/index.js'],
};
