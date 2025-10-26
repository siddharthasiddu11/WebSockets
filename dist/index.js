import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("user connected");
    setInterval(() => {
        socket.send("The current price of SOL is" + Math.random());
    }, 500);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
//# sourceMappingURL=index.js.map