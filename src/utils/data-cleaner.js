const {
  fetchShowIdByName,
  fetchShowInfoByID,
  fetchSeasonsByID,
  fetchEpisodesBySeasonID,
} = require("../api/tvMeze");
const { sleep } = require("./data-utils.js");

async function cleanData(showName) {
  try {
    const showID = await fetchShowIdByName(showName);
    const showInfo = await fetchShowInfoByID(showID);
    const seasonsInfo = await fetchSeasonsByID(showID);
    const { seasons, number_of_seasons } = seasonsInfo;
    const episodes = [];

    for (const season of seasons) {
      await sleep(30);
      const seasonEpisodes = await fetchEpisodesBySeasonID(season.season_id);
      episodes.push(seasonEpisodes);
    }
    // cannot use a promise.all here because of the rate limit of the API,so we need to wait for each request to finish before making the next one

    const seasons_clean = seasons.map((season, index) => ({
      ...season,
      number_of_episodes: episodes[index].number_of_episodes,
    }));
    const tv_show_clean = {
      ...showInfo,
      number_of_seasons,
      number_of_episodes: seasons_clean.reduce(
        (acc, season) => acc + season.number_of_episodes,
        0,
      ),
    };
    const episodes_clean = episodes.flatMap((season) => season.episodes);

    return {
      tv_show_clean,
      seasons_clean,
      episodes_clean,
    };
  } catch (err) {
    console.error("fetch failed:", err);
    throw err;
  }
}

module.exports = cleanData;
