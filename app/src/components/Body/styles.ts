import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray_600};
  padding: 24px;
`;
