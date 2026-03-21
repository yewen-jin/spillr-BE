const db = require("../../db/connection.js");
async function doesSubscriptionExist(user_id, tv_show_id) {
  const { rows } = await db.query(
    `SELECT 1 FROM subscriptions
     WHERE user_id = $1 AND tv_show_id = $2`,
    [user_id, tv_show_id],
  );
  return rows.length > 0;
}

module.exports = { doesSubscriptionExist };
