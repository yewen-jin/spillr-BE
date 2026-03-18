const { HTTP_STATUS_CODES } = require("../utils/constants.js");
const {
  fetchRepliesByCommentIdService,
  fetchCommentFeedService,
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

async function getCommentFeed(req, res, next) {
  const { user_id } = req.params;
  const { offset = 0 } = req.query;
  try {
    const feed = await fetchCommentFeedService(user_id, Number(offset));

    res.status(200).send({ comments: feed });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getRepliesByCommentId,
  getCommentFeed,
};
