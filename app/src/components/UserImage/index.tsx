import React from "react";
import { Image } from "react-native";

import * as S from "./styles";
import UserImage from "@assets/user.png";
import CameraImage from "@assets/camera.png";

//export interface Props {
//  image?: string;
//}

export default function UseImage() {
  return (
    <S.Container>
      <Image source={UserImage} />
      <S.BoxImageCamera>
        <Image source={CameraImage} />
      </S.BoxImageCamera>
    </S.Container>
  );
}
