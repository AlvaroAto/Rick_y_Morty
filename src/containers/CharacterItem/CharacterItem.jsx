import React from "react";

//components
import SeeMore from "../../components/Text/SeeMore/SeeMore";

//styled-components
import CharacterItemContainer from "./CharacterItem-style";

const CharacterItem = ({ name, sheet, image, vertical, handleClick, buttonText }) => {
    return(       
        <CharacterItemContainer>
            <div className="textBoxTitle">
                <strong>{ name }</strong>
            </div>
            <div className="card">
                <div className="verticalText">
                    <p>{ vertical }</p>
                </div>
                <div className="imageBox">
                    <div className="image" >
                        <img src={ image } alt={ name } />
                    </div>
                </div>
                <div className="wrapItemText">
                    
                    <div className="textBoxBody">
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