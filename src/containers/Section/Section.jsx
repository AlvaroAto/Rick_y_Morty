import React from "react";

//styled-components
import SectionContainer from './Section-style';

const Section = ({ children }) =>{
    return (
        <SectionContainer>
            {children}
        </SectionContainer>
    );
};

export default Section;