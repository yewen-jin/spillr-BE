const fs = require("fs/promises");

async function readDataFile(filePath) {
  const content = await fs.readFile(filePath, "utf8");
  let start;
  let end;
  for (let i = 0; i < content.length; i++) {
    if (content[i] === "[") start = i;
    if (content[i] === "]") end = i;
  }
  return JSON.parse(content.slice(start, end + 1));
  //spits out the all objects with the new show info - seasons, episodes ect added
}

// Reads each dev data JS, tv-shows, seasons, episodes file and
// sepeartes out the array from the file content then adds to it.

module.exports = readDataFile;
