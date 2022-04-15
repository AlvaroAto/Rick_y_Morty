import React from "react";

//components
// import SeeMore from "../../components/Text/SeeMore/SeeMore";

//styled-components
import CharacterItemContainer from "./CharacterItem-style";

const CharacterItem = ({ name, sheet, image, vertical, buttonText, handleClick }) => {
    return(       
        <CharacterItemContainer>
            <div className="textBoxTitle">
                <strong>{ name }</strong>
                {/* {(name.length <= 20) ? <strong>{name}</strong> : <marquee behavior="alternate" scrollamount="1">{ name }</marquee>} */}
            </div>
            <div className="card">
                <div className="verticalText">
                    <p>{ vertical }</p>
                </div>
                <div className="imageBox">
                    <div className="image" >
                        <img src={ image } alt={ name } />
                    </div>
                    <div className="falseButtons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="83" height="28" fill="none" viewBox="0 0 83 28">
                            <path stroke="#A6F1FE" strokeWidth="3px" strokeLinecap="round" strokeLinejoin="round" d="M.5 11V4.5l4.625-4H41.5l5.382 4c.233 1.044.3 2.355.118 4-.909 8.181-19.5-.231-19.5 8v6l3 4.301c3.275-.266 8.695-2.716 13.5-3.455 0 0 4-.654 5.5 0s2.697.923 4 0c.712-.503 1.395-1.218 2-1.846 8.562-8.89 27-9.5 27-9.5 " pathLength="1"/>
                        </svg>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
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