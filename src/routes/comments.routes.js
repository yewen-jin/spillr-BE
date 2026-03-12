const express = require("express");
const commentsRouter = express.Router();
const {
  getRepliesByCommentId,
} = require("../controllers/comments.controllers.js");

commentsRouter.get("/:comment_id/replies", getRepliesByCommentId);

module.exports = { commentsRouter };
