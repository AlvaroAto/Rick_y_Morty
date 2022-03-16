import React from "react";

//styled-components
import HeaderH3Container from "./HeaderH3-style";

const HeaderH3 = ({ text }) =>{
    return(
        <HeaderH3Container>{ text }</HeaderH3Container>        
    );
};

export default HeaderH3;