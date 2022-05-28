import React from "react";

// styled-components
import ColoredDivContainer from "./ColoredDiv-style";

const ColoredDiv = ({children,color}) => {
    return(
        <ColoredDivContainer color={color}>
            {children}
        </ColoredDivContainer>
    );
};

export default ColoredDiv;