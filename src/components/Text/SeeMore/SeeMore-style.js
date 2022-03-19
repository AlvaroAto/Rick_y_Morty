import styled from "styled-components";

const SeeMoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin:0 auto;
    padding: 5px 20px;
    background-color: #0A94CF;
    border: 1px solid #EFEFEF;
    box-sizing: border-box;
    border-radius: 15px;
    align-self: stretch;
    span{
        text-align: center;
        font-family: PatrickHandSC-Regular; 
        color: white;
        font-weight: 600;
        letter-spacing: 1px;
    }
`;

export default SeeMoreContainer;