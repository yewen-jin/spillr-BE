const {
  selectCommentSByEpisodeID,
  selectEpisodeByID,
} = require("../models/episodes.models.js");
const { NotFoundError } = require("../utils/errors.js");

async function fetchCommentsByEpisodeService(episode_id, time) {
  try {
    const episode = await selectEpisodeByID(episode_id);
    if (!episode) {
      throw new NotFoundError(`Episode with id ${episode_id} not found`);
    }

    const comments = await selectCommentsByEpisodeID(episode_id, time);
    return comments ? comments : [];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchCommentsByEpisodeService,
};
