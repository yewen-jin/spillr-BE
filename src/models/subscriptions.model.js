const db = require("../../db/connection.js");
const { ConflictError, NotFoundError } = require("../errors/customError.js");

const {
  doesSubscriptionExist,
} = require("../utils/doesThisSubscriptionExist.js");

async function addSubscriptiontoDb(user_id, tv_show_id) {
  const exists = await doesSubscriptionExist(user_id, tv_show_id);
  if (exists)
    throw new ConflictError(`User is already subscribed to this show`);
  const { rows } = await db.query(
    `INSERT INTO subscriptions (user_id, tv_show_id)
     VALUES ($1, $2)
     RETURNING *`,
    [user_id, tv_show_id],
  );
  return rows[0];
}

async function deleteSubscriptionFromDb(user_id, tv_show_id) {
  const exists = await doesSubscriptionExist(user_id, tv_show_id);
  if (!exists) throw new NotFoundError(`Subscription not found`);

  const { rows } = await db.query(
    `DELETE FROM subscriptions
     WHERE user_id = $1 AND tv_show_id = $2
     RETURNING *`,
    [user_id, tv_show_id],
  );
  return rows[0];
}

module.exports = { addSubscriptiontoDb, deleteSubscriptionFromDb };
