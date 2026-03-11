const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());

const { HTTP_STATUS_CODES } = require("./utils/constants.js");

const tvShowsRouter = require("./routers/tvShowsRouter.js");

app.use("/api/tv-shows", tvShowsRouter);

app.all(/(.*)/, (req, res) => {
  res.status(HTTP_STATUS_CODES.NOT_FOUND).send({ msg: "Route not found" });
});

module.exports = app;
