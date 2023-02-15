const net = require("net");

// establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data
  conn.on("data", (data) => {
    console.log("Server says:" ,data);
  });

  // print message when connection has been established
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: FOX");
  });

  return conn;
};

module.exports = connect;
