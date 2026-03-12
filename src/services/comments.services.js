const {
  selectRepliesByCommentId,
  selectCommentsByCommentId,
} = require("../models/comments.models.js");
const { NotFoundError } = require("../errors/customError.js");

async function fetchRepliesByCommentIdService(comment_id) {
  try {
    const comment = await selectCommentsByCommentId(comment_id);
    if (!comment) {
      throw new NotFoundError(`Comment with id ${comment_id} not found`);
    }

    const replies = await selectRepliesByCommentId(comment_id);
    return replies ? replies : [];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchRepliesByCommentIdService,
};
