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

// User feed queries

async function selectFriendIds(user_id) {
  const query = `
    SELECT
      CASE
        WHEN user_id_1 = $1 THEN user_id_2
        ELSE user_id_1
      END AS friend_id
    FROM friends
    WHERE (user_id_1 = $1 OR user_id_2 = $1)
    AND is_accepted = true;
  `;

  const { rows } = await db.query(query, [user_id]);

  return rows.map((row) => row.friend_id);
}

async function selectFriendComments(friendIds) {
  if (!friendIds.length) return [];

  const query = `
    SELECT
      comments.comment_id,
      comments.user_id,
      profiles.username,
      profiles.avatar_url,
      comments.body,
      comments.episode_id,
      comments.runtime_seconds,
      comments.created_at,
      comments.is_live,
      comments.is_spoiler,
      TRUE AS is_friend
   FROM comments
    JOIN profiles ON comments.user_id = profiles.user_id
    WHERE comments.user_id = ANY($1)
    ORDER BY comments.created_at DESC;
  `;

  const { rows } = await db.query(query, [friendIds]);

  return rows;
}

async function selectGeneralComments(friendIds, user_id) {
  const query = `
    SELECT
      comments.comment_id,
      comments.user_id,
      profiles.username,
      profiles.avatar_url,
      comments.body,
      comments.episode_id,
      comments.runtime_seconds,
      comments.created_at,
      comments.is_live,
      comments.is_spoiler,
      FALSE AS is_friend
    FROM comments
    JOIN profiles ON comments.user_id = profiles.user_id
    WHERE comments.user_id != $1
    ${friendIds.length ? "AND comments.user_id != ALL($2)" : ""}
    ORDER BY comments.created_at DESC;
  `;

  const values = friendIds.length ? [user_id, friendIds] : [user_id];

  const { rows } = await db.query(query, values);

  return rows;
}

module.exports = {
  selectCommentsByCommentId,
  selectRepliesByCommentId,
  selectFriendIds,
  selectFriendComments,
  selectGeneralComments,
};
