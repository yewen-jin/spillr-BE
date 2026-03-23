const {
  fetchNotificationsForThisUserId,
} = require("../models/notifications.models.js");

const getNotificationsForThisUserIdSL = async (user_id) => {
  return await fetchNotificationsForThisUserId(user_id);
};

module.exports = { getNotificationsForThisUserIdSL };
