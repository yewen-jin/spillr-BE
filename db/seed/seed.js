const db = require("./connection.js");

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
    await db.query(`CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL
    name VARCHAR(1000)
    username VARCHAR(40)
    avatar_url VARCHAR(1000)
    language VARCHAR(40)
    ) `);

    await db.query(`CREATE TABLE tv_shows(
    tv_show_id SERIAL PRIMARY KEY NOT NULL
    name VARCHAR(1000) NOT NULL
    description VARCHAR(1000)
    number_of_seasons INT
    number_of_episodes INT
    tv_show_img_url VARCHAR(1000)
    ) `);

    await db.query(`CREATE TABLE seasons(
       season_id SERIAL PRIMARY KEY NOT NULL
       tv_show_id INT REFERENCES tv_shows(tv_show_id) NOT NULL
       seasons_number INT NOT NULL
       season_img_url VARCHAR(1000)
       is_airing BOOL DEFAULT FALSE
       air_date TIMESTAMP
       ) `);

    await db.query(`CREATE TABLE episodes(
       episode_id SERIAL PRIMARY KEY NOT NULL
       season_id INT REFERENCES seasons(season_id) NOT NULL
       episode_number INT
       runtime_total INT
       release_date DATE
       release_time TIMESTAMP
       episode_url VARCHAR(1000)
       is_premier BOOL DEFAULT FALSE
       thread_opened BOOL DEFAULT FALSE
       synopsis VARCHAR(1000)
      )`);

    await db.query(`CREATE TABLE subscriptions(
      subscription_id SERIAL PRIMARY KEY NOT NULL
      user_id INT REFERENCES users(user_id)
      tv_show_id INT REFERENCES users(user_id)
      )`);

    await db.query(`CREATE TABLE friends(
      friends_id SERIAL PRIMARY KEY NOT NULL
      user_id_1 INT REFERENCES users(user_id)
      user_id_2 INT REFERENCES users(user_id)
      is_accepted BOOL DEFAULT FALSE
      )`);

    await db.query(`CREATE TABLE comments(
      comment_id SERIAL PRIMARY KEY NOT NULL
      user_id INT REFERENCES users(user_id)
      body VARCHAR(350) NOT NULL
      episode_id INT REFERENCES episodes(episode_id)
      runtime_seconds INT NOT NULL
      created_at TIMESTAMP DEFAULT CURRENT TIMESTAMP
      is_live BOOL NOT NULL
      is_spoiler BOOL DEFAULT FALSE
      )`);

    await db.query(`CREATE TABLE replies(
      reply_id SERIAL PRIMARY KEY NOT NULL
      comment_id INT REFERENCES comments(comment_id)
      user_id INT REFERENCES users(user_id)
      body VARCHAR(350) NOT NULL
      episode_id INT REFERENCES episodes(episode_id)
      runtime_seconds INT NOT NULL
      created_at TIMESTAMP DEFAULT CURRENT TIMESTAMP
      )`);

    await db.query(`CREATE TABLE reactions(
      reaction_id SERIAL PRIMARY KEY NOT NULL
      reaction_type VARCHAR(40) NOT NULL
      comment_id INT REFERENCES comments(comment_id) DEFAULT NULL
      episode_id INT REFERENCES episodes(episode_id) DEFAULT NULL
      reply_id INT REFERENCES comments(comment_id) DEFAULT NULL
      runtime_seconds INT
      created_at TIMESTAMPT DEFAULT CURRENT TIMESTAMP
      user_id INT REFERENCES users(user_id)
      )`);
};
