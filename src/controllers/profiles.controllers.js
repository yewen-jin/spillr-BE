const { HTTP_STATUS_CODES } = require("../utils/constants.js");
const {
  fetchUserByUserIdService,
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

module.exports = {
  getUserByUserId,
};
