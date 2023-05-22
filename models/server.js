const express = require("express");
const cors = require("cors");
const sockectController = require("../sockets/controller");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);
    this.paths = {};

    //Middlewares
    this.middlewares();
    //Routes
    this.routes();

    //Sockets
    this.sockets();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.static("public"));
  }

  routes() {
    //this.app.use(this.paths.users, require("../routes/user.route"));
  }

  sockets() {
    this.io.on("connection", sockectController);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Example app listening on port", this.port);
    });
  }
}
module.exports = Server;
