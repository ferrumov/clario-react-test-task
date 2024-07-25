import { useField } from "formik";

import * as Styles from "./styles";
import { getValidationVariant } from "./helpers";
import { PasswordValidationProps } from "./types";

export const PasswordValidation = ({ name }: PasswordValidationProps) => {
  const [field] = useField(name);

  return (
    <Styles.Container>
      <Styles.ValidationText
        $variant={getValidationVariant(/^.{8,64}$/, field.value)}
      >
        8 characters or more (no spaces)
      </Styles.ValidationText>

      <Styles.ValidationText
        $variant={getValidationVariant(
          /^(?=.*[a-z])(?=.*[A-Z]).*$/,
          field.value
        )}
      >
        Uppercase and lowercase letters
      </Styles.ValidationText>

      <Styles.ValidationText
        $variant={getValidationVariant(/^.*(?=.*\d).*$/, field.value)}
      >
        At least one digit
      </Styles.ValidationText>
    </Styles.Container>
  );
};
