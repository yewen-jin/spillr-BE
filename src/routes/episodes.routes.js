const express = require("express");
const episodesRouter = express.Router();
const {
  getCommentsByEpisodeId,
  getPollsByEpisodeId,
} = require("../controllers/episodes.controllers.js");

episodesRouter.get("/:episode_id/comments", getCommentsByEpisodeId);
episodesRouter.get("/:episode_id/polls", getPollsByEpisodeId);

module.exports = { episodesRouter };
