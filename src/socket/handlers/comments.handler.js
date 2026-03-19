const {
  addReaction,
  removeReaction,
  addReply,
  deleteReply,
  deleteComment,
  insertComment,
  patchSpoiler,
} = require("../models/comment.models.js");
const { addPollVote } = require("../models/poll.models.js");

const commentsHandler = (socket, io, episodeId) => {
  console.log("commentsHandler got connected!");

  socket.on("comment:post", (comment) => {
    console.log(`received comment`);
    console.log(comment);
    io.to(`episode:${comment.episode_id}`).emit("comment:new", comment); // we will need whole comment object not just comment.body
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

  socket.on("reaction:add", async (reaction) => {
    console.log(`reaction:add received`);
    try {
      const newReaction = await addReaction(reaction);
      io.to(String(episodeId)).emit("reaction:new", newReaction);
    } catch (err) {
      console.log("reaction error:", err.message);
      socket.emit("reaction:error", { msg: err.message });
    }
  });

  socket.on("reaction:remove", (reaction) => {
    console.log(`remove reaction`);
    io.to(String(episodeId)).emit(reaction);
    removeReaction(reaction.reaction_id);
  });

  socket.on("spoiler:mark", (comment_id) => {
    console.log(`a spoiler notice has been marked`);
    patchSpoiler(comment_id, true);
    io.to(`episode:${episodeId}`).emit("comment:flagged", comment_id);
  });

  socket.on("poll:vote", async (vote) => {
    console.log(`poll vote received for poll ${vote.poll_id}`);
    try {
      const newVote = await addPollVote(vote);
      io.to(`episode:${episodeId}`).emit("poll:updated", newVote);
    } catch (err) {
      console.log("poll vote error:", err.message);
      socket.emit("poll:error", { msg: err.message });
    }
  });
};

module.exports = commentsHandler;
