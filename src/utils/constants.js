const path = require("path");

const TV_SHOWS_LIST_1 = [
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
  "SAS: Who Dares Wins",
  "Celebrity SAS: Who Dares Wins",
  "Taskmaster",
  "The 1% Club",
  "Pointless Celebrities",
  "Antiques Roadshow",
  "Bargain Hunt",
  "Escape to the Country",
  "Grand Designs",
  "Glow Up",
  "Interior Design Masters",
  "RuPaul's Drag Race UK",
];

const TV_SHOWS_LIST_2 = [
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
  "Dragons' Den",
  "MasterChef",
  "Celebrity MasterChef",
  "MasterChef: The Professionals",
  "The Great British Bake Off",
  "The Great British Sewing Bee",
  "Junior Bake Off",
  "Come Dine with Me",
];

const FILE_PATH_TV_SHOWS = path.join(
  process.cwd(),
  "../db/data/dev/tv-shows.js",
);
const FILE_PATH_SEASONS = path.join(process.cwd(), "../db/data/dev/seasons.js");
const FILE_PATH_EPISODES = path.join(
  process.cwd(),
  "../db/data/dev/episodes.js",
);

const TVMAZE_API = {
  BASE_URL: "https://api.tvmaze.com",
  SEARCH_SHOWS: "/search/shows?q=",
  SHOW_ID: (showId) => `/shows/${showId}`,
  SHOW_SEASONS: (showId) => `/shows/${showId}/seasons`,
  SEASON_EPISODES: (seasonId) => `/seasons/${seasonId}/episodes`,
};

module.exports = {
  TV_SHOWS_LIST_1,
  TV_SHOWS_LIST_2,
  FILE_PATH_TV_SHOWS,
  FILE_PATH_SEASONS,
  FILE_PATH_EPISODES,
  TVMAZE_API,
};
