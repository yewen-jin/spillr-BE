const axios = require("axios");

async function fetchShowIdByName(seriesName) {
  try {
    const name = encodeURIComponent(seriesName);
    const url = `https://api.tvmaze.com/search/shows?q=${name}`;
    const response = await axios.get(url);
    for (const tvshow of response.data) {
      if (tvshow.show.network?.country?.code === "GB") {
        return tvshow.show.id;
      }
    }
    return null;
  } catch (err) {
    console.error("fetch failed:", err);
  }
}

module.exports = fetchShowIdByName;
