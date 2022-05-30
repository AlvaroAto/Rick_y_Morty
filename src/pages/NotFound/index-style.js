import styled from "styled-components";

//assets
import background from '../../assets/img/404.webp';
import loadGif from '../../assets/img/loading-portal.gif';

const NotFoundContainer = styled.div`
width:100%;
height:100vh;    
background: url(${background}) no-repeat center center /cover;
display:flex;
justify-content:center;
align-items:center;
a{
    font-size:3rem;
    color:#00686B;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #A6F1FE;
    text-shadow: 0 0 10px #A6F1FE;    
    font-weight:bold;
}
div{
    width:50%;
    height:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background: url(${loadGif}) no-repeat center center fixed;
    background-size:auto auto;
}
@media screen and (max-width:768px){
    width:100%;
    background: url(${background}) no-repeat center top;
    background-size: 100% auto;
    div{       
        justify-content:center;
        align-items:flex-end;
        padding-bottom:30%;
        width:100%;
        height:100%;
        background: url(${loadGif}) no-repeat center bottom fixed;
        background-size:40%;
    }
}
@media screen and (max-width:632px){
    background: url(${background}) no-repeat center contain ;
    div{       
        background-size:50%;
    }
}
@media screen and (max-width:400px){
    background: url(${background}) no-repeat center center contain;
    div{       
        background: url(${loadGif}) no-repeat center center fixed;
        display:flex;
        justify-content:center;
        align-items:center;
        transform:translateY(50px);
        a{
            transform:translateY(50px);
        }
    }
}

`;

export default NotFoundContainer;