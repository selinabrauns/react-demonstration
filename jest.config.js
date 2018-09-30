module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  "transform": {
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  "setupTestFrameworkScriptFile": "<rootDir>/setupTests.js",
  "testMatch": [
    "<rootDir>/src/components/**/*.test.js",
  ],
  "moduleNameMapper": {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  "setupFiles": [
    "raf/polyfill"
  ],
};