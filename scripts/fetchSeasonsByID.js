const axios = require("axios");
const compareDate = require("./compareDate");
const sleep = require("./sleep");

async function fetchSeasonsByID(ID) {
  try {
    const url = `https://api.tvmaze.com/shows/${ID}/seasons`;
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

module.exports = fetchSeasonsByID;
