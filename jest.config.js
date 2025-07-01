module.exports = { 
  preset: "ts-jest", 
  testEnvironment: "node", 
  testMatch: ["**/__tests__/**/*.test.ts", "**/test/**/*.test.ts"], 
  transform: { "^.+\\.tsx?$": "ts-jest" },
  moduleNameMapper: {
    "^@card/(.*)$": "<rootDir>/src/card/$1",
    "^@common/(.*)$": "<rootDir>/src/common/$1", 
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@basic/(.*)$": "<rootDir>/src/components/basic/$1"
  }
};
