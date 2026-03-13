const cleanData = require("../utils/data-cleaner");
const appendToConstantsList = require("../utils/appendToConstantsList");
const mergeIntoDevData = require("../utils/mergeIntoDevData");
const seedProd = require("../utils/seedProd");
const checkShowExists = require("../utils/checkShowExists");

async function addShow(req, res, next) {
  const show_name = req.body.show_name
    .trim()
    .replace(/\s+/g, " ")
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
    // check database first before hitting TVmaze
    const alreadyExists = await checkShowExists(show_name);
    if (alreadyExists) {
      return res.status(409).json({
        msg: `"${show_name}" is already in the database.`,
      });
    }

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

    // merge into dev data files
    await mergeIntoDevData(tv_show_clean, seasons_clean, episodes_clean);

    // and reseed production databaseee
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
