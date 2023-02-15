// establishes a connection with the game server
const connect = function (conn) {


  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data
  conn.on("data", (data) => {
    console.log("Server says:" ,data);
  });

  return conn;
};

module.exports = connect;
