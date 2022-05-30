import styled from "styled-components";

// // assets
// import upiconHover from '../../../assets/img/up_hover.svg';



const GoToTopContainer = styled.div`
    position:fixed;
    bottom:30%;
    right:4%;    
    display:flex;
    justify-content:center;
    align-items:center;
    background: ${(props)=> props.color};
    border-radius: 50px;    
    border: 1px solid #A6F1FE;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
    border-radius: 100px;
    transition: all .5s;
    img{
        width:100%
        height:100%;
        padding:5px 7px 7px 5px;
    }
    &:hover{
        background: rgba(0, 177, 183, 0.4);
        border: 1px solid #A6F1FE;
        box-shadow: inset 0px 0px 5px rgba(255, 255, 255, 0.5);
        border-radius: 100px;
    }
`;

export default GoToTopContainer;