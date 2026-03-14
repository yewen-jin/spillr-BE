const {
  addReaction,
  removeReaction,
  addReply,
  deleteReply,
  deleteComment,
  insertComment,
  patchSpoiler,
} = require("../models/comment.models.js");

const commentsHandler = (socket, io) => {
  console.log("commentsHandler got connected!");

  socket.on("comment:post", (comment) => {
    console.log(`received comment`);
    io.emit("comment:new", "new comment:" + comment.body);
    console.log(comment);
    insertComment(comment);
  });

  socket.on("comment:delete", (comment) => {
    console.log(`delete comment`);
    io.emit("comment", "deleting comment:" + comment.comment_id);
    deleteComment(comment);
  });

  socket.on("reply:post", (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    io.emit("reply:new", "new reply:" + reply.body);
    addReply(reply);
  });

  socket.on("reply:delete", (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    deleteReply(reply.reply_id);
  });

  socket.on("reaction:add", (reaction) => {
    console.log(``);
    addReaction(reaction);
  });

  socket.on("reaction:remove", (reaction) => {
    console.log(`remove reaction`);
    removeReaction(reaction.reaction_id);
  });

  socket.on("spoiler:mark", (commentId) => {
    console.log(`a spoiler notice has been marked`);
    patchSpoiler(commentId, true);
  });
};

module.exports = commentsHandler;
