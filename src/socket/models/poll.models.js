const db = require("../../../db/connection.js");
const { hasVoted } = require("./utils.js");
const { ConflictError } = require("../../errors/customError.js");

const addPollVote = async (voteObj) => {
  const { poll_id, user_id, field_1, field_2 } = voteObj;

  const alreadyVoted = await hasVoted(user_id, poll_id);
  if (alreadyVoted) {
    throw new ConflictError("User has already voted on this poll");
  }

  const { rows } = await db.query(
    `INSERT INTO poll_votes(poll_id, user_id, field_1, field_2)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [poll_id, user_id, field_1 ?? false, field_2 ?? false],
  );

  return rows[0];
};

module.exports = { addPollVote };
