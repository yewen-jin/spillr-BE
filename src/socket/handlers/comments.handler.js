const {
  addReaction,
  removeReaction,
  addReply,
  deleteReply,
  deleteComment,
  insertComment,
  patchSpoiler,
} = require("../models/comment.models.js");
const { addPollVote, insertPoll } = require("../models/poll.models.js");
const { selectPollsByEpisodeID } = require("../../models/episodes.models.js");

const commentsHandler = (socket, io) => {
  console.log("commentsHandler got connected!");

  socket.on("comment:post", async (comment) => {
    console.log(`received comment`);
    console.log(comment);

    const insertedComment = await insertComment(comment);

    io.to(String(comment.episode_id)).emit("comment:new", {
      ...comment,
      ...insertedComment,
    });
  });

  socket.on("comment:delete", (comment) => {
    console.log(`delete comment`);
    io.to(String(comment.episode_id)).emit(
      "comment:remove",
      comment.comment_id,
    );
    deleteComment(comment.comment_id);
  });

  socket.on("reply:post", async (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    const insertedReply = await addReply(reply);
    io.to(String(reply.episode_id)).emit("reply:new", {
      ...reply,
      ...insertedReply,
    });
  });

  socket.on("reply:delete", async (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    const removedReply = await deleteReply(reply.reply_id);
    io.to(String(reply.episode_id)).emit("reply:remove", {
      ...reply,
      ...removedReply,
    });
  });

  socket.on("reaction:add", async (reaction) => {
    console.log(`reaction:add received`);
    try {
      const result = await addReaction(reaction);
      if (result.toggled) {
        io.to(String(reaction.episode_id)).emit(
          "reaction:removed",
          result.removed,
        );
      } else {
        io.to(String(reaction.episode_id)).emit(
          "reaction:new",
          result.reaction,
        );
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
    io.to(String(reaction.episode_id)).emit(reaction);
  });

  socket.on("spoiler:mark", (comment) => {
    console.log(`a spoiler notice has been marked`);
    patchSpoiler(comment.comment_id, true);
    io.to(String(comment.episode_id)).emit(
      "comment:flagged",
      comment.comment_id,
    );
  });

  socket.on("poll:vote", async (vote) => {
    console.log(`poll vote received for poll ${vote.poll_id}`);
    try {
      await addPollVote(vote);

      const updatedPolls = await selectPollsByEpisodeID(vote.episode_id);

      io.to(String(vote.episode_id)).emit("poll:update", updatedPolls);
    } catch (err) {
      console.log("poll vote error:", err.message);
      socket.emit("poll:error", err.message);
    }
  });

  socket.on("poll:create", async (poll) => {
    try {
      await insertPoll(poll);

      const newPolls = await selectPollsByEpisodeID(poll.episode_id);

      io.to(String(poll.episode_id)).emit("poll:update", newPolls);
    } catch (err) {
      socket.emit("poll:error", err);
    }
  });
};

module.exports = commentsHandler;
