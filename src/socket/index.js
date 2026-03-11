const { Server } = require("socket.io");
// const commentsHandler = require("./handlers/comments.handler");
// const usersHandler = require("./handlers/users.handler");
let io;

const initiateSocket = (server) => {
  io = new Server(server);
  io.on("connection", (socket) => {
    console.log("A user connected!");

    socket.on("disconnect", () => {
      console.log("A user has disconnected");
    });

    socket.on("chat message", (msg) => {
      console.log("message: " + msg);
    });
  });
};

const getIo = () => io;

module.exports = { initiateSocket, getIo };
