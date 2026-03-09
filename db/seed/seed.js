const db = require("../connection.js");
const format = require("pg-format");

const seed = async ({
  users,
  tvShows,
  seasons,
  spisodes,
  subscriptions,
  friends,
  comments,
  replies,
  reactions,
  polls,
  pollVotes,
  notifications,
}) => {
  await db.query(`DROP TABLE IF EXISTS reactions`);
  await db.query(`DROP TABLE IF EXISTS replies`);
  await db.query(`DROP TABLE IF EXISTS comments`);
  await db.query(`DROP TABLE IF EXISTS episodes`);
  await db.query(`DROP TABLE IF EXISTS seasons`);
  await db.query(`DROP TABLE IF EXISTS friends`);
  await db.query(`DROP TABLE IF EXISTS subscriptions`);
  await db.query(`DROP TABLE IF EXISTS tv_shows`);
  await db.query(`DROP TABLE IF EXISTS users`);
  await db.query(`CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(1000),
    username VARCHAR(40),
    avatar_url VARCHAR(1000),
    language VARCHAR(40)
    ) `);

  await db.query(`CREATE TABLE tv_shows(
    tv_show_id INT PRIMARY KEY NOT NULL,
    name VARCHAR(1000) NOT NULL,
    description VARCHAR(1000),
    number_of_seasons INT,
    number_of_episodes INT,
    tv_show_img_url VARCHAR(1000)
    ) `);

  await db.query(`CREATE TABLE seasons(
       season_id INT PRIMARY KEY NOT NULL,
       tv_show_id INT REFERENCES tv_shows(tv_show_id) NOT NULL,
       seasons_number INT NOT NULL,
       season_img_url VARCHAR(1000),
       is_airing BOOL DEFAULT FALSE,
       air_date TIMESTAMP
       ) `);

  await db.query(`CREATE TABLE episodes(
       episode_id INT PRIMARY KEY NOT NULL,
       season_id INT REFERENCES seasons(season_id) NOT NULL,
       episode_number INT,
       runtime_total INT,
       release_date DATE,
       release_time TIMESTAMP,
       episode_url VARCHAR(1000),
       is_premier BOOL DEFAULT FALSE,
       thread_opened BOOL DEFAULT FALSE,
       synopsis VARCHAR(1000)
      )`);

  await db.query(`CREATE TABLE subscriptions(
      subscription_id SERIAL PRIMARY KEY NOT NULL,
      user_id INT REFERENCES users(user_id),
      tv_show_id INT REFERENCES tv_shows(tv_show_id)
      )`);

  await db.query(`CREATE TABLE friends(
      friends_id SERIAL PRIMARY KEY NOT NULL,
      user_id_1 INT REFERENCES users(user_id),
      user_id_2 INT REFERENCES users(user_id),
      is_accepted BOOL DEFAULT FALSE
      )`);

  await db.query(`CREATE TABLE comments(
      comment_id SERIAL PRIMARY KEY NOT NULL,
      user_id INT REFERENCES users(user_id),
      body VARCHAR(350) NOT NULL,
      episode_id INT REFERENCES episodes(episode_id),
      runtime_seconds INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_live BOOL NOT NULL,
      is_spoiler BOOL DEFAULT FALSE
      )`);

  await db.query(`CREATE TABLE replies(
      reply_id SERIAL PRIMARY KEY NOT NULL,
      comment_id INT REFERENCES comments(comment_id),
      user_id INT REFERENCES users(user_id),
      body VARCHAR(350) NOT NULL,
      episode_id INT REFERENCES episodes(episode_id),
      runtime_seconds INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`);

  await db.query(`CREATE TABLE reactions(
      reaction_id SERIAL PRIMARY KEY NOT NULL,
      reaction_type VARCHAR(40) NOT NULL,
      comment_id INT REFERENCES comments(comment_id) DEFAULT NULL,
      episode_id INT REFERENCES episodes(episode_id) DEFAULT NULL,
      reply_id INT REFERENCES comments(comment_id) DEFAULT NULL,
      runtime_seconds INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      user_id INT REFERENCES users(user_id)
      )`);
  const formattedUsers = users.map((user) => {
    return [user.username, user.name, user.language, user.avatar_url];
  });

  let userQuery = format(
    "INSERT INTO users(username, name, language, avatar_url) VALUES %L RETURNING *",
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
      tvShow.tv_show_img_url,
    ];
  });

  let tvShowQuery = format(
    "INSERT INTO tv_shows(tv_show_id, name, description, number_of_seasons, number_of_episodes, tv_show_img_url) VALUES %L RETURNING *",
    formattedTvShows,
  );

  await db.query(tvShowQuery);
};

module.exports = seed;
