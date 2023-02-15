// establishes a connection with the game server
const connect = function (conn) {


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
