import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
        outline: 0;
    }

    ::-webkit-scrollbar {
    display: none;
    }

    input:-webkit-autofill { 
    -webkit-background-clip: text;
    -webkit-text-fill-color: #F8F9FA;
    background-clip: text;
    }


    :root {
        --pink: #FF577F;
        --pinkFocus: #FF427F;
        --pinkNegative: #59323F;
        --grey4: #121214;
        --grey3: #212529;
        --grey2: #343B41;
        --grey1Focus: #343B41;
        --grey1: #868E96;
        --grey0: #F8F9FA;
        --success: #3FE864;
        --negative: #E83F5B;
        --toastify-color-light: var(--grey3);
        --toastify-color-dark: var(--grey3);
        --toastify-text-color-light: var(--grey0);
        --toastify-text-color-dark: var(--grey0);
    }


    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--grey4);
        color: var(--grey0);
        font-size: 1rem;
    }

    button{
        all: unset;
        cursor: pointer;
        text-align: center;
    }

    h6 {
        all:unset
    }
    
`;

export default GlobalStyle;
