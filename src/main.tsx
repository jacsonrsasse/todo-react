import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./components/App/";

const theme = {
    corSistemaBase1: "#7d838f",
    corSistemaBase2: "#9ba0a9",
    corSistemaBase3: "#bcbfc6",
    corSistemaBase4: "#aab0b6",
    corSistemaBase5: "#d7d8da",
    corSistemaBase6: "#fefeff",
    corSistemaBase7: "#b5b5b5",
    corSistemaBase8: "#dadada",
    corSistemaBase9: "#ffffff",
};

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.corSistemaBase7};
    }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
