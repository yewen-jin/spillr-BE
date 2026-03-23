const express = require("express");
const notificationsRouter = express.Router();
const {
  getNotificationsForThisUserId,
} = require("../controllers/notifications.controllers.js");

notificationsRouter.get("/:user_id", getNotificationsForThisUserId);

module.exports = { notificationsRouter };
