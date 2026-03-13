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

        socket.on("comment body", (commentBody) => {
            console.log(`received comment`);
            const comment = {};
            // episode_id, body, user_id, runtime_seconds, is_spoiler
            comment.body = commentBody;
            comment.episode_id = 469092;
            comment.user_id = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
            comment.runtime_seconds = 1;
            comment.is_spoiler = false;
            console.log(comment);
            io.emit("comment", comment);
            insertComment(comment);
        });

        socket.on("reply", (reply) => {
            console.log(`received reply for comment ${reply.comment_id}`);
            io.emit("reply", reply);
        });

        socket.on("reaction", (reaction) => {
            console.log(`received reaction ${reaction.reaction_type} `);
            io.emit("reaction", reaction);
        });
    });
};

module.exports = commentsHandler;
