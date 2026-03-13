const writeData = require("./data-writer");
const readDataFile = require("./readDataFile");
const {
  FILE_PATH_TV_SHOWS,
  FILE_PATH_SEASONS,
  FILE_PATH_EPISODES,
} = require("./constants");
async function mergeIntoDevData(tv_show_clean, seasons_clean, episodes_clean) {
  const existingShows = await readDataFile(FILE_PATH_TV_SHOWS);
  const existingSeasons = await readDataFile(FILE_PATH_SEASONS);
  const existingEpisodes = await readDataFile(FILE_PATH_EPISODES);

  const updatedShows = [...existingShows, tv_show_clean];
  const updatedSeasons = [...existingSeasons, ...seasons_clean];
  const updatedEpisodes = [...existingEpisodes, ...episodes_clean];

  const toJSModule = (tableName, data) =>
    //string construction for data files
    //null is a filter parameter that JSON.stringify takes
    `const ${tableName} = ${JSON.stringify(data, null, 2)};\n\nmodule.exports = ${tableName};`;
  //async function writeData(path, content) {
  //await fs.writeFile(path, content, "utf8");
  //console.log("write succeeded");
  //}
  await writeData(FILE_PATH_TV_SHOWS, toJSModule("tvShows", updatedShows));
  await writeData(FILE_PATH_SEASONS, toJSModule("seasons", updatedSeasons));
  await writeData(FILE_PATH_EPISODES, toJSModule("episodes", updatedEpisodes));

  console.log(`[addShow] Dev data files updated with "${tv_show_clean.name}"`);
}

module.exports = mergeIntoDevData;
