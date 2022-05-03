import nextJest from "next/jest";
import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest";
import compileOptions from "./tsconfig.json";

const createJestConfig = nextJest({
  dir: "./",
});

const cutomJestConfig: Config.InitialOptions = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx ", "json"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: pathsToModuleNameMapper(
    compileOptions.compilerOptions.paths,
    { prefix: "<rootDir>/src/" }
  ),
};

export default createJestConfig(cutomJestConfig);
