import React from "react";

// styled-components
import FooterLogoContainer from "./FooterLogo-style";

// assets
import logo from "../../assets/img/logo.png";

const FooterLogo = ({ children }) => {
    return(
        <FooterLogoContainer>
            <div>
                <img src={logo} alt="" />
                <p>Busca tu información de los personajes de Rick y Morty</p>
            </div>
            { children }
        </FooterLogoContainer>
    );  
};

export default FooterLogo;
