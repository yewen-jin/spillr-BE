const {
  addSubscriptiontoProfile,
} = require("../services/subscriptions.services.js");

async function addSubscription(req, res, next) {
  const { user_id, tv_show_id } = req.body;
  try {
    const subscription = await addSubscriptiontoProfile(user_id, tv_show_id);
    res.status(201).send({ subscription });
  } catch (error) {
    next(error);
  }
}

module.exports = { addSubscription };
