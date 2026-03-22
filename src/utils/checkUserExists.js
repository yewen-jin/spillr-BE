const checkUserExists = async (db, user_id) => {
  const { rows } = await db.query(
    "SELECT user_id FROM users WHERE user_id = $1",
    [user_id],
  );
  if (!rows.length) throw new AppError("User not found", 404);
  return rows[0];
};

module.exports = checkUserExists;
