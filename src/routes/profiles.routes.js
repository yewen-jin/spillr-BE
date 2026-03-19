const express = require("express");
const profilesRouter = express.Router();
const {
  getUserByUserId,
  getUserByUsername,
  getUserActivity,
} = require("../controllers/profiles.controllers.js");

profilesRouter.get("/id/:user_id", getUserByUserId);
profilesRouter.get("/username/:username", getUserByUsername);
profilesRouter.get("/:user_id/history", getUserActivity);

module.exports = { profilesRouter };
