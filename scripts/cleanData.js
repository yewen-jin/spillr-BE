const fetchShowInfoByID = require("./fetchShowInfoByID");
const fetchSeasonsByID = require("./fetchSeasonsByID");
const fetchShowIdByName = require("./fetchShowIdByName");
const fetchEpisodesBySeasonID = require("./fetchEpisodesBySeasonID");
const sleep = require("./sleep");

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

    // await Promise.all(
    //   seasons.map(async (season) => {
    //     await sleep(1000);
    //     return await fetchEpisodesBySeasonID(season.season_id);
    //   }),
    // );

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
  }
}

module.exports = cleanData;
