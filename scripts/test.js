const fetchShowIdByName = require("./fetchShowIdByName");
const fetchShowInfoByID = require("./fetchShowInfoByID");
const fetchSeasonsByID = require("./fetchSeasonsByID");
const cleanData = require("./cleanData");
const TV_SHOWS_LIST = require("./CONST");

async function test() {
  for (const showName of TV_SHOWS_LIST) {
    try {
      const data = await fetchShowIdByName(showName);
      const seasons = await fetchSeasonsByID(data);
      console.log(`Info for ${showName} fetched successfully:`, seasons);
    } catch (err) {
      console.error(`Failed to fetch data for ${showName}:`, err);
    }
  }
}

test();
