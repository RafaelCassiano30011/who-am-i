import * as S from "./style";
import logoImg from "@assets/logotipo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export default function Header({}: HeaderProps) {
  return (
    <S.Container>
      <S.Logo source={logoImg} />
    </S.Container>
  );
}
