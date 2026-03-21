const express = require("express");
const { addSubscription } = require("../controllers/subscriptions.controllers");

const subscriptionsRouter = express.Router();

subscriptionsRouter.post("/", addSubscription);

module.exports = { subscriptionsRouter };
