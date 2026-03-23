const db = require("../../db/connection.js");

const fetchNotificationsForThisUserId = async (user_id) => {
  const { rows } = await db.query(
    `SELECT 
      notifications.*,
      profiles.username AS actor_username,
      profiles.avatar_url AS actor_avatar_url,
      profiles.user_id AS actor_id
    FROM notifications
    LEFT JOIN replies ON notifications.reply_id = replies.reply_id
    LEFT JOIN reactions ON notifications.reaction_id = reactions.reaction_id
    LEFT JOIN profiles ON COALESCE(replies.user_id, reactions.user_id) = profiles.user_id
    WHERE notifications.user_id = $1
    ORDER BY notifications.created_at DESC`,
    [user_id],
  );
  return rows;
};

module.exports = { fetchNotificationsForThisUserId };
