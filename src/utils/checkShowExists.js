const db = require("../../db/connection");

async function checkShowExists(showName) {
  const { rows } = await db.query(
    "SELECT tv_show_id FROM tv_shows WHERE name = $1",
    [showName],
  );
  return rows.length > 0;
}

module.exports = checkShowExists;
