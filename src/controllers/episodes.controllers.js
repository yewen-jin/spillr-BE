const {
  fetchCommentsByEpisodeService,
  fetchPollsByEpisodeIDService,
  fetchEpisodeByIdService,
} = require("../services/episodes.services.js");
const { HTTP_STATUS_CODES } = require("../utils/constants.js");

async function getCommentsByEpisodeId(req, res, next) {
  const { episode_id } = req.params;
  const { t } = req.query;

  try {
    const comments = await fetchCommentsByEpisodeService(episode_id, t);
    res.status(HTTP_STATUS_CODES.OK).send({ comments });
  } catch (error) {
    next(error);
  }
}

async function getPollsByEpisodeId(req, res, next) {
  const { episode_id } = req.params;
  try {
    const polls = await fetchPollsByEpisodeIDService(episode_id);
    res.status(HTTP_STATUS_CODES.OK).send({ polls });
  } catch (error) {
    next(error);
  }
}

async function getEpisodeById(req, res, next) {
  const { episode_id } = req.params;
  try {
    const episode = await fetchEpisodeByIdService(episode_id);
    res.status(HTTP_STATUS_CODES.OK).send({ episode });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCommentsByEpisodeId,
  getPollsByEpisodeId,
  getEpisodeById,
};
