import { useField } from "formik";
import styled, { css } from "styled-components";

interface PasswordValidationProps {
  name: string;
}

const Container = styled.div`
  gap: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

type ValidationVariant = "success" | "error" | "default";

const ValidationText = styled.p<{ $variant: ValidationVariant }>`
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

const getValidationVariant = (
  regexp: RegExp,
  value?: string
): ValidationVariant => {
  if (!value || value === "") {
    return "default";
  }

  return regexp.test(value) ? "success" : "error";
};

export const PasswordValidation = ({ name }: PasswordValidationProps) => {
  const [field] = useField(name);

  return (
    <Container>
      <ValidationText $variant={getValidationVariant(/^.{8,64}$/, field.value)}>
        8 characters or more (no spaces)
      </ValidationText>

      <ValidationText
        $variant={getValidationVariant(
          /^(?=.*[a-z])(?=.*[A-Z]).*$/,
          field.value
        )}
      >
        Uppercase and lowercase letters
      </ValidationText>

      <ValidationText
        $variant={getValidationVariant(/^.*(?=.*\d).*$/, field.value)}
      >
        At least one digit
      </ValidationText>
    </Container>
  );
};
