/** @format */

import { httpServer } from "./http";
import "./websocket";

httpServer.listen(3000, () => {
  console.log("Rodando...");
});
