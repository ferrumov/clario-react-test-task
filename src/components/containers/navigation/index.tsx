import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { Container } from "./styles";

export const NavigationContainer = ({
  children,
}: PropsWithChildren<unknown>) => {
  const location = useLocation();

  if (location.pathname !== "/sign-up") {
    return <Navigate to="/sign-up" />;
  }

  return <Container>{children}</Container>;
};
