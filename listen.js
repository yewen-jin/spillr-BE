const { server } = require("./src/app.js");
const { PORT = 9091 } = process.env;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
