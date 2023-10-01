/** @format */

import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());
const httpServer = createServer(app);

app.get("/", (req, res) => {
  return res.send("Pong");
});

const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: "http://localhost:19006/",
  },
});

export { httpServer, io };
