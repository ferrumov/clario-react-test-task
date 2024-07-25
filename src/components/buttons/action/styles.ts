import styled from "styled-components";

import { buttonTheme } from "./config";
import { ButtonVariant } from "./types";

export const Button = styled.button<{ $variant: ButtonVariant }>`
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

  ${({ $variant }) => buttonTheme[$variant]}
`;
