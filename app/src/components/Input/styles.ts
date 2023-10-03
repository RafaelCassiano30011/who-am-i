/** @format */

import styled, { css } from "styled-components/native";

export const Container = styled.TextInput`
  min-height: 56px;
  max-height: 56px;
  width: 100%;

  border-radius: 6px;
  padding: 16px;

  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md};
    background-color: ${theme.colors.purple_700};
    color: ${theme.colors.white};
  `}
`;
