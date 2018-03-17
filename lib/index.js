const { join } = require('path');
const { spawn } = require('child_process');

const babelPath = join(__dirname, '..', 'node_modules', '@babel');
const cliPath = join(babelPath, 'cli', 'bin', 'babel.js');
const inputDir = `${process.cwd()}/src`;
const outputDir = `${process.cwd()}/dist`; // --out-dir -d
// const ignore = '.test';
// const plugins = `--plugins=transform-runtime,transform-es2015-modules-amd`;
const presets = `--presets=${join(babelPath, 'preset-env')},` +
  `${join(babelPath, 'preset-react')},` +
  `${join(babelPath, 'preset-flow')}`;

const args = [
  '--no-babelrc',
  inputDir,
  '-d',
  outputDir,
  presets
];

spawn('node', [cliPath, ...args], { stdio: 'inherit' });