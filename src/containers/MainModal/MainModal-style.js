import styled from "styled-components";

//assets
import fichaPersonajesModal from '../../assets/img/ficha_personajes_modal.png';

const MainModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;    
    overflow:hidden;
    img{
        position: absolute;
        width: 278px;
        height: 276px;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        z-index:0;
        filter: opacity(25%);
        padding:8px 15px 0 0;
    }
    .modal-wrapper{
        display:flex;
        justify-content: flex-start;
        align-items:center;
        flex-direction: column;
        box-sizing:border-box;        
        background-image: url(${fichaPersonajesModal});
        background-repeat: no-repeat;
        background-clip: border-box;
        background-size: 351px 350px;
        text-align: center; 
        width: 351px;
        height: 340px;
        padding-top: 38px;
        padding-left: 32px;
        padding-bottom: 33px;
        padding-right: 50px;
        .topbar{
            z-index:1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width:100%;
            color: white;
            letter-spacing: 2px;
            p{
                text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.5);
            }
            span{
                color: white;
                font-size:2rem;
                text-align: left;
                cursor:pointer;
                border: solid 5px #A6F1FE;
                padding:5px 15px;
                border-radius: 8px;
            }
        }
    }
    .body{
        z-index:1;
        width: 100%;
        height: 193px;        
    }
`;

export default MainModalContainer;