import { useField } from "formik";
import { useState, useMemo } from "react";

import { EyeCrossIcon, EyeIcon } from "components/icon";
import { IconButton } from "components/buttons";

import * as Styled from "./styles";
import { InputProps, InputFieldProps } from "./types";

export const Input = ({ $error, $success, type, ...props }: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const inputType = useMemo(() => {
    if (type === "password") {
      return isVisible ? "text" : "password";
    }

    return type;
  }, [type, isVisible]);

  return (
    <Styled.Container $error={$error} $success={$success}>
      <Styled.Input type={inputType} {...props} />

      {type === "password" && (
        <IconButton
          type="button"
          color={$error ? "#ff8080" : undefined}
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {inputType === "text" ? <EyeIcon /> : <EyeCrossIcon />}
        </IconButton>
      )}
    </Styled.Container>
  );
};

export const InputField = ({ name, ...props }: InputFieldProps) => {
  const [field, meta, helpers] = useField(name);

  return (
    <Input
      name={name}
      value={field.value || ""}
      $error={Boolean(meta.error)}
      $success={Boolean(meta.touched && meta.value && !meta.error)}
      onChange={(event) => helpers.setValue(event.target.value.trim())}
      {...props}
    />
  );
};
