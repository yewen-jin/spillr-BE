const axios = require("axios");
const {
  compareDate,
  airstampToDateTime,
  findShowIDByCountry,
} = require("../utils/data-utils");
const { TVMAZE_API } = require("../utils/constants");

const { BASE_URL, SEARCH_SHOWS, SHOW_SEASONS, SHOW_ID, SEASON_EPISODES } =
  TVMAZE_API;

async function fetchShowIdByName(seriesName) {
  try {
    const name = encodeURIComponent(seriesName);
    const url = `${BASE_URL}${SEARCH_SHOWS}${name}`;
    const response = await axios.get(url);
    return findShowIDByCountry(response.data, seriesName, "GB");
  } catch (err) {
    console.error("fetch failed:", err);
  }
}

async function fetchShowInfoByID(ID) {
  try {
    const url = `${BASE_URL}${SHOW_ID(ID)}`;
    const response = await axios.get(url);

    const show = response.data;
    const TVShowInfo = {
      tv_show_id: show.id,
      name: show.name,
      type: show.type,
      description: show.summary,
      TVShowIMG_URL: show.image,
    };

    return TVShowInfo;
  } catch (err) {
    console.error("fetch failed:", err);
  }
}

async function fetchSeasonsByID(ID) {
  try {
    const url = `${BASE_URL}${SHOW_SEASONS(ID)}`;
    const response = await axios.get(url);

    const seasons = response.data;

    return {
      number_of_seasons: seasons.length,
      seasons: seasons.map((season) => ({
        season_id: season.id,
        tv_show_id: ID,
        season_number: season.number,
        seasonIMG_URL: season.image,
        isContinuing: season.endDate ? compareDate(season.endDate) : true,
        airdate: season.premiereDate,
      })),
    };
  } catch (err) {
    console.error("fetch failed:", err);
  }
}

async function fetchEpisodesBySeasonID(ID) {
  try {
    const url = `${BASE_URL}${SEASON_EPISODES(ID)}`;
    const response = await axios.get(url);

    const episodes = response.data;

    return {
      number_of_episodes: episodes.length,
      episodes: episodes.map((episode) => ({
        episode_id: episode.id,
        episode_number: episode.number,
        season_id: ID,
        runtime_total: episode.runtime,
        releaseDate: airstampToDateTime(episode.airstamp).airdate,
        releaseTime: airstampToDateTime(episode.airstamp).airtime,
        episodeIMG_URL: episode.image,
        episode_name: episode.name,
        synopsis: episode.summary,
        season_number: episode.season,
      })),
    };
  } catch (err) {
    console.error("fetch failed:", err);
  }
}

module.exports = {
  fetchShowIdByName,
  fetchShowInfoByID,
  fetchSeasonsByID,
  fetchEpisodesBySeasonID,
};
