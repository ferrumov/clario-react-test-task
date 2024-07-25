import { PropsWithChildren } from "react";

import { Container } from "./styles";

interface AuthContainerProps {
  title: string;
}

export const AuthContainer = ({
  title,
  children,
}: PropsWithChildren<AuthContainerProps>) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};
