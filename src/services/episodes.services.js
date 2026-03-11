const {
  selectCommentSByEpisodeID,
  selectEpisodeByID,
} = require("../models/episodes.models.js");
const { NotFoundError } = require("../utils/errors.js");

async function fetchCommentsByEpisodeService(episode_id) {
  try {
    const episode = await selectEpisodeByID(episode_id);
    if (!episode) {
      throw new NotFoundError(`Episode with id ${episode_id} not found`);
    }

    const comments = await selectCommentSByEpisodeID(episode_id);
    return comments ? comments : [];
  } catch (error) {
    throw error;
  }
}
