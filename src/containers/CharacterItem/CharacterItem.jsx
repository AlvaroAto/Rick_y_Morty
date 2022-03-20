import React from "react";

//components
import SeeMore from "../../components/Text/SeeMore/SeeMore";

//styled-components
import CharacterItemContainer from "./CharacterItem-style";

const CharacterItem = ({ name, sheet, image, vertical, buttonText, handleClick }) => {
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
                    {/* <SeeMore 
                        buttonText={buttonText}
                        onClick={() => handleClick()} 
                    />             */}
                    <div className="buttonSeeMore" onClick={() => handleClick()}>
                        <span>{ buttonText }</span>
                    </div>
                    
                </div>
            </div>            
        </CharacterItemContainer>        
    );
};

export default CharacterItem;