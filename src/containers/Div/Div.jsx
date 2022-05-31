import React from "react";

// styled-components
import DivContainer from "./Div-style";

const Div = ({children,color}) => {
    return(
        <DivContainer color={color}>
            {children}
        </DivContainer>
    );
};

export default Div;