const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "../../.env.dev") });

const {
  fetchShowIdByName,
  fetchShowInfoByID,
  fetchSeasonsByID,
  fetchEpisodesBySeasonID,
} = require("../api/tvMeze");
const {
  fetchSeasonsTVDBByID,
  fetchShowIdTVDBByName,
  fetchEpisodesTVDBByID,
} = require("../api/tvDb.js");
const { sleep, normalizeToAsciiSpaces } = require("./data-utils.js");

async function cleanData(showName) {
  try {
    // ─── TVmaze (primary) ───────────────────────────────────────────────────
    const showID = await fetchShowIdByName(showName);
    const showInfo = await fetchShowInfoByID(showID);
    const seasonsInfo = await fetchSeasonsByID(showID);
    const { seasons, number_of_seasons } = seasonsInfo;

    const episodes = [];
    for (const season of seasons) {
      try {
        await sleep(50);
        const seasonEpisodes = await fetchEpisodesBySeasonID(season.season_id);
        episodes.push(seasonEpisodes);
      } catch (error) {
        console.log(
          `[cleanData] TVmaze episodes fetch failed for season ${season.season_number}:`,
          error.message,
        );
        episodes.push({ episodes: [], number_of_episodes: 0 });
      }
    }

    // ─── TVDB (enrichment only — failures are non-fatal) ───────────────────
    let seasonTVDB = { seasons: [] };
    let episodesTVDB = [];

    try {
      const showIDTVDB = await fetchShowIdTVDBByName(showName);
      if (showIDTVDB) {
        const tvdbResult = await fetchSeasonsTVDBByID(showIDTVDB);
        seasonTVDB = tvdbResult ?? { seasons: [] };

        for (const season of seasonTVDB.seasons) {
          try {
            await sleep(30);
            const episodeTVDB = await fetchEpisodesTVDBByID(
              showIDTVDB,
              season.season_number,
            );
            if (episodeTVDB) episodesTVDB.push(episodeTVDB);
          } catch (err) {
            console.log(
              `[cleanData] TVDB episodes fetch failed for season ${season.season_number}:`,
              err.message,
            );
          }
        }
        episodesTVDB = episodesTVDB.flatMap((season) => season.episodes);
      }
    } catch (err) {
      console.log(
        `[cleanData] TVDB lookup failed for "${showName}" — continuing with TVmaze data only:`,
        err.message,
      );
    }

    // ─── Merge ──────────────────────────────────────────────────────────────
    const seasons_clean = seasons.map((season, index) => {
      const tvdbSeason = seasonTVDB.seasons.find(
        (s) => s.season_number === season.season_number,
      );
      const tvdbImg = tvdbSeason?.seasonIMG_URL;
      return {
        ...season,
        seasonIMG_URL:
          season.seasonIMG_URL ||
          (tvdbImg ? { medium: tvdbImg, original: tvdbImg } : null) ||
          (showInfo.TVShowIMG_URL ? showInfo.TVShowIMG_URL : null),
        number_of_episodes: episodes[index].number_of_episodes,
      };
    });

    const tv_show_clean = {
      ...showInfo,
      number_of_seasons,
      number_of_episodes: seasons_clean.reduce(
        (acc, season) => acc + season.number_of_episodes,
        0,
      ),
    };

    const episodes_TVMZ = episodes.flatMap((season) => season.episodes);

    const episodes_clean = episodes_TVMZ.map((episode) => {
      const episodeTVDB = episodesTVDB.find(
        (s) =>
          s.episode_number === episode.episode_number &&
          s.season_number === episode.season_number,
      );
      return {
        ...episode,
        synopsis:
          episode.synopsis ||
          (episodeTVDB?.synopsis
            ? normalizeToAsciiSpaces(episodeTVDB?.synopsis)
            : null),
        episodeIMG_URL:
          episode.episodeIMG_URL ||
          (episodeTVDB?.episodeIMG_URL
            ? {
                medium: episodeTVDB.episodeIMG_URL,
                original: episodeTVDB.episodeIMG_URL,
              }
            : null) ||
          (showInfo.TVShowIMG_URL ? showInfo.TVShowIMG_URL : null),
      };
    });

    console.log(showName, "☑️");
    return { tv_show_clean, seasons_clean, episodes_clean };
  } catch (err) {
    console.error("[cleanData] fetch failed:", err);
    throw err;
  }
}

module.exports = cleanData;
