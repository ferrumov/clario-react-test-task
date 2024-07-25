import { InputHTMLAttributes } from "react";

export interface ContainerProps {
  $error?: boolean;
  $success?: boolean;
}

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ContainerProps {}

export interface InputFieldProps extends Partial<InputProps> {
  name: string;
}
