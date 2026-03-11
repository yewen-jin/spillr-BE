const { HTTP_STATUS_CODES } = require("../utils/constants.js");
const {
  fetchRepliesByCommentIdService,
} = require("../services/comments.services.js");

async function getRepliesByCommentId(req, res, next) {
  const { comment_id } = req.params;
  try {
    const replies = await fetchRepliesByCommentIdService(comment_id);
    res.status(HTTP_STATUS_CODES.OK).send({ replies });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getRepliesByCommentId,
};
