const { getIo } = require("../index.js");
const {
    addReaction,
    removeReaction,
    addReply,
    deleteReply,
    deleteComment,
    insertComment,
    patchSpoiler,
} = require("../models/comment.models.js");

const commentsHandler = () => {
    const io = getIo();
    io.on("connection", (socket) => {
        console.log("commentsHandler got connected!");

        socket.on("chat message", (msg) => {
            console.log(">---writing to database--->");
        });

        socket.on("comment", (comment) => {
            console.log(`received comment`);
            io.emit("comment", "new comment:" + comment.body);
            console.log(comment);
            insertComment(comment);
        });

        socket.on("reply", (replyBody) => {
            // console.log(`received reply for comment ${reply.comment_id}`);
            io.emit("reply", reply);
            const reply = {};
            reply.body = replyBody;
            reply.comment_id = 1;
            reply.episode_id = 3129600;
            reply.user_id = "b2c3d4e5-f6a7-8901-bcde-f12345678901";
            reply.runtime_seconds = 2;
            reply.created_at = "2026-03-01T20:08:00.000Z";
            addReply(reply);
        });

        socket.on("reaction", (reaction) => {
            console.log(`received reaction ${reaction.reaction_type} `);
            io.emit("reaction", reaction);
        });
    });
};

module.exports = commentsHandler;
