import React from "react";

//assets
import logo from '../../assets/img/logo.png';

//styled-components
import LogoContainer from "./Logo-style";


const Logo = () => {
    return(
        <LogoContainer>
            <img className="logo-image" src={logo} alt="Logotipo Rick y Morty" />
        </LogoContainer>
    );
};

export default Logo;