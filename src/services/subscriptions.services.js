const {
  addSubscriptiontoDb,
  deleteSubscriptionFromDb,
} = require("../models/subscriptions.model.js");
const { NotFoundError } = require("../errors/customError.js");

async function addSubscriptiontoProfile(user_id, tv_show_id) {
  try {
    if (!user_id || !tv_show_id) {
      throw new NotFoundError(
        `tv_show_id:${tv_show_id} or user_id: ${user_id} does not exist in the db`,
      );
    }
    const subscription = await addSubscriptiontoDb(user_id, tv_show_id);
    return subscription;
  } catch (error) {
    throw error;
  }
}

async function deleteSubscriptionFromProfile(user_id, tv_show_id) {
  try {
    if (!user_id || !tv_show_id) {
      throw new NotFoundError(
        `tv_show_id:${tv_show_id} or user_id: ${user_id} does not exist in the db`,
      );
    }
    return await deleteSubscriptionFromDb(user_id, tv_show_id);
  } catch (error) {
    throw error;
  }
}

module.exports = { addSubscriptiontoProfile, deleteSubscriptionFromProfile };
