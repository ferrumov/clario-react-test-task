import styled, { css } from "styled-components";

import { ContainerProps } from "./types";

const setTextColor = (color: string) => css`
  color: ${color};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${color};
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px transparent;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  font-family: "Inter", sans-serif !important;

  ${setTextColor("#4a4e71")};

  &::placeholder {
    color: #6f91bc;
  }
`;

export const containerStyles = (props: ContainerProps) => {
  const { $error, $success } = props;

  if ($error) {
    return css`
      border: 1px solid #ff8080;
      ${Input} {
        ${setTextColor("#ff8080")};
      }
    `;
  }

  if ($success) {
    return css`
      border: 1px solid #27b274;
      ${Input} {
        ${setTextColor("#27b274")};
      }
    `;
  }

  return css`
    border: 1px solid transparent;

    &:focus-within {
      border: 1px solid #6f91bc;
    }

    ${Input} {
      ${setTextColor("#4a4e71")};
    }
  `;
};

export const Container = styled.div<{ $error?: boolean; $success?: boolean }>`
  width: 100%;
  height: 48px;
  flex-shrink: 0;
  padding: 0 20px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid transparent;

  gap: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ $error, $success }) => containerStyles({ $error, $success })}
`;
