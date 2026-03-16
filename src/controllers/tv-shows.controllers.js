const cleanData = require("../utils/data-cleaner");
const appendToConstantsList = require("../utils/appendToConstantsList");
const checkShowExists = require("../utils/checkShowExists");
const {
  insertTvShowData,
  fetchTrendingShows,
} = require("../models/tv-shows.model");

async function addShow(req, res, next) {
  const raw = req.body.show_name;

  if (!raw) {
    return res
      .status(400)
      .json({ msg: "show_name is required in request body" });
  }

  const show_name = req.body.show_name
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  //parse inputs

  if (!show_name) {
    return res
      .status(400)
      .json({ msg: "show_name is required in request body" });
  }

  try {
    // check database first before hitting TVmaze
    const alreadyExists = await checkShowExists(show_name);
    if (alreadyExists) {
      return res.status(409).json({
        msg: `"${show_name}" is already in the database.`,
      });
    } else {
      // verify it exists on TVmaze
      console.log(`[addShow] Fetching "${show_name}" from TVmaze...`);
      const result = await cleanData(show_name);
      if (!result) {
        return res.status(404).json({
          msg: `"${show_name}" could not be found on TVmaze. Check the spelling and try again.`,
        });
      }

      const { tv_show_clean, seasons_clean, episodes_clean } = result;

      // append to constants list from jeff's pipeline so it's included in future full syncs
      await appendToConstantsList(show_name);

      await insertTvShowData(tv_show_clean, seasons_clean, episodes_clean);
      return res.status(201).json({
        msg: `"${tv_show_clean.name}" successfully added to the database.`,
        show: tv_show_clean,
      });
    }
  } catch (err) {
    console.error(`[addShow] Failed to add "${show_name}":`, err.message);
    next(err);
  }
}

async function getTrendingShows(req, res, next) {
  const limit = parseInt(req.query.limit) || 5;
  const sort_by = req.query.sort_by || "comments";
  const order = req.query.order === "asc" ? "ASC" : "DESC";

  const validSortBy = ["comments"];
  if (!validSortBy.includes(sort_by)) {
    return res.status(400).json({ msg: "Invalid sort_by value" });
  }

  try {
    const shows = await fetchTrendingShows(limit, order);
    res.status(200).json(shows);
  } catch (err) {
    console.error("[getTrendingShows] Failed:", err.message);
    next(err);
  }
}

module.exports = { addShow, getTrendingShows };
