const path = require("path");
const express = require("express");
const { createServer } = require("node:http");
const cors = require("cors");

const { initiateSocket } = require("./socket/index.js");
const commentsHandler = require("./socket/handlers/comments.handler.js");

const app = express();
const server = createServer(app);

initiateSocket(server);
commentsHandler();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());

app.get("/chat", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/chat.html"));
});

const { HTTP_STATUS_CODES } = require("./utils/constants.js");

const { episodesRouter } = require("./routes/episodes.routes.js");
const { commentsRouter } = require("./routes/comments.routes.js");

app.use("/api/episodes", episodesRouter);

app.use("/api/comments", commentsRouter);

app.all(/(.*)/, (req, res) => {
    res.status(HTTP_STATUS_CODES.NOT_FOUND).send({ msg: "Route not found" });
});

app.use((err, req, res, next) => {
    console.log("INTERNAL ERROR:", err); //for debugging purposes only, need to be deleted in production
    const statusCode = err.statusCode || HTTP_STATUS_CODES.INTERNAL;
    res.status(statusCode).send({ msg: err.message });
});

module.exports = { app, server, initiateSocket };
