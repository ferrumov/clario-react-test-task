import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
        overflow-y: hidden;
    }

    .app {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    h1 {
        font-size: 28px;
        font-weight: 700;
        line-height: 28px;
        font-family: "Inter", sans-serif !important;
    }
`;
