import React from "react";

//styled-components
import HeaderH2Container from "./HeaderH2-style";

const HeaderH2 = ({ children })=>{
    return(
        <HeaderH2Container>
            { children }
        </HeaderH2Container>
    );
};

export default HeaderH2;