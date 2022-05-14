import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  

    body {
        width: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'PatrickHand-Regular', 'PatrickHandSC-Regular', 'AlienScript-Regular', 'Narcotix','Alien', 'GetSchwifty-Regular'
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
              
    a{
        text-decoration: none;
    }
    
`;


export default GlobalStyle;