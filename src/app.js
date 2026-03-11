const path = require("path");
const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const cors = require("cors");

const { initiateSocket } = require("./socket/index.js");

const app = express();
const server = createServer(app);
initiateSocket(server);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());

app.get("/socket", (req, res) => {
  res.sendFile(join(__dirname, "../public/index.html"));
});

const { HTTP_STATUS_CODES } = require("./utils/constants.js");

const { episodesRouter } = require("./routes/episodes.routes.js");

app.use("/api/episodes", episodesRouter);

app.all(/(.*)/, (req, res) => {
  res.status(HTTP_STATUS_CODES.NOT_FOUND).send({ msg: "Route not found" });
});

app.use((err, req, res, next) => {
  console.log("INTERNAL ERROR:", err);
  const statusCode = err.statusCode || HTTP_STATUS_CODES.INTERNAL;
  res.status(statusCode).send({ msg: err.message });
});

module.exports = { app, server, initiateSocket };
