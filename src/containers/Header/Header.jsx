import React from "react";

//assets
import Logo from '../../components/Logo/Logo';

//containers
import Nav from "../Nav/Nav";

//styled-components
import HeaderContainer from "./Header-style";

//pagination
import { Link } from 'react-router-dom';

const Header = ( {children} ) =>{
    return(
        <HeaderContainer>
            <Logo />
            {children}
            <Nav color="white">
                <Link to="/">Inicio</Link>
                <Link to="/characters">Personajes</Link>
                <Link to="/contact">Contacto</Link>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;