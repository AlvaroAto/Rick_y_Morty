import { createGlobalStyle } from "styled-components";

//assets
import background from './assets/img/fondo_circuito.jpg';

const GlobalStyle = createGlobalStyle`  

    body {
        width: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'PatrickHand-Regular', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        background: URL(${ background }) repeat center center ;
    }
             
    h1,h2,h3,h4,h5,h6{
        font-family: 'PatrickHandSC-Regular';
    }
    a{
        text-decoration: none;
    }
    #loading{
        width:100%;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            width:90vh;
        }
    }
    
`;


export default GlobalStyle;