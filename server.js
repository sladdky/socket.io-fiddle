import { default as express } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

const port = process.env.PORT || 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log(`connect ${socket.id}`);

  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  });

  let i = 0
  function sayHi() {
    socket.emit('topic', `hi: ${i++}x`)

    setTimeout(() => {
      sayHi()
    }, 1000);
  }

  sayHi()
});

httpServer.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
