import React from "react";

//styled-components
import HeaderH1Container from "./HeaderH1-style";

const HeaderH1 = ({ children })=>{
    return(
        <HeaderH1Container> 
            { children }
        </HeaderH1Container>
    );
};

export default HeaderH1;