const db = require("../../db/connection.js");

async function selectCommentsByCommentId(comment_id) {
  const queryStr = `
    SELECT *
    FROM comments
    WHERE comment_id = $1;
  `;

  const { rows } = await db.query(queryStr, [comment_id]);
  return rows[0];
}

async function selectRepliesByCommentId(comment_id) {
  const queryStr = `
    SELECT 
    replies.*,
    profiles.avatar_url,
    profiles.username,
    parent_profiles.username AS parent_username,
    (SELECT COUNT(*)::int FROM reactions WHERE reactions.reply_id = replies.reply_id) AS reactions_total,
    COALESCE(
      (SELECT JSON_BUILD_OBJECT(
        'angryTotal', COUNT(*) FILTER (WHERE reaction_type = 'angry')::int,
        'laughingTotal', COUNT(*) FILTER (WHERE reaction_type = 'laughing')::int,
        'sadTotal', COUNT(*) FILTER (WHERE reaction_type = 'sad')::int,
        'fireTotal', COUNT(*) FILTER (WHERE reaction_type = 'fire')::int,
        'deadTotal', COUNT(*) FILTER (WHERE reaction_type = 'dead')::int,
        'heartTotal', COUNT(*) FILTER (WHERE reaction_type = 'heart')::int
      ) FROM reactions WHERE reactions.reply_id = replies.reply_id),
      '{"angryTotal":0,"laughingTotal":0,"cryingTotal":0,"fireTotal":0,"deadTotal":0,"heartTotal":0}'::json
    ) AS "reactionType_total"
    FROM replies
    JOIN profiles ON replies.user_id = profiles.user_id
    JOIN comments ON replies.comment_id = comments.comment_id
    JOIN profiles AS parent_profiles ON comments.user_id = parent_profiles.user_id
    WHERE replies.comment_id = $1
    ORDER BY reactions_total DESC;
  `;

  const { rows } = await db.query(queryStr, [comment_id]);
  console.log(rows[0]);
  return rows;
}

module.exports = {
  selectCommentsByCommentId,
  selectRepliesByCommentId,
};
