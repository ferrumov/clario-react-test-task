import { Button } from "./styles";
import { ButtonProps } from "./types";

export const ActionButton = ({ variant, ...props }: ButtonProps) => {
  return <Button $variant={variant} {...props} />;
};
