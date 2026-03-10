const friends = [
  {
    user_id_1: 1,
    user_id_2: 2,
    is_accepted: true,
  },
  {
    user_id_1: 1,
    user_id_2: 3,
    is_accepted: true,
  },
  {
    user_id_1: 2,
    user_id_2: 4,
    is_accepted: true,
  },
  {
    user_id_1: 3,
    user_id_2: 5,
    is_accepted: true,
  },
  {
    user_id_1: 4,
    user_id_2: 5,
    is_accepted: true,
  },
  // pending requests
  {
    user_id_1: 2,
    user_id_2: 3,
    is_accepted: false,
  },
  {
    user_id_1: 4,
    user_id_2: 1,
    is_accepted: false,
  },
];
module.exports = friends;
