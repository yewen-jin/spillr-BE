const db = require("../connection.js");
const format = require("pg-format");

const seed = async ({
  users,
  tvShows,
  seasons,
  episodes,
  subscriptions,
  friends,
  comments,
  replies,
  reactions,
  polls,
  pollVotes,
  notifications,
}) => {
  await db.query(`DROP TABLE IF EXISTS notifications`);
  await db.query(`DROP TABLE IF EXISTS poll_votes`);
  await db.query(`DROP TABLE IF EXISTS polls`);
  await db.query(`DROP TABLE IF EXISTS reactions`);
  await db.query(`DROP TABLE IF EXISTS replies`);
  await db.query(`DROP TABLE IF EXISTS comments`);
  await db.query(`DROP TABLE IF EXISTS episodes`);
  await db.query(`DROP TABLE IF EXISTS seasons`);
  await db.query(`DROP TABLE IF EXISTS subscriptions`);
  await db.query(`DROP TABLE IF EXISTS friends`);
  await db.query(`DROP TABLE IF EXISTS tv_shows`);
  await db.query(`DROP TABLE IF EXISTS profiles`);
  await db.query(`CREATE TABLE profiles(
    user_id UUID PRIMARY KEY NOT NULL,
    name VARCHAR(3000),
    username VARCHAR(1000) UNIQUE NOT NULL,
    avatar_url VARCHAR(3000),
    language VARCHAR(40)
    ) `);

  await db.query(`CREATE TABLE tv_shows(
    tv_show_id INT PRIMARY KEY NOT NULL,
    name VARCHAR(3000) NOT NULL,
    description VARCHAR(3000),
    number_of_seasons INT,
    number_of_episodes INT,
    tv_show_img_url VARCHAR(3000)
    ) `);

  await db.query(`CREATE TABLE seasons(
       season_id INT PRIMARY KEY NOT NULL,
       tv_show_id INT REFERENCES tv_shows(tv_show_id) ON DELETE CASCADE,
       season_number INT NOT NULL,
       season_img_url VARCHAR(3000),
       is_airing BOOL DEFAULT FALSE,
       air_date TIMESTAMP
       ) `);

  await db.query(`CREATE TABLE episodes(
       episode_id INT PRIMARY KEY NOT NULL,
       season_id INT REFERENCES seasons(season_id) ON DELETE CASCADE,
       episode_number INT,
       runtime_total INT,
       release_date DATE,
       release_time TIME,
       episode_url VARCHAR(3000),
       thread_opened BOOL DEFAULT FALSE,
       synopsis VARCHAR(3000)
      )`);

  await db.query(`CREATE TABLE subscriptions(
      subscription_id SERIAL PRIMARY KEY NOT NULL,
      user_id UUID REFERENCES profiles(user_id) ON DELETE CASCADE,
      tv_show_id INT REFERENCES tv_shows(tv_show_id) ON DELETE CASCADE
      )`);

  await db.query(`CREATE TABLE friends(
      friends_id SERIAL PRIMARY KEY NOT NULL,
      user_id_1 UUID REFERENCES profiles(user_id) ON DELETE CASCADE,
      user_id_2 UUID REFERENCES profiles(user_id) ON DELETE CASCADE,
      is_accepted BOOL DEFAULT FALSE
      )`);

  await db.query(`CREATE TABLE comments(
      comment_id SERIAL PRIMARY KEY NOT NULL,
      user_id UUID REFERENCES profiles(user_id) ON DELETE CASCADE,
      body VARCHAR(3000) NOT NULL,
      episode_id INT REFERENCES episodes(episode_id) ON DELETE CASCADE,
      runtime_seconds INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_live BOOL NOT NULL,
      is_spoiler BOOL DEFAULT FALSE
      )`);

  await db.query(`CREATE TABLE replies(
      reply_id SERIAL PRIMARY KEY NOT NULL,
      comment_id INT REFERENCES comments(comment_id) ON DELETE CASCADE,
      user_id UUID REFERENCES profiles(user_id),
      body VARCHAR(3000) NOT NULL,
      episode_id INT REFERENCES episodes(episode_id) ON DELETE CASCADE,
      runtime_seconds INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`);

  await db.query(`CREATE TABLE reactions(
      reaction_id SERIAL PRIMARY KEY NOT NULL,
      reaction_type VARCHAR(3000) NOT NULL,
      comment_id INT REFERENCES comments(comment_id) ON DELETE CASCADE DEFAULT NULL,
      episode_id INT REFERENCES episodes(episode_id) ON DELETE CASCADE DEFAULT NULL,
      reply_id INT REFERENCES replies(reply_id) ON DELETE CASCADE DEFAULT NULL,
      runtime_seconds INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      user_id UUID REFERENCES profiles(user_id) ON DELETE CASCADE
      )`);

  await db.query(`CREATE TABLE polls(
      poll_id SERIAL PRIMARY KEY NOT NULL,
      user_id UUID REFERENCES profiles(user_id) ON DELETE CASCADE,
      episode_id INT REFERENCES episodes(episode_id) ON DELETE CASCADE,
      img_url VARCHAR(3000),
      is_open BOOL DEFAULT TRUE,
      poll_name VARCHAR(1000),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      field_1 VARCHAR(3000),
      field_2 VARCHAR(3000)
      )`);

  await db.query(`CREATE TABLE poll_votes(
      poll_vote_id SERIAL PRIMARY KEY NOT NULL,
      poll_id INT REFERENCES polls(poll_id) ON DELETE CASCADE,
      user_id UUID REFERENCES profiles(user_id) ON DELETE CASCADE,
      field_1 BOOL DEFAULT FALSE,
      field_2 BOOL DEFAULT FALSE
      )`);

  await db.query(`CREATE TABLE notifications(
      notification_id SERIAL PRIMARY KEY NOT NULL,
      reaction_id INT REFERENCES reactions(reaction_id) ON DELETE CASCADE,
      reply_id INT REFERENCES replies(reply_id) ON DELETE CASCADE,
      user_id UUID REFERENCES profiles(user_id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      status VARCHAR(50) NOT NULL
      )`);

  const formattedUsers = users.map((user) => {
    return [
      user.user_id,
      user.username,
      user.name,
      user.language,
      user.avatar_url,
    ];
  });

  let userQuery = format(
    "INSERT INTO profiles(user_id, username, name, language, avatar_url) VALUES %L RETURNING *",
    formattedUsers,
  );

  await db.query(userQuery);

  const formattedTvShows = tvShows.map((tvShow) => {
    return [
      tvShow.tv_show_id,
      tvShow.name,
      tvShow.description,
      tvShow.number_of_seasons,
      tvShow.number_of_episodes,
      tvShow.TVShowIMG_URL.original,
    ];
  });

  let tvShowQuery = format(
    "INSERT INTO tv_shows(tv_show_id, name, description, number_of_seasons, number_of_episodes, tv_show_img_url) VALUES %L RETURNING *",
    formattedTvShows,
  );

  await db.query(tvShowQuery);

  const formattedSeasons = seasons.map((season) => {
    return [
      season.season_id,
      season.tv_show_id,
      season.season_number,
      season.seasonIMG_URL ? season.seasonIMG_URL.original : null,
      season.isContinuing,
      season.airdate,
    ];
  });

  let seasonsQuery = format(
    "INSERT INTO seasons(season_id, tv_show_id, season_number, season_img_url, is_airing, air_date) VALUES %L RETURNING *",
    formattedSeasons,
  );

  await db.query(seasonsQuery);

  const formattedEpisodes = episodes.map((episode) => {
    return [
      episode.episode_id,
      episode.episode_number,
      episode.season_id,
      episode.runtime_total,
      episode.releaseDate,
      episode.releaseTime,
      episode.episodeIMG_URL ? episode.episodeIMG_URL.original : null,
      episode.synopsis,
    ];
  });

  let episodesQuery = format(
    "INSERT INTO episodes(episode_id, episode_number, season_id, runtime_total, release_date, release_time, episode_url, synopsis) VALUES %L RETURNING *",
    formattedEpisodes,
  );

  await db.query(episodesQuery);

  const formattedComments = comments.map((comment) => {
    return [
      comment.user_id,
      comment.body,
      comment.episode_id,
      comment.runtime_seconds,
      comment.created_at,
      comment.is_live,
      comment.is_spoiler,
    ];
  });

  let commentsQuery = format(
    "INSERT INTO comments(user_id, body, episode_id, runtime_seconds, created_at, is_live, is_spoiler) VALUES %L RETURNING *",
    formattedComments,
  );

  await db.query(commentsQuery);

  const formattedReplies = replies.map((reply) => {
    return [
      reply.comment_id,
      reply.user_id,
      reply.body,
      reply.episode_id,
      reply.runtime_seconds,
      reply.created_at,
    ];
  });

  let replyQuery = format(
    "INSERT INTO replies(comment_id, user_id, body, episode_id, runtime_seconds, created_at) VALUES %L RETURNING *",
    formattedReplies,
  );

  await db.query(replyQuery);

  const fomattedSubscriptions = subscriptions.map((subscription) => {
    return [subscription.user_id, subscription.tv_show_id];
  });

  let subscriptionQuery = format(
    "INSERT INTO subscriptions(user_id, tv_show_id) VALUES %L RETURNING *",
    fomattedSubscriptions,
  );

  await db.query(subscriptionQuery);

  const formattedFriends = friends.map((friend) => {
    return [friend.user_id_1, friend.user_id_2, friend.is_accepted];
  });

  let friendsQuery = format(
    "INSERT INTO friends(user_id_1, user_id_2, is_accepted) VALUES %L RETURNING *",
    formattedFriends,
  );

  await db.query(friendsQuery);

  const formattedReactions = reactions.map((reaction) => {
    return [
      reaction.reaction_type,
      reaction.comment_id,
      reaction.episode_id,
      reaction.reply_id,
      reaction.runtime_seconds,
      reaction.created_at,
      reaction.user_id,
    ];
  });

  let reactionsQuery = format(
    "INSERT INTO reactions(reaction_type, comment_id, episode_id, reply_id, runtime_seconds, created_at, user_id) VALUES %L RETURNING *",
    formattedReactions,
  );

  await db.query(reactionsQuery);

  const formattedPolls = polls.map((poll) => {
    return [
      poll.user_id,
      poll.episode_id,
      poll.img_url,
      poll.poll_name,
      poll.field_1,
      poll.field_2,
    ];
  });

  let pollsQuery = format(
    "INSERT INTO polls(user_id, episode_id, img_url, poll_name, field_1, field_2) VALUES %L RETURNING *",
    formattedPolls,
  );

  await db.query(pollsQuery);

  const formattedVotes = pollVotes.map((pollVote) => {
    return [
      pollVote.poll_id,
      pollVote.field_1,
      pollVote.field_2,
      pollVote.user_id,
    ];
  });

  let votesQuery = format(
    "INSERT INTO poll_votes(poll_id, field_1, field_2, user_id) VALUES %L RETURNING *",
    formattedVotes,
  );

  await db.query(votesQuery);

  const formattedNotifications = notifications.map((notification) => {
    return [
      notification.reply_id,
      notification.reaction_id,
      notification.status,
      notification.created_at,
      notification.user_id,
    ];
  });

  let notificationsQuery = format(
    "INSERT INTO notifications(reply_id, reaction_id, status, created_at, user_id) VALUES %L RETURNING *",
    formattedNotifications,
  );

  await db.query(notificationsQuery);
};

module.exports = seed;
