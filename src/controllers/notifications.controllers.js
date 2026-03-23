const { HTTP_STATUS_CODES } = require("../utils/constants.js");
const {
  getNotificationsForThisUserIdSL,
} = require("../services/notifications.services.js");

const getNotificationsForThisUserId = async (req, res, next) => {
  const { user_id } = req.params;
  try {
    const notifications = await getNotificationsForThisUserIdSL(user_id);
    res.status(HTTP_STATUS_CODES.OK).send({ notifications });
  } catch (err) {
    next(err);
  }
};

module.exports = { getNotificationsForThisUserId };
