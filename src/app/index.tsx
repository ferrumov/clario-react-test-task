import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavigationContainer } from "components";
import { GlobalStyles } from "theme/global-styles";

const SignUpPage = React.lazy(() => import("pages/auth/sign-up"));

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />

      <BrowserRouter>
        <NavigationContainer>
          <Routes>
            <Route path="/sign-up" element={<SignUpPage />}></Route>
          </Routes>
        </NavigationContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
