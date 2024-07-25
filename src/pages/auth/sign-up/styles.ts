import styled from "styled-components";
import { Form as FormikForm } from "formik";

import { ActionButton as Button } from "components";

export const Form = styled(FormikForm)`
  gap: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputsContainer = styled.div`
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ValidationContainer = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const ActionButton = styled(Button)`
  max-width: 240px;
  align-self: center;
`;
