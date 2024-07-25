import { Formik } from "formik";

import { AuthContainer, InputField, PasswordValidation } from "components";

import { Values } from "./types";
import * as Styles from "./styles";
import { initialValues, validationSchema } from "./config";

const SignUpPage = () => {
  const onSubmit = (values: Values) => {
    window.alert(`${values.email} is successfully created`);
  };

  return (
    <AuthContainer title="Sign up">
      <Formik
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnMount={false}
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors }) => {
          console.log({ errors });

          return (
            <Styles.Form>
              <Styles.InputsContainer>
                <InputField name="email" type="email" placeholder="Email" />
                <InputField
                  type="password"
                  name="password"
                  placeholder="Create your password"
                />

                <Styles.ValidationContainer>
                  <PasswordValidation name="password" />
                </Styles.ValidationContainer>
              </Styles.InputsContainer>

              <Styles.ActionButton variant="primary" type="submit">
                Sign up
              </Styles.ActionButton>
            </Styles.Form>
          );
        }}
      </Formik>
    </AuthContainer>
  );
};

export default SignUpPage;
