import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple_500};
`;

export const BoxUser = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 33px;
  margin-top: 130px;
  width: 100%;
`;

export const BoxButtons = styled.View`
  flex: 1;
  gap: 26px;
  margin-top: 116px;
  width: 86%;
`;
