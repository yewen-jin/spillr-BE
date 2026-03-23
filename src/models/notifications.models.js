const db = require("../../db/connection.js");

const fetchNotificationsForThisUserId = async (user_id) => {
  const { rows } = await db.query(
    `SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC`,
    [user_id],
  );
  return rows;
};

module.exports = { fetchNotificationsForThisUserId };
