import React from "react";

//styled-components
import FooterContainer from "./Footer-style";

// components
import Footer2 from "../../components/Copy/Copy";

const Footer = ({ children })=>{
    return(
        <>
        <FooterContainer>
            { children }
        </FooterContainer>
        <Footer2/>
        </>
    );
};

export default Footer;