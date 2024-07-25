import { PropsWithChildren } from "react";

import { StarsBg } from "../../icons";

import * as Styles from "./styles";

interface AuthContainerProps {
  title: string;
}

export const AuthContainer = ({
  title,
  children,
}: PropsWithChildren<AuthContainerProps>) => {
  return (
    <Styles.MainContainer>
      <Styles.Container>
        <h1>{title}</h1>
        {children}
      </Styles.Container>

      <Styles.StarsContainer>
        <StarsBg />
      </Styles.StarsContainer>
    </Styles.MainContainer>
  );
};
