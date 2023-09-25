/** @format */

import { io } from "./http";

interface RoomsI {
  password: string;
  name: string;
  created_user: string;
}

const rooms: RoomsI[] = [];
const message = [];

io.on("connection", (socket) => {
  console.log(socket.id, "id");

  socket.on("open", (data) => {
    socket.join("open");
    message.push(data);
 
 
    io.to("open").emit("open", message);
  });
  // ...

});
