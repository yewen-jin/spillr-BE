const {
  fetchCommentsByEpisodeService,
} = require("../models/episodes.models.js");
const { HTTP_STATUS_CODES } = require("../utils/constants.js");

async function getCommentsByEpisodeId(req, res, next) {
  const { episode_id } = req.params;

  try {
    const comments = await fetchCommentsByEpisodeService(episode_id);
    res.status(HTTP_STATUS_CODES.OK).send({ comments });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCommentsByEpisodeId,
};
