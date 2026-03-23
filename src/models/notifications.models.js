const db = require("../../db/connection.js");

const fetchNotificationsForThisUserId = async (user_id) => {
  const { rows } = await db.query(
    `SELECT 
      notifications.*,
      profiles.username AS actor_username,
      profiles.avatar_url AS actor_avatar_url,
      profiles.user_id AS actor_id,
      CASE 
        WHEN notifications.notification_type = 'reply_to_comment' THEN comments.body
        WHEN notifications.notification_type = 'reaction_to_comment' THEN comments.body
        WHEN notifications.notification_type = 'reaction_to_reply' THEN replies.body
      END AS original_body,
      episodes.episode_number,
      seasons.season_number,
      tv_shows.name AS tv_show_name
    FROM notifications
    LEFT JOIN replies ON notifications.reply_id = replies.reply_id
    LEFT JOIN reactions ON notifications.reaction_id = reactions.reaction_id
    LEFT JOIN comments ON (
      CASE
        WHEN notifications.notification_type = 'reply_to_comment' THEN replies.comment_id
        WHEN notifications.notification_type = 'reaction_to_comment' THEN reactions.comment_id
      END
    ) = comments.comment_id
    LEFT JOIN episodes ON COALESCE(comments.episode_id, replies.episode_id) = episodes.episode_id
    LEFT JOIN seasons ON episodes.season_id = seasons.season_id
    LEFT JOIN tv_shows ON seasons.tv_show_id = tv_shows.tv_show_id
    LEFT JOIN profiles ON COALESCE(replies.user_id, reactions.user_id) = profiles.user_id
    WHERE notifications.user_id = $1
    ORDER BY notifications.created_at DESC`,
    [user_id],
  );
  return rows;
};

module.exports = { fetchNotificationsForThisUserId };
