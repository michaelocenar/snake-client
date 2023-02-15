const net = require("net");
const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");

const conn = net.createConnection({
  host: "165.227.47.243",
  port: 50541
});


// pass the conn object to the connect function
connect(conn);
setupInput();