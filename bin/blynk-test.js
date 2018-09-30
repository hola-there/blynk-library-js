#!/usr/bin/env node

var Blynk = require("../");

var AUTH = '';

var blynk = new Blynk.Blynk(AUTH, options = {
  connector : new Blynk.TcpClient(options = { addr:"127.0.1.1", port:8080 })
});

var v1 = new Blynk.VirtualPin(1);
var v9 = new Blynk.VirtualPin(9);

v1.on('write', function(param){
  console.log('V1', param);
});

v9.on('write', function(param){
  v9.write(new Date().getSeconds());
});

blynk.on('connect', function() { console.log("Blynk Ready!"); });
blynk.on('disconnect', function() { console.log("DISCONNECTED!"); });
