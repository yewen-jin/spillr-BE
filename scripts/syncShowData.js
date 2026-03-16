const cleanData = require("../src/utils/data-cleaner");
const {
  TV_SHOWS_LIST_1,
  TV_SHOWS_LIST_2,
  TV_SHOW_LIST_3,
  TV_SHOW_LIST_4,
  TV_SHOW_LIST_5,
  FILE_PATH_TV_SHOWS,
  FILE_PATH_SEASONS,
  FILE_PATH_EPISODES,
} = require("../src/utils/constants");
const writeData = require("../src/utils/data-writer");

async function main(...showNameLists) {
  const tv_show_list = [];
  const seasons_clean_list = [];
  const episodes_clean_list = [];
  for (const showNameList of showNameLists) {
    for (const showName of showNameList) {
      try {
        const result = await cleanData(showName);
        if (!result) continue;
        const { tv_show_clean, seasons_clean, episodes_clean } = result;
        tv_show_list.push(tv_show_clean);
        seasons_clean_list.push(seasons_clean);
        episodes_clean_list.push(episodes_clean);
      } catch (err) {
        console.error(`Error occurred while processing ${showName}:`, err);
      }
    }
  }
  const tv_show_content = `const tvShows = ${JSON.stringify(tv_show_list, null, 2)};\n\nmodule.exports = tvShows;`;
  const seasons_content = `const seasons = ${JSON.stringify(seasons_clean_list.flat(), null, 2)};\n\nmodule.exports = seasons;`;
  const episodes_content = `const episodes = ${JSON.stringify(episodes_clean_list.flat(), null, 2)};\n\nmodule.exports = episodes;`;

  try {
    await writeData(FILE_PATH_TV_SHOWS, tv_show_content);
    await writeData(FILE_PATH_SEASONS, seasons_content);
    await writeData(FILE_PATH_EPISODES, episodes_content);
  } catch (err) {
    console.error("Error occurred while writing data:", err);
  }
}
main(
  TV_SHOWS_LIST_1,
  TV_SHOWS_LIST_2,
  TV_SHOW_LIST_3,
  TV_SHOW_LIST_4,
  TV_SHOW_LIST_5,
);
