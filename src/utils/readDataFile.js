async function readDataFile(filePath) {
  delete require.cache[require.resolve(filePath)];
  return require(filePath);
}

module.exports = readDataFile;
