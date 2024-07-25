import styled, { css } from "styled-components";

import { ValidationVariant } from "./types";

export const Container = styled.div`
  gap: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ValidationText = styled.p<{ $variant: ValidationVariant }>`
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  line-height: 18px;
  font-family: "Inter", sans-serif !important;

  ${({ $variant }) => css`
    ${$variant === "default" &&
    css`
      color: #4a4e71;
    `};
    ${$variant === "success" &&
    css`
      color: rgba(39, 178, 116, 0.7);
    `};
    ${$variant === "error" &&
    css`
      color: #ff8080;
    `};
  `}
`;
