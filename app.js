require("dotenv").config();
const cluster = require("cluster");
const Server = require("./models/server");

if (cluster.isMaster) {
    cluster.fork();
} else {
  const server = new Server();
  server.listen();
}
