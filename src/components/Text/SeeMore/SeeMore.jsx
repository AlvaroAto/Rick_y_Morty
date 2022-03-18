import React from "react";

//styled-components
import SeeMoreContainer from "./SeeMore-style";

const SeeMore = ({ handleClick,buttonText }) => {
    return(
        <SeeMoreContainer>
            <span onClick={() => handleClick()}>{ buttonText }</span>
        </SeeMoreContainer>
    );
};

export default SeeMore;