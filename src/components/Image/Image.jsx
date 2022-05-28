import React from "react";

// styled-components
import ImageContainer from "./Image-style";

const Image = ({ image, alt })=>{
    return(
        <ImageContainer>
            <img src={image} alt={alt} />
        </ImageContainer>
    );
};

export default Image;