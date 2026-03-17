const { server } = require("./src/app.js");
const { PORT = 9092 } = process.env;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
