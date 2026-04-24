/** @type {import('jest').Config}  */
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.json" }],
  },
  moduleNameMapper: {
    "^@ernest-annor/shared$": "<rootDir>/../../packages/shared/src/index.ts",
  },
  silent: true,
};
