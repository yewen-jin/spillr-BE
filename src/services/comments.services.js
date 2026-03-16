const {
  selectRepliesByCommentId,
  selectCommentsByCommentId,
  selectFriendIds,
  selectFriendComments,
  selectGeneralComments,
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

async function fetchCommentFeedService(user_id, offset) {
  const friendIds = await selectFriendIds(user_id);

  const friendComments = await selectFriendComments(friendIds);

  const generalComments = await selectGeneralComments(friendIds, user_id);

  const merged = [...friendComments, ...generalComments];

  return merged.slice(offset, offset + 5);
}

module.exports = {
  fetchRepliesByCommentIdService,
  fetchCommentFeedService,
};
