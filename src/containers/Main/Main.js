import styled from "styled-components";

const MainContainer = styled.main`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width: 100%;
    
    p#errorSearch{
        font-family:PatrickHand-Regular;
        font-weight:bold;
        letter-spacing:1px;
        background-color:#00686B;
        padding: 5px 20px;           
        margin-bottom: 20px; 
        border:solid 3px #A6F1FE;
        border-radius:8px;        
        color:#A6F1FE;
        transition: all .4s; 
    }
`;


export default MainContainer;