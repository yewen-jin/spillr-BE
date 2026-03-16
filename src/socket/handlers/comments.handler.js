const {
  addReaction,
  removeReaction,
  addReply,
  deleteReply,
  deleteComment,
  insertComment,
  patchSpoiler,
} = require("../models/comment.models.js");

const commentsHandler = (socket, io, episodeId) => {
  console.log("commentsHandler got connected!");

  socket.on("comment:post", (comment) => {
    console.log(`received comment`);
    console.log(comment);
    io.to(String(episodeId)).emit("comment:new", "new comment:" + comment.body);
    comment.episode_id = episodeId;
    insertComment(comment);
  });

  socket.on("comment:delete", (comment) => {
    console.log(`delete comment`);
    io.to(String(episodeId)).emit(
      "comment",
      "deleting comment:" + comment.comment_id,
    );
    deleteComment(comment);
  });

  socket.on("reply:post", (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    io.to(String(episodeId)).emit("reply:new", "new reply:" + reply.body);
    addReply(reply);
  });

  socket.on("reply:delete", (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    deleteReply(reply.reply_id);
  });

  socket.on("reaction:add", (reaction) => {
    console.log(``);
    io.to(String(episodeId)).emit(reaction);
    addReaction(reaction);
  });

  socket.on("reaction:remove", (reaction) => {
    console.log(`remove reaction`);
    io.to(String(episodeId)).emit(reaction);
    removeReaction(reaction.reaction_id);
  });

  socket.on("spoiler:mark", (comment) => {
    console.log(`a spoiler notice has been marked`);
    patchSpoiler(comment.comment_id, true);
  });
};

module.exports = commentsHandler;
