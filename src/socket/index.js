const { Server } = require("socket.io");
const commentsHandler = require("./handlers/comments.handler");
const usersHandler = require("./handlers/users.handler");

const initiateSocket = (server) => {
    const io = new Server(server);

    io.on("connection", (socket) => {
        console.log("A user connected!");
        commentsHandler(socket, io);
        usersHandler(socket, io);

        socket.on("connection", (arg) => {
            console.log("hello", arg);
        });

        socket.on("disconnect", () => {
            console.log("A user has disconnected");
        });

        socket.on("chat message", (msg) => {
            console.log("get message from client: " + msg);
            io.emit("chat message", msg);
        });
    });
};

module.exports = initiateSocket;
