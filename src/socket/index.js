const { Server } = require("socket.io");
const commentsHandler = require("./handlers/comments.handler");
const {
  userJoinRoom,
  userLeaveRoom,
  userDisconnect,
  friendsRoom,
  roomsFriend,
} = require("./handlers/userRoom.handler.js");

const initiateSocket = (server) => {
  const io = new Server(server);
  const onConnection = (socket) => {
    console.log("A user connected!");
    commentsHandler(socket, io);

    socket.on("chat message", (msg) => {
      console.log("get message from client: " + msg);
      io.emit("chat message", msg);
    });

    socket.on("room:join", ({ episodeId, userId }) => {
      socket.join(String(episodeId));
      console.log(`${userId} joined episode room ${episodeId}`);

      userJoinRoom(socket, io, episodeId, userId);
    });

    socket.on("room:leave", ({ episodeId, userId }) => {
      socket.leave(String(episodeId));
      console.log(`${userId} left episode room ${episodeId}`);
      userLeaveRoom(socket, io, episodeId, userId);
      socket.intentionalLeave = true;
    });

    socket.on("disconnect", () => {
      console.log("A user has disconnected");
      if (!socket.intentionalLeave) {
        console.log("It is not an intentionalLeave");
        userDisconnect(socket, io);
      }
    });

    socket.on("friendsList:load", (friendList) => {
      console.log("Load friendsList");
      friendsRoom(socket, io, friendList);
    });

    socket.on("room:load", (friendList) => {
      console.log("Load room", friendList);
      friendsRoom(socket, io, friendList);
      roomsFriend(socket, io, friendList);
    });
  };
  io.on("connection", onConnection);
};

module.exports = initiateSocket;
