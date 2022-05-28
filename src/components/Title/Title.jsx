import React from "react";

// styled-components
import TitleContainer from "./Title-style";

const Title = ({ title, subtitle,text }) => {
    return(
        <TitleContainer>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{text}</p>
        </TitleContainer>
    );
};

export default Title;