import React from "react";

import { Link } from "react-router-dom";

// styled-components
import NotFoundContainer from "./index-style";

const NotFoundPage=()=>{
    return(
        <NotFoundContainer>
            <Link to="/">Go to home</Link>
        </NotFoundContainer>    
    );
};

export default NotFoundPage;