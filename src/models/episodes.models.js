const db = require("../../db/connection.js");

async function selectCommentsByEpisodeID(episode_id, time) {
  const queryValues = [episode_id];
  let queryStr = `
    SELECT
    comments.*,
    profiles.username,
    profiles.avatar_url,
    (SELECT COUNT(*)::int FROM replies WHERE replies.comment_id = comments.comment_id) AS "repliesTotal",
    (SELECT COUNT(*)::int FROM reactions WHERE reactions.comment_id = comments.comment_id) AS reactions_total,
    COALESCE(
      (SELECT JSON_BUILD_OBJECT(
        'angryTotal', COUNT(*) FILTER (WHERE reaction_type = 'angry')::int,
        'laughingTotal', COUNT(*) FILTER (WHERE reaction_type = 'laughing')::int,
        'cryingTotal', COUNT(*) FILTER (WHERE reaction_type = 'crying')::int,
        'fireTotal', COUNT(*) FILTER (WHERE reaction_type = 'fire')::int,
        'deadTotal', COUNT(*) FILTER (WHERE reaction_type = 'dead')::int,
        'heartTotal', COUNT(*) FILTER (WHERE reaction_type = 'heart')::int
      ) FROM reactions WHERE reactions.comment_id = comments.comment_id),
      '{"angryTotal":0,"laughingTotal":0,"cryingTotal":0,"fireTotal":0,"deadTotal":0,"heartTotal":0}'::json
    ) AS "reactionType_total"
    FROM comments
    JOIN profiles ON profiles.user_id = comments.user_id
    WHERE comments.episode_id = $1
    `;
  if (time) {
    queryStr += `
    AND comments.runtime_seconds BETWEEN GREATEST(0,$2 - 180) AND $2
    `;
    queryValues.push(Number(time));
  }

  queryStr += `
    ORDER BY
    comments.runtime_seconds ASC,
    "repliesTotal" DESC,
    reactions_total DESC
  `;
  const { rows } = await db.query(queryStr, queryValues);
  return rows;
}

async function selectEpisodeByID(episode_id) {
  const queryStr = `
    SELECT *
    FROM episodes
    WHERE episode_id = $1
  `;
  const { rows } = await db.query(queryStr, [episode_id]);
  return rows[0];
}

async function selectPollsByEpisodeID(episode_id) {
  const queryStr = `
    SELECT polls.*,
    (SELECT COUNT(*)::int FROM poll_votes WHERE poll_votes.poll_id = polls.poll_id) AS poll_votes_count,
    (SELECT COUNT(*)::int FROM poll_votes WHERE poll_votes.poll_id = polls.poll_id AND poll_votes.field_1 = true) AS poll_field_1_count,
    (SELECT COUNT(*)::int FROM poll_votes WHERE poll_votes.poll_id = polls.poll_id AND poll_votes.field_2 = true) AS poll_field_2_count
    FROM polls
    WHERE episode_id = $1;
  `;
  const { rows } = await db.query(queryStr, [episode_id]);
  return rows;
}

module.exports = {
  selectCommentsByEpisodeID,
  selectEpisodeByID,
  selectPollsByEpisodeID,
};
