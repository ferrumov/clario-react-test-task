import styled from "styled-components";

import { ActionButton } from "components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 94px 30px 0px 30px;
  background: linear-gradient(167.96deg, #f4f9ff 0%, #e0edfb 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(ActionButton)`
  max-width: 240px;
`;
