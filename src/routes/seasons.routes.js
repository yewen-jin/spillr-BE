const express = require("express");
const seasonsRouter = express.Router();
const {
  getEpisodesBySeasonId,
} = require("../controllers/seasons.controllers.js");

seasonsRouter.get("/:season_id/episodes", getEpisodesBySeasonId);

module.exports = { seasonsRouter };
