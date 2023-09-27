/** @format */

import { View, Text, Touchable, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import socket from "@utils/socket";
import Body from "@components/Body";

export default function Home() {
  const [teste, setTeste] = useState([]);
  const [value, setValue] = useState("");
  const get = async () => {
    socket.emit("open", value);
    setValue("");

    socket.on("open", (data: any) => {
      setTeste(data);
    });
  };

  return (
    <Body>
      <TextInput
        value={value}
        style={{ height: 100, borderColor: "red", borderWidth: 1 }}
        onChangeText={(e) => setValue(e)}
      />
      <TouchableOpacity onPress={get}>
        <Text>Clique teste</Text>
        {teste?.map((item, index) => (
          <Text key={`teste-${index}`}>{item}</Text>
        ))}
      </TouchableOpacity>
    </Body>
  );
}
