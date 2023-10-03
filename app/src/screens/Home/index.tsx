/** @format */

import React, { useState } from "react";
import socket from "@utils/socket";
import Body from "@components/Body";
import * as S from "./styles";
import Input from "@components/Input";
import Button from "@components/Button";
import Header from "@components/Header";
import UseImage from "@components/UserImage";

export default function Home() {
  const [teste, setTeste] = useState([]);
  const [value, setValue] = useState("");

  const handleCreateRoom = () => {
    socket.emit("crs", value);

    socket.on("open", (data: any) => {
      setTeste(data);
    });
  };

  return (
    <Body>
      <S.Container>
      <Header />
        <S.BoxUser>
          <UseImage />
          <Input placeholder="Coloque Seu Nome" />
        </S.BoxUser>

        <S.BoxButtons>
          <Button title="Entrar em uma sala" />
          <Button onPress={handleCreateRoom} title="Criar Sala" />
        </S.BoxButtons>
      </S.Container>
    </Body>
  );
}
