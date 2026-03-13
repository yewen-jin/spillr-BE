const db = require("../../../db/connection.js");
const {
  isLive,
  doesThisCommentExist,
  doesThisReplyExist,
  doesThisReactionExist,
} = require("./utils.js");
const { NotFoundError } = require("../../errors/customError.js");

const insertComment = async (commentObj) => {
  const { episode_id, body, user_id, runtime_seconds, is_spoiler } = commentObj;

  const requiredFields = ["episode_id", "body", "user_id", "runtime_seconds"];

  const missingField = requiredFields.find((required) => !commentObj[required]);

  if (missingField) {
    return res.status(400).json({
      msg: `${missingField} is required in request body`,
    });
  }

  if (!is_spoiler) {
    const is_live = await isLive(episode_id);
    const { rows } = await db.query(
      `INSERT INTO comments
    (user_id , body, episode_id, runtime_seconds, is_live) VALUES
    ($1,$2,$3,$4,$5) RETURNING *`,
      [user_id, body, episode_id, runtime_seconds, is_live],
    );
    return rows[0];
  } else {
    const is_live = await isLive(episode_id);
    const { rows } = await db.query(
      `INSERT INTO comments
    (user_id , body, episode_id, runtime_seconds, is_live, is_spoiler) VALUES
    ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [user_id, body, episode_id, runtime_seconds, is_live, is_spoiler],
    );
    return rows[0];
  }
};

const patchSpoiler = async (comment_id, is_spoiler) => {
  if (await doesThisCommentExist(comment_id)) {
    const { rows } = await db.query(
      `UPDATE comments SET is_spoiler = $1 WHERE comment_id = $2 RETURNING *`,
      [is_spoiler, comment_id],
    );
    return rows[0];
  }
  throw new NotFoundError(`Comment with id ${comment_id} not found`);
};

const deleteComment = async (comment_id) => {
  if ((await doesThisCommentExist(comment_id)) === true) {
    const { rows } = await db.query(
      `DELETE FROM comments
     WHERE comment_id = $1
     RETURNING *`,
      [comment_id],
    );

    return rows[0];
  } else {
    throw new NotFoundError(`Comment with id ${comment_id} not found`);
  }
};

const addReply = async (replyObj) => {
  const { comment_id, episode_id, user_id, body, runtime_seconds } = replyObj;

  const requiredFields = [
    "comment_id",
    "user_id",
    "body",
    "runtime_seconds",
    "episode_id",
  ];

  const missingField = requiredFields.find((required) => !replyObj[required]);

  if (missingField) {
    return res.status(400).json({
      msg: `${missingField} is required in request body`,
    });
  }

  if ((await doesThisCommentExist(comment_id)) === true) {
    const { rows } = await db.query(
      `INSERT INTO replies
    (comment_id , user_id, body, episode_id, runtime_seconds) VALUES
    ($1,$2,$3,$4,$5) RETURNING *`,
      [comment_id, episode_id, user_id, body, runtime_seconds],
    );
    return rows[0];
  } else {
    throw new NotFoundError(`Comment with id ${comment_id} not found`);
  }
};

const deleteReply = async (reply_id) => {
  if ((await doesThisReplyExist(reply_id)) === true) {
    const { rows } = await db.query(
      `DELETE FROM replies
     WHERE reply_id = $1
     RETURNING *`,
      [reply_id],
    );

    return rows[0];
  } else {
    throw new NotFoundError(`Reply with id ${reply_id} not found`);
  }
};
const addReaction = async (reactionObj) => {
  const {
    reaction_type,
    comment_id,
    episode_id,
    reply_id,
    runtime_seconds,
    user_id,
  } = reactionObj;

  if (!episode_id && !comment_id && !reply_id) {
    throw new NotFoundError(
      "A reaction must target an episode, comment, or reply",
    );
  } else {
    const { rows } = await db.query(
      `INSERT INTO reactions
    (reaction_type, comment_id, episode_id, reply_id, runtime_seconds, user_id) VALUES
    ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [
        reaction_type,
        comment_id ?? null,
        episode_id ?? null,
        reply_id ?? null,
        runtime_seconds,
        user_id,
      ],
    );

    return rows[0];
  }
};

const removeReaction = async (reaction_id) => {
  if ((await doesThisReactionExist(reaction_id)) === true) {
    const { rows } = await db.query(
      `DELETE FROM reactions
     WHERE reaction_id = $1
     RETURNING *`,
      [reaction_id],
    );

    return rows[0];
  } else {
    throw new NotFoundError(`Reaction with id ${reaction_id} not found`);
  }
};

module.exports = {
  addReaction,
  removeReaction,
  addReply,
  deleteReply,
  deleteComment,
  insertComment,
  patchSpoiler,
};
