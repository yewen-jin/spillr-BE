const {
  userEpisodeMap,
  episodeUserMap,
} = require("../../utils/relationMap.js");

const userJoinRoom = (socket, io, episodeId, userId) => {
  console.log("userJoinRoom got connected!");

  io.emit("room:userIn", episodeId);

  userEpisodeMap.set(userId, episodeId);
  console.log("userEpisodeMap (after user join room):", userEpisodeMap);
  io.to(`watch:${userId}`).emit("friend:join", { userId, episodeId });

  if (!episodeUserMap.has(episodeId)) {
    const users = new Set();
    users.add(userId);
    episodeUserMap.set(episodeId, users);
    console.log("episodeUserMap (after user leave room):", episodeUserMap);
  } else {
    const users = episodeUserMap.get(episodeId);
    users.add(userId);
    episodeUserMap.set(episodeId, users);
    console.log("episodeUserMap (after user leave room):", episodeUserMap);
  }

  socket.myUserId = userId;
  socket.myEpisodeId = episodeId;
};

const userLeaveRoom = (socket, io, episodeId, userId) => {
  userEpisodeMap.delete(userId);
  console.log("userEpisodeMap (after user leave room):", userEpisodeMap);
  io.to(`watch:${userId}`).emit("friend:leave", { userId, episodeId });

  const users = episodeUserMap.get(episodeId);
  users.delete(userId);
  if (users.size > 0) {
    episodeUserMap.set(episodeId, users);
    console.log("episodeUserMap (after user leave room):", episodeUserMap);
  } else {
    episodeUserMap.delete(episodeId);
    console.log("episodeUserMap (after user leave room):", episodeUserMap);
  }
  io.emit("room:userOut", episodeId);
};

const userDisconnect = (socket, io) => {
  if (socket.myUserId && socket.myEpisodeId) {
    userEpisodeMap.delete(socket.myUserId);
    console.log("userEpisodeMap (after user disconnect):", userEpisodeMap);
    io.to(`watch:${socket.myUserId}`).emit("friend:disconnect", {
      userId: socket.myUserId,
      episodeId: socket.myEpisodeId,
    });

    const users = episodeUserMap.get(socket.myEpisodeId);
    users.delete(socket.myUserId);
    if (users.size > 0) {
      episodeUserMap.set(socket.myEpisodeId, users);
      console.log("episodeUserMap (after user disconnect):", episodeUserMap);
    } else {
      episodeUserMap.delete(socket.myEpisodeId);
      console.log("episodeUserMap (after user disconnect):", episodeUserMap);
    }
    io.emit("room:userOut", socket.myEpisodeId);
  }
};

const friendsRoom = (socket, io, friendsList) => {
  const friendsStatus = friendsList.map((userId) => {
    return { userId, episodeId: userEpisodeMap.get(userId) || "offline" };
  });
  socket.emit("friendsList:status", friendsStatus);
  friendsList.forEach((userId) => {
    socket.join(`watch:${userId}`);
  });
};

const roomsFriend = (socket, io, friendsList) => {
  const roomsStatus = [];
  console.log("friend list:", friendsList);
  console.log(episodeUserMap);
  episodeUserMap.forEach((users, episodeId) => {
    console.log(episodeId);
    let friendsWatching = 0;
    friendsList.forEach((userId) => {
      if (users.has(userId)) friendsWatching++;
    });
    roomsStatus.push({ episodeId, friendsWatching, userWatching: users.size });
  });
  console.log(roomsStatus);
  socket.emit("roomList:status", roomsStatus);
};

module.exports = {
  userJoinRoom,
  userLeaveRoom,
  userDisconnect,
  friendsRoom,
  roomsFriend,
};
