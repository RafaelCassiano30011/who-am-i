import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 191px;
  height: 191px;
  border-radius: 100px;
  border: 11px solid ${({ theme }) => theme.colors.cyan_500};
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const BoxImageCamera = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -10px;
  top: -10px;
  width: 55px;
  height: 55px;
  border: 3px solid ${({ theme }) => theme.colors.cyan_500};
  background-color: ${({ theme }) => theme.colors.purple_500};
  border-radius: 50px;
`;
