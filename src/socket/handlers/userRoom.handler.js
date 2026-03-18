const {
  userEpisodeMap,
  episodeUserMap,
} = require("../../utils/relationMap.js");

const userJoinRoom = (socket, io, episodeId, userId) => {
  console.log("userJoinRoom got connected!");

  userEpisodeMap.set(userId, episodeId);
  console.log(userEpisodeMap);
  io.to(`watch:${userId}`).emit("friend:join", { userId: episodeId });

  if (!episodeUserMap.has(episodeId)) {
    const users = new Set();
    users.add(userId);
    episodeUserMap.set(episodeId, user);
    console.log(episodeUserMap);
  } else {
    const users = episodeUserMap.get(episodeId);
    users.add(userId);
    episodeUserMap.set(episodeId, users);
    console.log(episodeUserMap);
  }

  socket.myUserId = userId;
  socket.myEpisodeId = episodeId;
};

const userLeaveRoom = (socket, io, episodeId, userId) => {
  userEpisodeMap.delete(userId);
  console.log(userEpisodeMap);
  io.to(`watch:${userId}`).emit("friend:leave", { userId: episodeId });

  const users = episodeUserMap.get(episodeId);
  users.delete(userId);
  if (users.size > 0) {
    episodeUserMap.set(episodeId, users);
    console.log(episodeUserMap);
  } else {
    episodeUserMap.delete(episodeId);
    console.log(episodeUserMap);
  }
};

const userDisconnect = (socket, io) => {
  if (socket.userId && socket.episodeId) {
    userEpisodeMap.delete(socket.userId);
    console.log(userEpisodeMap);
    io.to(`watch:${userId}`).emit("friend:disconnect", { userId: episodeId });

    const users = episodeUserMap.get(socket.episodeId);
    users.delete(socket.userId);
    if (users.size > 0) {
      episodeUserMap.set(socket.episodeId, users);
      console.log(episodeUserMap);
    } else {
      episodeUserMap.delete(socket.episodeId);
      console.log(episodeUserMap);
    }
  }
};

const friendsRoom = (socket, io, friendsList) => {
  const friendsStatus = friendsList.map((userId) => {
    return { userId: userEpisodeMap.get(userId) || "offline" };
  });
  socket.emit("friendsList:status", friendsStatus);
  friendsList.forEach((userId) => {
    socket.join(`watch:${userId}`);
  });
};

module.exports = { userJoinRoom, userLeaveRoom, userDisconnect, friendsRoom };
