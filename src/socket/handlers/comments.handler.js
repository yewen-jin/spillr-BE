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
const { selectPollsByEpisodeID } = require("../../models/episodes.models.js");

const commentsHandler = (socket, io, episodeId) => {
  console.log("commentsHandler got connected!");

  socket.on("comment:post", async (comment) => {
    console.log(`received comment`);
    console.log(comment);

    const insertedComment = await insertComment(comment);

    io.to(String(episodeId)).emit("comment:new", {
      ...comment,
      ...insertedComment,
    });
  });

  socket.on("comment:delete", (comment) => {
    console.log(`delete comment`);
    io.to(String(episodeId)).emit("comment:remove", comment);
    deleteComment(comment);
  });

  socket.on("reply:post", (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    io.to(String(episodeId)).emit("reply:new", reply);
    addReply(reply);
  });

  socket.on("reply:delete", (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    io.to(String(episodeId)).emit("reply:remove", reply);
    deleteReply(reply.reply_id);
  });

  socket.on("reaction:add", async (reaction) => {
    console.log(`reaction:add received`);
    try {
      const result = await addReaction(reaction);
      if (result.toggled) {
        io.to(String(episodeId)).emit("reaction:removed", result.removed);
      } else {
        io.to(String(episodeId)).emit("reaction:new", result.reaction);
      }
    } catch (err) {
      console.log("reaction error:", err.message);
      socket.emit("reaction:error", { msg: err.message });
    }
  });

  //remove reaction if needed for episode reactions
  socket.on("reaction:remove", (reaction) => {
    console.log(`remove reaction`);
    removeReaction(reaction.reaction_id);
    io.to(String(episodeId)).emit(reaction);
  });

  socket.on("spoiler:mark", (comment) => {
    console.log(`a spoiler notice has been marked`);
    patchSpoiler(comment.comment_id, comment.is_spoiler);
    io.to(String(episodeId)).emit(comment.is_spoiler);
  });

  socket.on("poll:vote", async (vote) => {
    console.log(`poll vote received for poll ${vote.poll_id}`);
    try {
      await addPollVote(vote);

      const updatedPolls = await selectPollsByEpisodeID(episodeId);

      io.to(String(episodeId)).emit("poll:update", updatedPolls);
    } catch (err) {
      console.log("poll vote error:", err.message);
      socket.emit("poll:error", { msg: err.message });
    }
  });
};

module.exports = commentsHandler;
