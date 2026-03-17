const express = require("express");
const profilesRouter = express.Router();
const {
  getUserByUserId,
  getUserByUsername,
} = require("../controllers/profiles.controllers.js");

profilesRouter.get("/id/:user_id", getUserByUserId);
profilesRouter.get("/username/:username", getUserByUsername);
// profilesRouter.post("/login", postUserLogin);

module.exports = { profilesRouter };
