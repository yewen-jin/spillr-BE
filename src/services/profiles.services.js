const { selectUserByUserId } = require("../models/profiles.models.js");
const { NotFoundError } = require("../errors/customError.js");

async function fetchUserByUserIdService(user_id) {
  try {
    const user = await selectUserByUserId(user_id);
    if (!user) {
      throw new NotFoundError(`No user found for id ${user_id}`);
    }
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchUserByUserIdService,
};
