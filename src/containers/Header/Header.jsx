import React from "react";

//assets
import Logo from '../../components/Logo/Logo';

//styled-components
import HeaderContainer from "./Header-style";

const Header = ( {children} ) =>{
    return(
        <HeaderContainer>
            <Logo />
            {children}
        </HeaderContainer>
    );
}

export default Header;