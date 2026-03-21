const {
  selectCommentsByEpisodeID,
  selectEpisodeByID,
  selectPollsByEpisodeID,
} = require("../models/episodes.models.js");
const { NotFoundError } = require("../errors/customError.js");

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

async function fetchPollsByEpisodeIDService(episode_id) {
  try {
    const episode = await selectEpisodeByID(episode_id);
    if (!episode) {
      throw new NotFoundError(`Episode with id ${episode_id} not found`);
    }

    const polls = await selectPollsByEpisodeID(episode_id);
    return polls ? polls : [];
  } catch (error) {
    throw error;
  }
}

async function fetchEpisodeByIdService(episode_id) {
  try {
    const episode = await selectEpisodeByID(episode_id);
    if (!episode) {
      throw new NotFoundError(`Episode with id ${episode_id} not found`);
    }
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const airDateTime = new Date(episode.release_date);

    return {
      ...episode,
      is_premier: Math.abs(airDateTime - now) <= twentyFourHours,
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchCommentsByEpisodeService,
  fetchPollsByEpisodeIDService,
  fetchEpisodeByIdService,
};

// calculate is premier for episodes here, just get in model
// const now = Date.now();
//     const twoHours = 2 * 60 * 60 * 1000;

//     return episodes.map((episode) => {
//       const airDateTime = new Date(`${episode.releaseDate}T${episode.releaseTime}`);

//       return {
//         ...episode,
// is_premier: Math.abs(airDateTime - now) <= twoHours
