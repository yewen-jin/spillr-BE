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
    console.log(comment);
    io.to(`episode:${comment.episode_id}`).emit("comment:new", comment); // we will need whole comment object not just comment.body
    insertComment(comment);
  });

  socket.on("comment:delete", (comment) => {
    console.log(`delete comment`);
    io.to(`episode:${comment.episode_id}`).emit(
      "comment",
      "deleting comment:" + comment.comment_id,
    );
    deleteComment(comment);
  });

  socket.on("reply:post", (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    io.to(`episode:${reply.episode_id}`).emit(
      "reply:new",
      "new reply:" + reply.body,
    );
    addReply(reply);
  });

  socket.on("reply:delete", (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    deleteReply(reply.reply_id);
  });

  socket.on("reaction:add", (reaction) => {
    console.log(``);
    io.to(`episode:${reaction.episode_id}`).emit(reaction);
    addReaction(reaction);
  });

  socket.on("reaction:remove", (reaction) => {
    console.log(`remove reaction`);
    io.to(`episode:${reaction.episode_id}`).emit(reaction);
    removeReaction(reaction.reaction_id);
  });

  socket.on("spoiler:mark", (comment) => {
    console.log(`a spoiler notice has been marked`);
    patchSpoiler(comment.comment_id, true);
  });
};

module.exports = commentsHandler;
