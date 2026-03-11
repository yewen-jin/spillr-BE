const express = require("express");
const episodesRouter = express.Router();
const {
  getCommentsByEpisodeId,
} = require("../controllers/episodes.controllers.js");

episodesRouter.get("/:episode_id/comments", getCommentsByEpisodeId);

module.exports = { episodesRouter };
