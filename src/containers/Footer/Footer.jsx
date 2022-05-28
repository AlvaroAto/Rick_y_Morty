import React from "react";

//styled-components
import FooterContainer from "./Footer-style";

const Footer = ({ children })=>{
    return(
        <FooterContainer>
            { children }
        </FooterContainer>
    );
};

export default Footer;