const { Server } = require("socket.io");
const commentsHandler = require("./handlers/comments.handler");
const usersHandler = require("./handlers/users.handler");

const initiateSocket = (server) => {
  const io = new Server(server);
  const onConnection = (socket) => {
    console.log("A user connected!");

    socket.on("chat message", (msg) => {
      console.log("get message from client: " + msg);
      io.emit("chat message", msg);
    });

    socket.on("user:connect", (userId) => {
      console.log(`${userId} joined`);
      usersHandler(socket, io, userId);
    });

    socket.on("room:join", (episodeId) => {
      console.log(`joined episode room ${episodeId}`);
      socket.join(`episode:${episodeId}`);
      commentsHandler(socket, io, episodeId);
    });

    socket.on("room:leave", (episodeId) => {
      console.log(`left episode room ${episodeId}`);
      socket.leave(`episode:${episodeId}`);
    });

    socket.on("disconnect", () => {
      console.log("A user has disconnected");
    });
  };

  io.on("connection", onConnection);
};

module.exports = initiateSocket;
