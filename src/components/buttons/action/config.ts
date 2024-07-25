import { css } from "styled-components";

import { ButtonVariant } from "./types";

export const buttonTheme: Record<
  ButtonVariant,
  ReturnType<typeof css>
> = Object.freeze({
  primary: css`
    color: #ffffff;
    background: linear-gradient(110.46deg, #70c3ff 12.27%, #4b65ff 93.92%);
  `,
});
