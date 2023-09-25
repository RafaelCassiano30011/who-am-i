/** @format */

import { useEffect, useState } from "react";
import socket from "../../utils/socket";
import api from "../../utils/axios";

interface ValueI {
  name: string;
  password: string;
}

export default function Home() {
  const [value, setValue] = useState<ValueI>({} as ValueI);

  const handleInput = (valueInput: string, type: "name" | "password") => {
    setValue({ ...value, [type]: valueInput });
  };

  useEffect(() => {
    socket.emit("open", "Teste");

    socket.on("open", (data) => console.log(data));
  }, []);

  const handleCreateRoom = (e: any) => {
    e.preventDefault();

    if (value.name === "" || value.password === "") return;
  };

  return (
    <div>
      <form onSubmit={handleCreateRoom}>
        <input
          onChange={(e) => {
            handleInput(e.target.value ?? "", "name");
          }}
          value={value.name}
          placeholder="Nome da Sala"
        />
        <input
          onChange={(e) => {
            handleInput(e.target.value ?? "", "password");
          }}
          value={value.password}
          placeholder="Senha da Sala"
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
