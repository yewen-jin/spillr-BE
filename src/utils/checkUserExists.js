const db = require("../../db/connection.js");
const { NotFoundError } = require("../errors/customError.js");

const checkUserExists = async (user_id) => {
  const { rows } = await db.query(
    "SELECT user_id FROM profiles WHERE user_id = $1",
    [user_id],
  );
  if (!rows.length) throw new NotFoundError("User not found");
  return rows[0];
};

module.exports = { checkUserExists };
