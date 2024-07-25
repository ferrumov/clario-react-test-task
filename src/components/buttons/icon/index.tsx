import { Button } from "./styles";
import { ButtonProps } from "./types";

export const IconButton = ({ color = "#6F91BC", ...props }: ButtonProps) => {
  return <Button $color={color} {...props} />;
};
