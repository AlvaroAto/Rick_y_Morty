import styled from "styled-components";

//assets
import background from '../../assets/img/404.webp';

const NotFoundContainer = styled.div`
width:100%;
height:100vh;    
background: url(${background}) no-repeat center center /cover;
display:flex;
justify-content:center;
align-items:center;
a{
    font-size:3rem;
    color:white;
    text-shadow:0 0 15px #A6F1FE;
}
@media screen and (max-width:418px){
    width:100%;
    background: url(${background}) no-repeat contain ;
    background-size: 100% auto;
    align-items:flex-start;
    a{
        transform: translateY(100px);
        position:absolute;
        top:50vh;
    }
}

`;

export default NotFoundContainer;