import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

const Button = styled.button<{ $color?: string }>`
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

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const IconButton = ({ color = "#6F91BC", ...props }: ButtonProps) => {
  return <Button $color={color} {...props} />;
};
