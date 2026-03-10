const axios = require("axios");
const compareDate = require("./compareDate");
const airstampToDateTime = require("./airstampToDateTime");
const sleep = require("./sleep");

async function fetchEpisodesBySeasonID(ID) {
  try {
    const url = `https://api.tvmaze.com/seasons/${ID}/episodes`;
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
        isPremier: episode.airdate ? !compareDate(episode.airdate) : false,
        episode_name: episode.name,
        synopsis: episode.summary,
        season_number: episode.season,
      })),
    };
  } catch (err) {
    console.error("fetch failed:", err);
  }
}

module.exports = fetchEpisodesBySeasonID;
