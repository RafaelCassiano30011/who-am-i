/** @format */

import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary";

export interface PropsTriangle {
  type: "left" | "right";
}
export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.colors.cyan_500};
  border-radius: 6px;
  position: relative;
  isolation: isolate;
  z-index: 1;
  box-sizing: border-box;
`;

export const Triangle = styled.View<PropsTriangle>`
  width: 0px;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  pointer-events: none;
  z-index: -1;

  ${({ theme, type }) => css`
    left: ${type === "left" ? "0px" : "initial"};
    right: ${type === "right" ? "0px" : "initial"};
    top: 0px;
    background-color: ${theme.colors.purple_500};
    border-color: ${type === "left"
      ? `transparent ${theme.colors.cyan_500} transparent transparent`
      : `transparent transparent transparent ${theme.colors.cyan_500}`};
    border-width: ${type === "left" ? `26px 26px 26px 0px` : "26px 0px 26px 26px"};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md};
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.white};
  `}
`;
