import React from "react";

// styled-components
import GoToTopContainer from "./GoToTop-style";


// assets
import upicon from '../../../assets/img/up.svg';

const GoToTop = ({children,color,onClick}) => {
    return(
        <GoToTopContainer 
            color={color}
            onClick={onClick}>
            <img src={upicon} alt="" />
        </GoToTopContainer>
    );
};

export default GoToTop;