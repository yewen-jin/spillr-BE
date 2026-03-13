const { exec } = require("child_process");
const path = require("path");

function seedProd() {
  // path.join builds a file path correctly regardless of operating system.
  // The problem with string concatenation is slashes — Windows uses \ and Mac/Linux use /.
  // triggers seed-prod
  const projectRoot = path.join(__dirname, "../../");
  return new Promise((resolve, reject) => {
    console.log("[addShow] Running seed-prod...");
    exec("npm run seed-prod", { cwd: projectRoot }, (err, stdout, stderr) => {
      if (err) {
        console.error("[addShow] seed-prod failed:\n", stderr);
        return reject(new Error(stderr));
      }
      console.log("[addShow] seed-prod complete:\n", stdout);
      resolve();
    });
  });
}

module.exports = seedProd;
