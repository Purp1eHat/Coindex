#!/usr/bin/env node
const { program } = require('commander'); // Use destructuring
const pkg = require('../package.json'); // Ensure the path is correct

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://coinmarketcap.com')
    .command('check', 'Check Coin Price Info')
    .parse(process.argv)
    

