import styled from "styled-components";

const DivContainer = styled.div`
    background-color: ${(props)=> props.color};
    border-radius: 8px;
    padding:5px;
    margin-top:20px;
    border: 1px solid #0A94CF;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
    border-radius: 3px; 
    img{
        width:40px;
        height:40px;
        // margin-left:5px;
    }
    a{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        color:white;  
        gap:5px;      
    }
    
`;

export default DivContainer;