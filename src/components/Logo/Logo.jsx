import React from "react";

//assets
import logo from '../../assets/img/logo.png';

//styled-components
import LogoContainer from "./Logo-style";

//pagination
import { Link } from 'react-router-dom';

const Logo = () => {
    return(
        <LogoContainer>
            <Link to="/">
                <img className="logo-image" src={logo} alt="Logotipo Rick y Morty" />
            </Link>
        </LogoContainer>
    );
};

export default Logo;