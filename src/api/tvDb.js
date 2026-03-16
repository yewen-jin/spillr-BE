const axios = require("axios");

const { TVDB_API } = require("../utils/constants");

const { BASE_URL, SEARCH_SHOWS, SERIES_EXTENDED, SERIES_EPISODES, TOKEN } =
  TVDB_API;

async function fetchShowIdTVDBByName(seriesName) {
  try {
    const name = encodeURIComponent(seriesName);
    const url = `${BASE_URL}${SEARCH_SHOWS}?query=${name}&type=series&country=gbr`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/json",
      },
    });
    const id = response.data.data[0].id;
    if (id) {
      return Number(id.slice(7));
    }
    return null;
  } catch (err) {
    console.error("fetch failed:", err);
    return null;
  }
}

async function fetchSeasonsTVDBByID(ID) {
  try {
    const url = `${BASE_URL}${SERIES_EXTENDED(ID)}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${TVDB_API.TOKEN}`,
        Accept: "application/json",
      },
    });

    const show = response.data;
    const seasons = show.data.seasons || [];

    return {
      seasons: seasons
        .filter((season) => {
          return season.type.type === "official";
        })
        .map((season) => ({
          season_id: season.id,
          tv_show_id: ID,
          season_number: season.number,
          seasonIMG_URL: season.image,
        })),
    };
  } catch (err) {
    console.error("fetch failed:", err);
    return null;
  }
}

async function fetchEpisodesTVDBByID(ID, seasonNumber) {
  try {
    const url = `${BASE_URL}${SERIES_EPISODES(ID)}?season=${seasonNumber}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${TVDB_API.TOKEN}`,
        Accept: "application/json",
      },
    });

    const episodes = response.data.data.episodes || [];

    return {
      episodes: episodes.map((episode) => ({
        episode_number: episode.number,
        season_number: seasonNumber,
        runtime_total: episode.runtime,
        episodeIMG_URL: episode.image,
        synopsis: episode.overview,
      })),
    };
  } catch (err) {
    console.error("fetch failed:", err);
    return null;
  }
}

module.exports = {
  fetchShowIdTVDBByName,

  fetchSeasonsTVDBByID,
  fetchEpisodesTVDBByID,
};
