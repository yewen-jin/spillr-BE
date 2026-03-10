const axios = require("axios");

async function fetchShowInfoByID(ID) {
  try {
    const url = `https://api.tvmaze.com/shows/${ID}`;
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

module.exports = fetchShowInfoByID;
