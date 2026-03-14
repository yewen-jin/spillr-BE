const path = require("path");

const TV_SHOWS_LIST_1 = [
  "Dragons' Den",
  "MasterChef",
  "Celebrity MasterChef",
  "MasterChef: The Professionals",
  "The Great British Bake Off",
  "The Great British Sewing Bee",
  "Junior Bake Off",
  "Come Dine with Me",
];

const TV_SHOWS_LIST_2 = [
  "SAS: Who Dares Wins",
  "Celebrity SAS: Who Dares Wins",
  "Taskmaster",
  "The 1% Club",
  "Pointless Celebrities",
  "Antiques Roadshow",
  "Bargain Hunt",
  "Escape to the Country",
  "Grand Designs",
];

const TV_SHOW_LIST_3 = [
  "Glow Up",
  "Interior Design Masters",
  "RuPaul's Drag Race UK",
  "Breaking Bad",
  "Skins",
  "Survivor",
];

const TV_SHOW_LIST_4 = [
  "Four in a Bed",
  "Gogglebox",
  "Celebrity Gogglebox",
  "First Dates",
  "First Dates Hotel",
  "Naked Attraction",
  "Married at First Sight",
  "Geordie Shore",
  "The Only Way Is Essex",
  "Made in Chelsea",
  "Ex on the Beach",
  "Race Across the World",
  "Hunted",
];
const TV_SHOW_LIST_5 = [
  "Coronation Street",
  "EastEnders",
  "Hollyoaks",
  "Neighbours",
  "Love Island",
  "Big Brother",
  "Celebrity Big Brother",
  "The Traitors",
  "I'm a Celebrity... Get Me Out of Here!",
  "Strictly Come Dancing",
  "Britain's Got Talent",
  "The X Factor",
  "Dancing on Ice",
  "The Voice",
  "The Apprentice",
];

const FILE_PATH_TV_SHOWS = path.join(
  __dirname,
  "../../db/data/dev/tv-shows.js",
);
const FILE_PATH_SEASONS = path.join(__dirname, "../../db/data/dev/seasons.js");
const FILE_PATH_EPISODES = path.join(
  __dirname,
  "../../db/data/dev/episodes.js",
);
const TVMAZE_API = {
  BASE_URL: "https://api.tvmaze.com",
  SEARCH_SHOWS: "/search/shows?q=",
  SHOW_ID: (showId) => `/shows/${showId}`,
  SHOW_SEASONS: (showId) => `/shows/${showId}/seasons`,
  SEASON_EPISODES: (seasonId) => `/seasons/${seasonId}/episodes`,
};

const TVDB_API = {
  BASE_URL: "https://api4.thetvdb.com/v4",
  SEARCH_SHOWS: "/search",
  SERIES_EXTENDED: (seriesId) => `/series/${seriesId}/extended`,
  SERIES_EPISODES: (seriesId) => `/series/${seriesId}/episodes/official`,
  TOKEN: process.env.TVDB_TOKEN,
};

const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL: 500,
};

module.exports = {
  TV_SHOWS_LIST_1,
  TV_SHOWS_LIST_2,
  TV_SHOW_LIST_3,
  TV_SHOW_LIST_4,
  TV_SHOW_LIST_5,
  FILE_PATH_TV_SHOWS,
  FILE_PATH_SEASONS,
  FILE_PATH_EPISODES,
  TVMAZE_API,
  HTTP_STATUS_CODES,
  TVDB_API,
};
