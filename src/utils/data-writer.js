const fs = require("fs/promises");

async function writeData(path, content) {
  try {
    await fs.writeFile(path, content, "utf8");

    console.log("write succeeded");
  } catch (err) {
    console.error("write failed:", err);
  }
}

module.exports = writeData;
