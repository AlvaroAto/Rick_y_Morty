import React from "react";

import { Link } from "react-router-dom";

// styled-components
import NotFoundContainer from "./index-style";

const NotFoundPage=()=>{
    return(
        <NotFoundContainer>
            <div>
                <Link to="/">go home</Link>
            </div>
        </NotFoundContainer>    
    );
};

export default NotFoundPage;