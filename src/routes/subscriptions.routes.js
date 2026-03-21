const express = require("express");
const {
  addSubscription,
  deleteSubscription,
} = require("../controllers/subscriptions.controllers.js");

const subscriptionsRouter = express.Router();

subscriptionsRouter.post("/", addSubscription);

subscriptionsRouter.delete("/", deleteSubscription);

module.exports = { subscriptionsRouter };
