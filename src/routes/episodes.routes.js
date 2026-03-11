const express = require("express");
const episodesRouter = express.Router();

episodesRouter.get("/:episode_id/comments", getCommentsByEpisodeId);

module.exports = episodesRouter;
