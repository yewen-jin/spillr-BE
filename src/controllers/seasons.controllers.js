const { HTTP_STATUS_CODES } = require("../utils/constants.js");
const {
  fetchEpisodesBySeasonIdService,
} = require("../services/seasons.services.js");

async function getEpisodesBySeasonId(req, res, next) {
  const { season_id } = req.params;
  try {
    const episodes = await fetchEpisodesBySeasonIdService(season_id);
    res.status(HTTP_STATUS_CODES.OK).send({ episodes });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getEpisodesBySeasonId,
};
