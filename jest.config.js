// const nextJest = require("next/jest");
// const createJestConfig = nextJest({
//   dir: "./",
// });
// const customJestConfig = {
//   moduleDirectories: ["node_modules", "<rootDir>/"],
//   testEnvironment: "jest-environment-jsdom",
// };
// module.exports = createJestConfig(customJestConfig);

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = createJestConfig(customJestConfig);
