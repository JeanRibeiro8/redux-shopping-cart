module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts",
  ],

  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
  ],

  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.jest.json",
      },
    ],
  },
}
