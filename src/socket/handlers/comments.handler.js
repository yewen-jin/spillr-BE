// const db = require("../../../db/connection.js");
const { getIo } = require("../index.js");
const {
  addReaction,
  removeReaction,
  addReply,
  deleteReply,
  deleteComment,
  insertComment,
  patchSpoiler,
} = require("../models/comment.models.js");

const commentsHandler = () => {
  const io = getIo();
  io.on("connection", (socket) => {
    console.log("commentsHandler got connected!");

    socket.on("chat message", (msg) => {
      console.log(">---writing to database--->");
    });

    socket.on("comment", (comment) => {
      console.log(`received comment for episode ${comment.episode_id}`);
      io.emit("comment", comment);
      insertComment(comment);
    });

    socket.on("reply", (reply) => {
      console.log(`received reply for comment ${reply.comment_id}`);
      io.emit("reply", reply);
    });

    socket.on("reaction", (reaction) => {
      console.log(`received reaction ${reaction.reaction_type} `);
      io.emit("reaction", reaction);
    });
  });
};

module.exports = commentsHandler;
