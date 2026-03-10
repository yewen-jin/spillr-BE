const fs = require("fs/promises");
const path = require("path");
const cleanData = require("./cleanData");
const { TV_SHOWS_LIST_1, TV_SHOWS_LIST_2 } = require("./CONST");
const sleep = require("./sleep");

async function writeData() {
  const tv_show_list = [];
  const seasons_clean_list = [];
  const episodes_clean_list = [];

  for (const showName of TV_SHOWS_LIST_1) {
    try {
      const result = await cleanData(showName);

      if (!result) continue;
      const { tv_show_clean, seasons_clean, episodes_clean } = result;

      if (tv_show_clean) {
        tv_show_list.push(tv_show_clean);
      }
      seasons_clean_list.push(...(seasons_clean || []));
      episodes_clean_list.push(...(episodes_clean || []));
    } catch (err) {
      console.error(`err when dealing with ${showName} :`, err.message);
    }
  }

  await sleep(5000);

  for (const showName of TV_SHOWS_LIST_2) {
    try {
      const result = await cleanData(showName);

      if (!result) continue;
      const { tv_show_clean, seasons_clean, episodes_clean } = result;

      if (tv_show_clean) {
        tv_show_list.push(tv_show_clean);
      }
      seasons_clean_list.push(...(seasons_clean || []));
      episodes_clean_list.push(...(episodes_clean || []));
    } catch (err) {
      console.error(`err when dealing with ${showName} :`, err.message);
    }
  }

  const filePathTvShows = path.join(process.cwd(), "/tv_shows.json");
  const filePathSeasons = path.join(process.cwd(), "/seasons.json");
  const filePathEpisodes = path.join(process.cwd(), "/episodes.json");

  try {
    await fs.writeFile(
      filePathTvShows,
      JSON.stringify(tv_show_list, null, 2),
      "utf8",
    );
    await fs.writeFile(
      filePathSeasons,
      JSON.stringify(seasons_clean_list, null, 2),
      "utf8",
    );
    await fs.writeFile(
      filePathEpisodes,
      JSON.stringify(episodes_clean_list, null, 2),
      "utf8",
    );

    console.log("write succeeded");
  } catch (err) {
    console.error("write failed:", err);
  }
}

// module.exports = writeData;

writeData();
