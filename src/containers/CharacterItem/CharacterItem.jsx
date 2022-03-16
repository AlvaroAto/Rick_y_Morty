import React from "react";

//components
import HeaderH3 from "../../components/Text/Headers/HeaderH3/HeaderH3";

//styled-components
import CharacterItemContainer from "./CharacterItem-style";

const CharacterItem = ({ name, handleClick }) => {
    return(       
        <CharacterItemContainer>
            <HeaderH3>{ name }</HeaderH3>
            <span onClick={() => handleClick()}>Ver ficha completa</span>
        </CharacterItemContainer>        
    );
};

export default CharacterItem;