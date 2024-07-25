import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "primary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

const config: Record<ButtonVariant, ReturnType<typeof css>> = Object.freeze({
  primary: css`
    color: #ffffff;
    background: linear-gradient(110.46deg, #70c3ff 12.27%, #4b65ff 93.92%);
  `,
});

const Button = styled.button<{ variant: ButtonVariant }>`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
  line-height: 14px;
  font-family: "Inter", sans-serif !important;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.85;
  }

  ${({ variant }) => config[variant]}
`;

export const ActionButton = ({ ...props }: ButtonProps) => {
  return <Button {...props} />;
};
