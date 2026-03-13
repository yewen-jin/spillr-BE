const db = require("../../../db/connection.js");

const isLive = async (episode_id) => {
    const { rows } = await db.query(
        `SELECT * FROM episodes WHERE episode_id = $1`,
        [episode_id],
    );

    if (!rows || rows.length === 0) {
        return false;
    }
    return rows[0].is_premier;
};

const doesThisCommentExist = async (comment_id) => {
    const { rows } = await db.query(
        `SELECT * FROM comments WHERE comment_id = $1`,
        [comment_id],
    );
    if (!rows || rows.length === 0) {
        return false;
    }
    return true;
};

const doesThisReplyExist = async (reply_id) => {
    const { rows } = await db.query(`SELECT * FROM reply WHERE reply_id = $1`, [
        reply_id,
    ]);
    if (!rows || rows.length === 0) {
        return false;
    }
    return true;
};

const doesThisReactionExist = async (reaction_id) => {
    const { rows } = await db.query(
        `SELECT * FROM reactions WHERE reaction_id = $1`,
        [reaction_id],
    );
    if (!rows || rows.length === 0) {
        return false;
    }
    return true;
};

module.exports = {
    isLive,
    doesThisCommentExist,
    doesThisReplyExist,
    doesThisReactionExist,
};
