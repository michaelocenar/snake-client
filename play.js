const net = require("net");
const connect = require("./client");

console.log("Connecting ...");

const conn = net.createConnection({
  host: "165.227.47.243",
  port: 50541
});

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
};

process.stdin.on("data", handleUserInput);

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// pass the conn object to the connect function
connect(conn);
setupInput();