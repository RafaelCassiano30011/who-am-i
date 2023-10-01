/** @format */

import { io } from "../server/http";

interface RoomsI {
  password?: string;
  name: string;
  created_user: string;
}

const rooms: RoomsI[] = [];

io.on("connection", (socket) => {
  console.log(socket.id, "id");

  socket.on("open", (data) => {
    socket.join("open");

    io.to("open").emit("open", "teste");
  });
  // ...
});
