import React from "react";

//components
import SeeMore from "../../components/Text/SeeMore/SeeMore";

//styled-components
import CharacterItemContainer from "./CharacterItem-style";

const CharacterItem = ({ name, sheet, image, handleClick, buttonText }) => {
    return(       
        <CharacterItemContainer>
            <div>
                <div className="imageBox">
                    <div className="image">
                        <img src={ image } alt={ name } />
                    </div>
                </div>
                <div className="box">
                    <strong>{ name }</strong>
                </div>
                <div className="box">
                    <p>{ sheet }</p>
                </div>
                <SeeMore 
                    onClick={() => handleClick()} 
                    buttonText={buttonText}
                />            
            </div>
        </CharacterItemContainer>        
    );
};

export default CharacterItem;