import styled from "styled-components";

//assets
import background from '../../assets/img/space.webp';

const MainContainer = styled.main`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width: 100%;
    background: URL(${ background }) repeat center center /auto;
`;


export default MainContainer;