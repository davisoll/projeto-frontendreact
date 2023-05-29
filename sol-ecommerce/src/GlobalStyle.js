import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    :root {
        --soft-white: #f2f2f2;
        --green: #8bcf21
        --yellow: #Ffcb16
        --dark: #38b40
        --deep-blue: #011640
        --deep-blue-secondary: #010F2B
    }

    body {
        background-color: var(--green);
        height: 100vh;
    }
`