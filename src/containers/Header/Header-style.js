import styled from "styled-components";

const HeaderContainer = styled.header`  
    position: -webkit-sticky; 
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: solid 1px black;
    background: linear-gradient(180deg, #00B1B7 -1.75%, #00686B 81.66%);
    z-index:9;
`;

export default HeaderContainer;