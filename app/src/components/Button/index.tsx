import { TouchableOpacityProps } from "react-native";

import React from "react";
import * as S from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  type?: S.ButtonTypeStyleProps;
  title: string;
}

export default function Button({ type = "primary", title, ...rest }: ButtonProps) {
  return (
    <S.Container type={type} {...rest}>
      <S.Triangle type={"left"} />
      <S.Title>{title}</S.Title>
      <S.Triangle type={"right"} />
    </S.Container>
  );
}
