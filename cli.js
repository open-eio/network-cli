#!/usr/bin/env node

var program = require('commander')
program.allowUnknownOption(true)
var fs = require('fs')
var exec = require('child_process').exec

//console.log(process.argv)

program
  .command('wificonnect <wirelessSSID> <password> <wirelessSecurityType>')
  .description('connect to a wifi network')
  .action(wificonnect)

program.parse(process.argv);
