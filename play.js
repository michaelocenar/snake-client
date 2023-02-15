const net = require("net");
const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");

// pass the conn object to the connect function
setupInput(connect());