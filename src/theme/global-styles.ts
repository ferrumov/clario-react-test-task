import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
        width: 100%;
        margin: 0px;
        padding: 0px;
        overflow: hidden; 
    }

    body {
        height: 100%;
        width: 100%;
        margin: 0px;
        padding: 0px;
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
        color: #4A4E71;
        font-size: 28px;
        font-weight: 700;
        line-height: 28px;
        font-family: "Inter", sans-serif !important;
    }

    
`;
