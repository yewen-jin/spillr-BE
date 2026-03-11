const db = require("../../db/connection.js");

async function selectCommentsByEpisodeID(episode_id, time) {
  const queryValues = [episode_id];
  const queryStr = `
    SELECT
    comments.*,
    profiles.username,
    profiles.avatar_url,
    COUNT(DISTINCT replies.reply_id) AS reply_count,
    COUNT(DISTINCT reactions.reaction_id) AS reaction_count
    FROM comments
    JOIN profiles ON profiles.user_id = comments.user_id
    LEFT JOIN replies ON replies.comment_id = comments.comment_id
    LEFT JOIN reactions ON reactions.comment_id = comments.comment_id
    WHERE comments.episode_id = $1
    `;
  if (time) {
    queryStr += `
    AND comments.runtime_seconds BETWEEN ($2 - 180) AND $2
    `;
    queryValues.push(Number(time));
  }

  queryStr += `
    GROUP BY comments.comment_id, profiles.username, profiles.avatar_url
    ORDER BY
    comments.runtime_seconds ASC,
    reply_count DESC,
    reaction_count DESC
  `;
  const { rows } = await db.query(queryStr, queryValues);
  return rows;
}

async function selectEpisodeByID(episode_id) {
  const queryStr = `
    SELECT *
    FROM episodes
    WHERE id = $1
  `;
  const { rows } = await db.query(queryStr, [episode_id]);
  return rows[0];
}

module.exports = {
  selectCommentsByEpisodeID,
  selectEpisodeByID,
};
