const sharedConfig = require("jest-config-custom")

// https://jestjs.io/docs/
module.exports = {
  ...sharedConfig,
  rootDir: "./",
  testEnvironment: "node",
}