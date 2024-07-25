import styled, { css } from "styled-components";

export const Button = styled.button<{ $color?: string }>`
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  background-color: transparent;

  ${({ $color }) => css`
    svg {
      color: ${$color};
    }
  `}
`;
