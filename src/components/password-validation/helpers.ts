import { ValidationVariant } from "./types";

export const getValidationVariant = (
  regexp: RegExp,
  value?: string
): ValidationVariant => {
  if (!value || value === "") {
    return "default";
  }

  return regexp.test(value) ? "success" : "error";
};
