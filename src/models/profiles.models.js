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
  WHERE f.user_id_1 = p.user_id OR f.user_id_2 = p.user_id
  ) AS friend_count,
   (
    SELECT COALESCE(JSON_AGG(s), '[]'::json)
    FROM subscriptions s
    WHERE s.user_id = p.user_id
  ) AS subscriptions,
   (
    SELECT COALESCE(JSON_AGG(f), '[]'::json)
    FROM friends f
    WHERE f.user_id_1 = p.user_id OR f.user_id_2 = p.user_id
  ) AS friends
   FROM profiles p
   WHERE p.user_id = $1
    
  `;
  const { rows } = await db.query(queryStr, [user_id]);
  return rows[0];
}

module.exports = { selectUserByUserId };
