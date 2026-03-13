const fs = require("fs/promises");
const path = require("path");

const CONSTANTS_PATH = path.join(__dirname, "../../src/utils/constants.js");
//append show to show list
async function appendToConstantsList(showName) {
  const content = await fs.readFile(CONSTANTS_PATH, "utf8");

  if (content.includes(`"${showName}"`)) {
    console.log(`[addShow] "${showName}" already in constants.js`);
    return false;
  }

  const updated = content.replace(
    /(TV_SHOWS_LIST_1\s*=\s*\[[\s\S]*?)(];)/,
    (match, listBody, closing) => {
      const trimmed = listBody.trimEnd();
      const withComma = trimmed.endsWith(",") ? trimmed : `${trimmed},`;
      return `${withComma}\n  "${showName}",\n${closing}`;
    },
  );

  await fs.writeFile(CONSTANTS_PATH, updated, "utf8");
  console.log(`[addShow] "${showName}" appended to constants.js`);
  return true;
}

module.exports = appendToConstantsList;
