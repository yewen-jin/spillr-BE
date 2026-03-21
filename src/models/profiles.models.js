const db = require("../../db/connection.js");

async function selectUserByUserId(user_id) {
  const queryStr = `
      SELECT 
      p.*,
        (SELECT COUNT(*) 
    FROM subscriptions s 
    WHERE s.user_id = p.user_id
  ) AS subscription_count,
   (SELECT COUNT(*) 
    FROM friends f
  WHERE (f.user_id_1 = p.user_id OR f.user_id_2 = p.user_id) AND f.is_accepted = true
  ) AS friend_count,
   (
   SELECT COALESCE(JSON_AGG(
      JSON_BUILD_OBJECT(
        'subscription_id', s.subscription_id,
        'user_id', s.user_id,
        'tv_show_id', s.tv_show_id,
        'name', t.name,
        'tv_show_img_url', t.tv_show_img_url
      )
    ), '[]'::json)
    FROM subscriptions s
    JOIN tv_shows t ON t.tv_show_id = s.tv_show_id
    WHERE s.user_id = p.user_id
  ) AS subscriptions,
   (
  SELECT COALESCE(JSON_AGG(
    JSON_BUILD_OBJECT(
      'friends_id', f.friends_id,
      'user_id_1', f.user_id_1,
      'user_id_2', f.user_id_2,
      'is_accepted', f.is_accepted,
      'friend_user_id', CASE WHEN f.user_id_1 = p.user_id THEN f.user_id_2 ELSE f.user_id_1 END,
      'friend_username', fp.username,
      'friend_avatar_url', fp.avatar_url
    )
  ), '[]'::json)
  FROM friends f
  JOIN profiles fp ON fp.user_id = CASE WHEN f.user_id_1 = p.user_id THEN f.user_id_2 ELSE f.user_id_1 END
  WHERE (f.user_id_1 = p.user_id OR f.user_id_2 = p.user_id) AND f.is_accepted = true
) AS friends
  
   FROM profiles p
   WHERE p.user_id = $1
    
  `;
  const { rows } = await db.query(queryStr, [user_id]);
  return rows[0];
}

async function selectUserByUsername(username) {
  const queryStr = `
      SELECT 
      p.*,
        (SELECT COUNT(*) 
    FROM subscriptions s 
    WHERE s.user_id = p.user_id
  ) AS subscription_count,
   (SELECT COUNT(*) 
    FROM friends f
  WHERE (f.user_id_1 = p.user_id OR f.user_id_2 = p.user_id) AND f.is_accepted = true
  ) AS friend_count,
  (
    SELECT COALESCE(JSON_AGG(
      JSON_BUILD_OBJECT(
        'subscription_id', s.subscription_id,
        'user_id', s.user_id,
        'tv_show_id', s.tv_show_id,
        'name', t.name,
        'tv_show_img_url', t.tv_show_img_url
      )
    ), '[]'::json)
    FROM subscriptions s
    JOIN tv_shows t ON t.tv_show_id = s.tv_show_id
    WHERE s.user_id = p.user_id
  ) AS subscriptions,
  (
  SELECT COALESCE(JSON_AGG(
    JSON_BUILD_OBJECT(
      'friends_id', f.friends_id,
      'user_id_1', f.user_id_1,
      'user_id_2', f.user_id_2,
      'is_accepted', f.is_accepted,
      'friend_user_id', CASE WHEN f.user_id_1 = p.user_id THEN f.user_id_2 ELSE f.user_id_1 END,
      'friend_username', fp.username,
      'friend_avatar_url', fp.avatar_url
    )
  ), '[]'::json)
  FROM friends f
  JOIN profiles fp ON fp.user_id = CASE WHEN f.user_id_1 = p.user_id THEN f.user_id_2 ELSE f.user_id_1 END
  WHERE (f.user_id_1 = p.user_id OR f.user_id_2 = p.user_id) AND f.is_accepted = true
) AS friends
   FROM profiles p
   WHERE p.username = $1
    
  `;
  const { rows } = await db.query(queryStr, [username]);
  return rows[0];
}

async function selectActivityByUser(user_id) {
  const queryStr = `
     SELECT
  c.comment_id,
  c.user_id,
  c.body,
  c.created_at,
  NULL::int AS reply_id,
  NULL::int AS reaction_id,
  NULL::varchar AS reaction_type,
  ts.name AS tv_show_name,
  se.season_number,
  e.episode_number,
  (SELECT COUNT(*)::int FROM reactions WHERE reactions.comment_id = c.comment_id) AS reactions_total,
      (SELECT COUNT(*)::int FROM replies WHERE replies.comment_id = c.comment_id) AS replies_total
FROM comments c
JOIN episodes e ON c.episode_id = e.episode_id
JOIN seasons se ON e.season_id = se.season_id
JOIN tv_shows ts ON se.tv_show_id = ts.tv_show_id
WHERE c.user_id = $1

UNION ALL

SELECT
  r.reply_id AS comment_id,
  r.user_id,
  r.body,
  r.created_at,
  r.reply_id,
  NULL::int AS reaction_id,
  NULL::varchar AS reaction_type,
  ts.name AS tv_show_name,
  se.season_number,
  e.episode_number,
  (SELECT COUNT(*)::int FROM reactions WHERE reactions.reply_id = r.reply_id) AS reactions_total,
      0 AS replies_total
FROM replies r
JOIN comments c ON r.comment_id = c.comment_id
JOIN episodes e ON c.episode_id = e.episode_id
JOIN seasons se ON e.season_id = se.season_id
JOIN tv_shows ts ON se.tv_show_id = ts.tv_show_id
WHERE r.user_id = $1

UNION ALL

SELECT
  rx.comment_id,
  rx.user_id,
  NULL AS body,
  rx.created_at,
  NULL::int AS reply_id,
  rx.reaction_id,
  rx.reaction_type,
  ts.name AS tv_show_name,
  se.season_number,
  e.episode_number,
  0 AS reactions_total,
  0 AS replies_total
FROM reactions rx
JOIN comments c ON rx.comment_id = c.comment_id
JOIN episodes e ON rx.episode_id = e.episode_id
JOIN seasons se ON e.season_id = se.season_id
JOIN tv_shows ts ON se.tv_show_id = ts.tv_show_id
WHERE rx.user_id = $1

ORDER BY created_at DESC;
    
  `;
  const { rows } = await db.query(queryStr, [user_id]);
  return rows;
}

module.exports = {
  selectUserByUserId,
  selectUserByUsername,
  selectActivityByUser,
};
