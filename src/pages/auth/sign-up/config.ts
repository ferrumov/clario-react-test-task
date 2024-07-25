import * as Yup from "yup";

import { Values } from "./types";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z]).*$/,
      "1 Uppercase letter & 1 lowercase letter"
    )
    .matches(/^.*(?=.*\d).*$/, "1 number")
    .matches(/^.{8,64}$/, "8-64 characters")
    .required(),
});

export const initialValues: Values = { email: "", password: "" };
