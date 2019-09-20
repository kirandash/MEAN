const app = require("./backend/app"); // importing express setup
const http = require("http"); // importing http from node
const debug = require("debug")("node-angular"); // importing debug: package of node, optional identifier: node-angular

// Function to make sure that port is a valid number
const normalizedPort = val => {
  var port = parseInt(val, 10);

  if(isNaN(port)){
    // named pipe
    return val;
  }

  if(port >= 0){
    // port number
    return port;
  }

  return false;
}

// Error Handling Function
const onError = error => {
  if(error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  switch(error.code){
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit();
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Function to log where app is listening
const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
    debug("Listening on " + bind);
}

// const port = process.env.PORT || 3000;
const port = normalizedPort(process.env.PORT || "3000"); // Defining the port

/*const server = http.createServer((req, res) => {
  res.end("This is the first response");
});*/

app.set('port', port); // Setting the port for our express app
const server = http.createServer(app); // Create node server
server.on("error", onError); // On error
server.on("listening", onListening); // on listening
server.listen(port);
