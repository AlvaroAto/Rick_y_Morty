import React from "react";

//styled-components
import HeaderH3Container from "./HeaderH3-style";

const HeaderH3 = ({ children }) =>{
    return(
        <HeaderH3Container>{children}</HeaderH3Container>        
    );
};

export default HeaderH3;