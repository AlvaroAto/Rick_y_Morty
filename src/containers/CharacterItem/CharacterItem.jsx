import React from "react";

//components
import SeeMore from "../../components/Text/SeeMore/SeeMore";

//styled-components
import CharacterItemContainer from "./CharacterItem-style";

const CharacterItem = ({ name, sheet, image, handleClick, buttonText }) => {
    return(       
        <CharacterItemContainer>
            <div className="card">
                <div className="imageBox">
                    <div className="image" >
                        <img src={ image } alt={ name } />
                    </div>
                </div>
                <div className="wrapItemText">
                    <div className="textBox">
                        <strong className="characterTitleName">{ name }</strong>
                    </div>
                    <div className="textBox">
                        <p>{ sheet }</p>
                    </div>
                    <SeeMore 
                        onClick={() => handleClick()} 
                        buttonText={buttonText}
                    />            
                </div>
            </div>
        </CharacterItemContainer>        
    );
};

export default CharacterItem;