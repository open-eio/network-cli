#!/usr/bin/env node

var program = require('commander')
program.allowUnknownOption(true)
var fs = require('fs')
var exec = require('child_process').exec

var wificonnect = require('./lib/ReconfigureNetwork.js')

//console.log(process.argv)

program
  .command('wificonnect <wirelessSSID> <password> <wirelessSecurityType>')
  .description('connect to a wifi network')
  .action(wificonnect)

program.parse(process.argv);
