const fs = require("fs/promises");

async function writeData(path, content) {
  try {
    await fs.writeFile(path, content, "utf8");

    console.log("write succeeded");
  } catch (err) {
    console.error("write failed:", err);
  }
}

function createLog() {
  const logFile = `log-${new Date().toISOString()}.log`;
  return logFile;
}

async function appendLog(logFile, ...msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  await fs.appendFile(logFile, line);
}

module.exports = { writeData, createLog, appendLog };
