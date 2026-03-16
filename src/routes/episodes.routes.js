const express = require("express");
const episodesRouter = express.Router();
const {
  getCommentsByEpisodeId,
  getPollsByEpisodeId,
  getEpisodeById,
} = require("../controllers/episodes.controllers.js");

episodesRouter.get("/:episode_id/comments", getCommentsByEpisodeId);
episodesRouter.get("/:episode_id/polls", getPollsByEpisodeId);
episodesRouter.get("/:episode_id", getEpisodeById);

module.exports = { episodesRouter };
