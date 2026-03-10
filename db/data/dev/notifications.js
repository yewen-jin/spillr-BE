const notifications = [
  // reply notifications — notifying the comment owner
  {
    reply_id: 1, // reply to comment 1
    reaction_id: null,
    status: "read",
    created_at: "2024-03-01T20:09:00.000Z",
    user_id: 1, // user 1 owns comment 1
  },
  {
    reply_id: 2, // reply to comment 1
    reaction_id: null,
    status: "not read",
    created_at: "2024-03-01T20:10:00.000Z",
    user_id: 1, // user 1 owns comment 1
  },
  {
    reply_id: 3, // reply to comment 2
    reaction_id: null,
    status: "read",
    created_at: "2024-03-01T20:17:00.000Z",
    user_id: 2, // user 2 owns comment 2
  },
  {
    reply_id: 4, // reply to comment 3
    reaction_id: null,
    status: "not read",
    created_at: "2024-03-01T20:24:00.000Z",
    user_id: 3, // user 3 owns comment 3
  },
  {
    reply_id: 5, // reply to comment 3
    reaction_id: null,
    status: "not read",
    created_at: "2024-03-01T20:25:00.000Z",
    user_id: 3, // user 3 owns comment 3
  },
  {
    reply_id: 6, // reply to comment 8
    reaction_id: null,
    status: "read",
    created_at: "2024-03-08T20:07:00.000Z",
    user_id: 3, // user 3 owns comment 8
  },
  {
    reply_id: 7, // reply to comment 9
    reaction_id: null,
    status: "not read",
    created_at: "2024-03-08T20:13:00.000Z",
    user_id: 4, // user 4 owns comment 9
  },
  {
    reply_id: 8, // reply to comment 10
    reaction_id: null,
    status: "read",
    created_at: "2024-03-08T20:19:00.000Z",
    user_id: 5, // user 5 owns comment 10
  },
  {
    reply_id: 9, // reply to comment 11
    reaction_id: null,
    status: "not read",
    created_at: "2024-03-08T20:27:00.000Z",
    user_id: 1, // user 1 owns comment 11
  },
  {
    reply_id: 10, // reply to comment 11
    reaction_id: null,
    status: "not read",
    created_at: "2024-03-08T20:28:00.000Z",
    user_id: 1, // user 1 owns comment 11
  },

  // reaction notifications — notifying the comment owner
  {
    reply_id: null,
    reaction_id: 1, // reaction to comment 1
    status: "read",
    created_at: "2024-03-01T20:09:00.000Z",
    user_id: 1, // user 1 owns comment 1
  },
  {
    reply_id: null,
    reaction_id: 2, // reaction to comment 1
    status: "read",
    created_at: "2024-03-01T20:10:00.000Z",
    user_id: 1, // user 1 owns comment 1
  },
  {
    reply_id: null,
    reaction_id: 3, // reaction to comment 2
    status: "not read",
    created_at: "2024-03-01T20:16:00.000Z",
    user_id: 2, // user 2 owns comment 2
  },
  {
    reply_id: null,
    reaction_id: 4, // reaction to comment 2
    status: "not read",
    created_at: "2024-03-01T20:17:00.000Z",
    user_id: 2, // user 2 owns comment 2
  },
  {
    reply_id: null,
    reaction_id: 5, // reaction to comment 3
    status: "read",
    created_at: "2024-03-01T20:23:00.000Z",
    user_id: 3, // user 3 owns comment 3
  },
  {
    reply_id: null,
    reaction_id: 6, // reaction to comment 8
    status: "not read",
    created_at: "2024-03-08T20:07:00.000Z",
    user_id: 3, // user 3 owns comment 8
  },
  {
    reply_id: null,
    reaction_id: 7, // reaction to comment 10
    status: "not read",
    created_at: "2024-03-08T20:19:00.000Z",
    user_id: 5, // user 5 owns comment 10
  },
  {
    reply_id: null,
    reaction_id: 8, // reaction to comment 14
    status: "read",
    created_at: "2024-03-15T20:09:00.000Z",
    user_id: 4, // user 4 owns comment 14
  },
  {
    reply_id: null,
    reaction_id: 9, // reaction to comment 17
    status: "not read",
    created_at: "2024-03-15T20:34:00.000Z",
    user_id: 2, // user 2 owns comment 17
  },
  {
    reply_id: null,
    reaction_id: 10, // reaction to comment 21
    status: "not read",
    created_at: "2024-03-22T20:31:00.000Z",
    user_id: 1, // user 1 owns comment 21
  },
];

module.exports = notifications;
