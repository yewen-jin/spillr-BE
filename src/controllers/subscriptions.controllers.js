const {
  addSubscriptiontoProfile,
  deleteSubscriptionFromProfile,
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

async function deleteSubscription(req, res, next) {
  const { user_id, tv_show_id } = req.body;
  try {
    await deleteSubscriptionFromProfile(user_id, tv_show_id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = { addSubscription, deleteSubscription };
