#!/usr/bin/env node

const packageJson = require('../package.json');

const args = process.argv.slice(2);

if (args[0] === '-v' || args[0] === '--version') {
  console.log(packageJson.version);
  process.exit();
}

require("../lib");