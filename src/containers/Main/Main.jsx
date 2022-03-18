import React from "react";


//styled-components
import MainContainer from "./Main";

const Main = ( {children} ) => {
    return(
        <MainContainer>
            {children}
        </MainContainer>
    );
};

export default Main;