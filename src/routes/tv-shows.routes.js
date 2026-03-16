const express = require("express");
const tvShowRouter = express.Router();
const {
  addShow,
  getTrendingShows,
} = require("../controllers/tv-shows.controllers");

tvShowRouter.post("/", addShow);
tvShowRouter.get("/", getTrendingShows);

module.exports = { tvShowRouter };
