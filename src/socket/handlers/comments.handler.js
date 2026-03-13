const {
    addReaction,
    removeReaction,
    addReply,
    deleteReply,
    deleteComment,
    insertComment,
    patchSpoiler,
} = require("../models/comment.models.js");

const commentsHandler = (socket, io) => {
    console.log("commentsHandler got connected!");

    socket.on("comment", (comment) => {
        console.log(`received comment`);
        io.emit("comment", "new comment:" + comment.body);
        console.log(comment);
        insertComment(comment);
    });
    socket.on("delete comment", (comment) => {
        console.log(`delete comment`);
        io.emit("comment", "deleting comment:" + comment.comment_id);
        deleteComment(comment);
    });

    socket.on("reply", (reply) => {
        console.log(`received reply for comment ${reply.comment_id}`);
        io.emit("reply", "new reply:" + reply.body);
        addReply(reply);
    });

    socket.on("delete reply", (reply) => {
        console.log(`received reply for comment ${reply.comment_id}`);
        io.emit("delete reply", "removed reply:" + reply.body);
        deleteReply(reply.reply_id);
    });

    socket.on("add reaction", (reaction) => {
        console.log(``);
        io.emit("add reaction", reaction);
        addReaction(reaction);
    });

    socket.on("remove reaction", (reaction) => {
        console.log(``);
        io.emit("remove reaction", reaction);
        removeReaction(reaction.reaction_id);
    });
};

module.exports = commentsHandler;
