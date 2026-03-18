const { HTTP_STATUS_CODES } = require("../utils/constants.js");
const {
  fetchUserByUserIdService,
  fetchUserByUsernameService,
  fetchActivityByUserService,
} = require("../services/profiles.services.js");

async function getUserByUserId(req, res, next) {
  const { user_id } = req.params;
  try {
    const user = await fetchUserByUserIdService(user_id);
    res.status(HTTP_STATUS_CODES.OK).send({ user });
  } catch (error) {
    next(error);
  }
}
async function getUserByUsername(req, res, next) {
  const { username } = req.params;
  try {
    const user = await fetchUserByUsernameService(username);
    res.status(HTTP_STATUS_CODES.OK).send({ user });
  } catch (error) {
    next(error);
  }
}

async function getUserActivity(req, res, next) {
  const { user_id } = req.params;
  try {
    const user = await fetchActivityByUserService(user_id);
    res.status(HTTP_STATUS_CODES.OK).send({ user });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUserByUserId,
  getUserByUsername,
  getUserActivity,
};
