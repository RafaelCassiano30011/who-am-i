import React from "react";
import * as S from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function Body({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
