import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple_500};
  padding: 24px;
`;

export const BoxUser = styled.View`
  flex: 1;
  gap: 33px;
  margin-top: 130px;
  
  `;

export const BoxButtons = styled.View`
  flex: 1;
  gap: 26px;
  margin-top: 116px;
`;
