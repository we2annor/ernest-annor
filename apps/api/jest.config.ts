export default {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  moduleNameMapper: {
    "^@ernest-annor/shared$": "<rootDir>/../../packages/shared/src/index.ts",
  },
};
