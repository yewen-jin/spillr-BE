const format = require("pg-format");
const db = require("../../db/connection.js");

const insertTvShowData = async (
  tv_show_clean,
  seasons_clean,
  episodes_clean,
) => {
  await db.query(
    `INSERT INTO tv_shows(tv_show_id, name, description, number_of_seasons, number_of_episodes, tv_show_img_url) VALUES ($1,$2,$3,$4,$5,$6)`,
    [
      tv_show_clean.tv_show_id,
      tv_show_clean.name,
      tv_show_clean.description,
      tv_show_clean.number_of_seasons,
      tv_show_clean.number_of_episodes,
      tv_show_clean.TVShowIMG_URL ? tv_show_clean.TVShowIMG_URL.original : null,
    ],
  );

  const formattedSeasons = seasons_clean.map((season) => [
    season.season_id,
    season.tv_show_id,
    season.season_number,
    season.seasonIMG_URL ? season.seasonIMG_URL.original : null,
    season.isContinuing,
    season.airdate,
  ]);

  const seasonsQuery = format(
    `INSERT INTO seasons(season_id, tv_show_id, season_number, season_img_url, is_airing, air_date) VALUES %L`,
    formattedSeasons,
  );
  await db.query(seasonsQuery);

  const formattedEpisodes = episodes_clean.map((episode) => [
    episode.episode_id,
    episode.season_id,
    episode.episode_number,
    episode.runtime_total,
    episode.releaseDate,
    episode.releaseTime,
    episode.episodeIMG_URL ? episode.episodeIMG_URL.original : null,
    episode.synopsis,
  ]);

  const episodesQuery = format(
    `INSERT INTO episodes(episode_id, season_id, episode_number, runtime_total, release_date, release_time, episode_url, synopsis) VALUES %L`,
    formattedEpisodes,
  );

  await db.query(episodesQuery);
};

const fetchTrendingShows = async (limit, order) => {
  const query = `
    SELECT 
      ts.tv_show_id,
      ts.name,
      ts.description,
      ts.number_of_seasons,
      ts.number_of_episodes,
      ts.tv_show_img_url,
      COUNT(c.comment_id) AS comment_count
    FROM comments c
    JOIN episodes e ON c.episode_id = e.episode_id
    JOIN seasons s ON e.season_id = s.season_id
    JOIN tv_shows ts ON s.tv_show_id = ts.tv_show_id
    WHERE c.created_at >= NOW() - INTERVAL '7 days'
    GROUP BY ts.tv_show_id, ts.name, ts.description, ts.number_of_seasons, ts.number_of_episodes, ts.tv_show_img_url
    ORDER BY comment_count ${order}
    LIMIT $1;
  `;

  const { rows } = await db.query(query, [limit]);
  return rows;
};

module.exports = { insertTvShowData, fetchTrendingShows };
