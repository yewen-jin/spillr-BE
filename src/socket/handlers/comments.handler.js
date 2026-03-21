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
    console.log(`received comment`, comment);
    try {
      const insertedComment = await insertComment(comment);
      io.to(String(comment.episode_id)).emit("comment:new", {
        ...comment,
        ...insertedComment,
      });
    } catch (err) {
      console.log(`failed to post comment`, err);
    }
  });

  socket.on("comment:delete", async (comment) => {
    console.log(`delete comment`, comment);
    try {
      await deleteComment(comment.comment_id);
      io.to(String(comment.episode_id)).emit(
        "comment:remove",
        comment.comment_id,
      );
    } catch (err) {
      console.log(`failed to delete comment`, err);
    }
  });

  socket.on("reply:post", async (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    try {
      const insertedReply = await addReply(reply);
      io.to(String(reply.episode_id)).emit("reply:new", {
        ...reply,
        ...insertedReply,
      });
    } catch (err) {
      console.log(`failed to post reply`, err);
    }
  });

  socket.on("reply:delete", async (reply) => {
    console.log(`received reply for comment ${reply.comment_id}`);
    try {
      const removedReply = await deleteReply(reply.reply_id);
      io.to(String(reply.episode_id)).emit("reply:remove", {
        ...reply,
        ...removedReply,
      });
    } catch (err) {
      console.log(`failed to delete reply`, err);
    }
  });

  socket.on("reaction:add", async (reaction) => {
    console.log(`reaction:add received`, reaction);
    try {
      const result = await addReaction(reaction);
      if (result.toggled) {
        io.to(String(reaction.episode_id)).emit(
          "reaction:retract",
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
  socket.on("reaction:remove", async (reaction) => {
    console.log(`remove reaction`, reaction);
    try {
      const result = await removeReaction(reaction.reaction_id);
      io.to(String(reaction.episode_id)).emit("reaction:retract", result);
    } catch (err) {
      console.log(`failed to remove reaction`, err);
    }
  });

  socket.on("spoiler:mark", async (comment) => {
    console.log(`a spoiler notice has been marked`);
    try {
      await patchSpoiler(comment.comment_id, true);
      io.to(String(comment.episode_id)).emit("comment:flagged", {
        comment_id: comment.comment_id,
        isSpoiler: true,
      });
    } catch (err) {
      console.log(`failed to mark spoiler`, err);
    }
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
