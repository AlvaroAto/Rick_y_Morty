import styled from "styled-components";

const TitleContainer = styled.div`
    width:100%;
    color:white;
    font-family: 'GetSchwifty-Regular';
    margin-top:100px;
    text-align:center;
    color: #07B3CB;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #B8E185;        
    text-shadow: 0px 0px 2px #fff;        
    font-size:3rem;
    font-weight:bolder;
    letter-spacing:3px;

    p:first-child,p:nth-child(2){  
        margin:0;
    }
    p:last-child{
        font-size:2rem;
    }
`;

export default TitleContainer;