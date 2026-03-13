const cleanData = require("../utils/data-cleaner");
const appendToConstantsList = require("../utils/appendToConstantsList");
const mergeIntoDevData = require("../utils/mergeIntoDevData");
const seedProd = require("../utils/seedProd");

async function addShow(req, res, next) {
  const show_name = req.body.show_name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!show_name) {
    return res
      .status(400)
      .json({ msg: "show_name is required in request body" });
  }

  try {
    // add tv-show name to constants list
    const wasAdded = await appendToConstantsList(show_name);

    if (!wasAdded) {
      return res.status(409).json({
        msg: `"${show_name}" is already in the show list.`,
      });
    }

    // fetch this one show via pipeline to tvMaze
    console.log(`[addShow] Fetching "${show_name}" from TVmaze...`);
    const result = await cleanData(show_name);

    if (!result) {
      return res.status(404).json({
        msg: `"${show_name}" could not be found on TVmaze. Check the spelling and try again.`,
      });
    }

    const { tv_show_clean, seasons_clean, episodes_clean } = result;

    //merge into dev data files (no re-fetch of other shows)
    await mergeIntoDevData(tv_show_clean, seasons_clean, episodes_clean);

    // reseed prod
    await seedProd();

    return res.status(201).json({
      msg: `"${tv_show_clean.name}" successfully added to the database.`,
      show: tv_show_clean,
    });
  } catch (err) {
    console.error(`[addShow] Failed to add "${show_name}":`, err.message);
    next(err);
  }
}

module.exports = { addShow };
