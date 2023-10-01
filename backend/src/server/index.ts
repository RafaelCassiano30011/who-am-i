/** @format */

import { httpServer } from "./http";
import "../socket/websocket";

httpServer.listen(3000, () => {
  console.log("Rodando...");
});
