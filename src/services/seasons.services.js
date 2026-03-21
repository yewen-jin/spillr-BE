const { selectEpisodesBySeasonId } = require("../models/episodes.models.js");
const { NotFoundError } = require("../errors/customError.js");

async function fetchEpisodesBySeasonIdService(season_id) {
  try {
    const episodes = await selectEpisodesBySeasonId(season_id);
    if (!episodes) {
      throw new NotFoundError(`No episodes found for season ${season_id}`);
    }

    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    return episodes.map((episode) => {
      const airDateTime = new Date(
        `${episode.release_date}T${episode.release_time}`,
      );
      return {
        ...episode,
        is_premier: Math.abs(airDateTime - now) <= twentyFourHours,
      };
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchEpisodesBySeasonIdService,
};
