import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyles } from "theme/global-styles";

import { Container } from "./styles";

const SignUpPage = React.lazy(() => import("pages/auth/sign-up"));

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />

      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="" element={<SignUpPage />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
