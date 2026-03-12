const db = require("../../db/connection.js");
const { isLive, doesThisCommentExist } = require("./utils.js");

const insertComment = async (commentObj) => {
  const { episode_id, body, user_id, runtime_seconds, is_spoiler } = commentObj;
  if (!is_spoiler) {
    const is_live = isLive(episode_id);
    const { rows } = await db.query(
      `INSERT INTO comments
    (user_id , body, episode_id, runtime_seconds, is_live) VALUES 
    ($1,$2,$3,$4,$5) RETURNING *`,
      [user_id, body, episode_id, runtime_seconds, is_live],
    );
    return rows[0];
  } else {
    const is_live = isLive(episode_id);
    const { rows } = await db.query(
      `INSERT INTO comments
    (user_id , body, episode_id, runtime_seconds, is_live, is_spoiler) VALUES 
    ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [user_id, body, episode_id, runtime_seconds, is_live, is_spoiler],
    );
    return rows[0];
  }
};

const deleteComment = async (comment_id) => {
  if (doesThisCommentExist(comment_id) === true) {
    const { rows } = await db.query(
      `DELETE FROM comments
     WHERE comment_id = $1
     RETURNING *`,
      [comment_id],
    );

    return rows[0];
  } else {
    // comment has been delted message
  }
};

const addReply = async (replyObj) => {
  if (doesThisCommentExist(comment_id) === true) {
    const { comment_id, episode_id, user_id, body, runtime_seconds } = replyObj;
    const { rows } = await db.query(
      `INSERT INTO replies
    (comment_id , user_id, body, episode_id, runtime_seconds) VALUES 
    ($1,$2,$3,$4,$5) RETURNING *`,
      [comment_id, episode_id, user_id, body, runtime_seconds],
    );
    return rows[0];
  } else {
    // send an error the comment doesn't exist
    // also need to error handle a reply with no body, user_id, no runtime-seconds, no episode id
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
    return { msg: "no parent_id exists for this reaction" };
  }

  !episode_id ? (episode_id = null) : (episode_id = episode_id);
  !comment_id ? (comment_id = null) : (comment_id = comment_id);
  !reply_id ? (reply_id = null) : (reply_id = comment_id);

  const { rows } = await db.query(``);
  //insert into replies table this reply that has this comment_id and episode_id
  return rows[0];
};

module.exports = { addReaction, addReply, deleteComment, insertComment };
