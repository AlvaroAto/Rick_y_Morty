import React from "react";
import CharactersListContainer from "./CharactersList-style";

const CharacterList = ({ children }) => {
    return(
        <CharactersListContainer>
            {children}
        </CharactersListContainer>
    );
};  

export default CharacterList;
