const express = require("express");
const commentsRouter = express.Router();
const {
  getRepliesByCommentId,
  getCommentFeed,
} = require("../controllers/comments.controllers.js");

commentsRouter.get("/:comment_id/replies", getRepliesByCommentId);

commentsRouter.get("/:user_id/feed", getCommentFeed);

module.exports = { commentsRouter };
