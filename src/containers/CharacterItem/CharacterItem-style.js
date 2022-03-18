import styled from "styled-components";
import { keyframes } from "styled-components";

//assets
// import borde from '../'

const type = keyframes`
    from {
        with: 0;
    }

    to {
        
    }
`;


const CharacterItemContainer = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    padding: 10px;
    div{
        text-align: center;
    }
    div.imageBox{
        flex: none;
        order: 1;
        -webkit-clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
        clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
        filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.25));
        background-color: #00B1B7;
        align-self: stretch;
        flex-grow: 1;
        margin: 0px 10px;
    }
    div.image{        
        -webkit-clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
        clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
        filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.25));
        background-color: #fff;
        align-self: stretch;
        flex-grow: 1;
        margin: 10px 10px;
    }
    img{
        width:130px;
        height:150px;
    }
    div.box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;

        background: #00686B;
        border: 1px solid #EFEFEF;
        box-sizing: border-box;

        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 1;
        margin: 10px 0px;
    }
    strong{  
        display:block; 
        max-width: 200px;     
        margin: auto;
        font-family:AlienScript-Regular;
        font-size: 24px;    
        font-weight: bolder;   
        letter-spacing: 1px;
        text-align: center;
        text-transform: uppercase;
        color: white;
        animation: ${type} 8s steps(60,end);
        
        &:hover{
            font-family:PatrickHand-Regular;
            text-transform: capitalize;
        }
    }
    
    p{
        max-width: 200px;
        margin: auto;
        padding: 5px;
        font-family: Alien;
        font-size: 15px;    
        font-weight: regular;
        text-align: center;   
        letter-spacing: 1px;
        color: white;
    }
`;

export default CharacterItemContainer;