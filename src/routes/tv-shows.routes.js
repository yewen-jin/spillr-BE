const express = require("express");
const tvShowRouter = express.Router();
const { addShow } = require("../controllers/tv-shows.controllers");

tvShowRouter.post("/", addShow);

module.exports = { tvShowRouter };
