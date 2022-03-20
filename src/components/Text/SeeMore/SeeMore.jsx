import React from "react";

//styled-components
import SeeMoreContainer from "./SeeMore-style";

const SeeMore = ({ buttonText }) => {
    return(
        <SeeMoreContainer>
            <span>{ buttonText }</span>
        </SeeMoreContainer>
    );
};

export default SeeMore;