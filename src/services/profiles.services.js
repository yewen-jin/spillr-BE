const {
  selectUserByUserId,
  selectUserByUsername,
  selectActivityByUser,
  fetchFriendRequestsByUser,
} = require("../models/profiles.models.js");
const { NotFoundError } = require("../errors/customError.js");

const { checkUserExists } = require("../utils/checkUserExists.js");

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

async function fetchUserByUsernameService(username) {
  try {
    const user = await selectUserByUsername(username);
    if (!user) {
      throw new NotFoundError(`No user found with username ${username}`);
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function fetchActivityByUserService(user_id) {
  try {
    const user = await selectActivityByUser(user_id);
    if (!user) {
      throw new NotFoundError(`No user found with id ${user_id}`);
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function fetchFriendRequestsByUserSL(user_id) {
  const isUser = await checkUserExists(user_id);
  if (isUser) {
    try {
      const requests = await fetchFriendRequestsByUser(user_id);
      return requests;
    } catch (err) {
      throw err;
    }
  } else {
    throw new NotFoundError(`No user found with id ${user_id}`);
  }
}

module.exports = {
  fetchUserByUserIdService,
  fetchUserByUsernameService,
  fetchActivityByUserService,
  fetchFriendRequestsByUserSL,
};
