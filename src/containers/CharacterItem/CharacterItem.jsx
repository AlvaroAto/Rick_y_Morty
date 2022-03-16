import React from "react";

//components
import HeaderH3 from "../../components/Text/Headers/HeaderH3/HeaderH3";
import SeeMore from "../../components/Text/SeeMore/SeeMore";

//styled-components
import CharacterItemContainer from "./CharacterItem-style";

const CharacterItem = ({ name, image, handleClick, buttonText }) => {
    return(       
        <CharacterItemContainer>
            <img src={ image } alt={ name } />
            <HeaderH3>{ name }</HeaderH3>
            <SeeMore 
                onClick={() => handleClick()} 
                buttonText={buttonText}
            />            
        </CharacterItemContainer>        
    );
};

export default CharacterItem;