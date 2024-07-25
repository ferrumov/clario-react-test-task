import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}
