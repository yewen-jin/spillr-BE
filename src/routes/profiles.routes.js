const express = require("express");
const profilesRouter = express.Router();
const { getUserByUserId } = require("../controllers/profiles.controllers.js");

profilesRouter.get("/:user_id", getUserByUserId);

module.exports = { profilesRouter };
