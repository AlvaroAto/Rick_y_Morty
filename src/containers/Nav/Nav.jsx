import React from "react";
import NavContainer from "./Nav-style";


const Nav = ( {children,color} ) => {
    return (
        <NavContainer color={color}>
            {children}
        </NavContainer>
    );
};

export default Nav;