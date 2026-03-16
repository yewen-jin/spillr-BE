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

    // socket.on("user:connect", (userId) => {
    //   usersHandler(socket, io, userId);
    // });

    socket.on("room:join", (episodeId) => {
      socket.join(String(episodeId));
      console.log(`joined room: `, episodeId);
      commentsHandler(socket, io, episodeId);
    });

    socket.on("disconnect", () => {
      console.log("A user has disconnected");
    });
  };

  io.on("connection", onConnection);
};

module.exports = initiateSocket;
