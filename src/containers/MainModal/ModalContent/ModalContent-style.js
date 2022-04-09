import styled from "styled-components";

const ModalContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    widht:100%;
    height:100%;
    padding-left: 5px; 
    h2{
        margin:0;
        padding:0;
        color:#EFEFEF;
        text-decoration-line: underline;
    }
    div.content{
        width:100%;
        height:100%;
        overflow: auto;        
        text-align:left;
        //barra desplazamiento 
        ::-webkit-scrollbar {
            width:10px;
            height:10px;
        }
        ::-webkit-scrollbar-thumb  {
            height: 4px;
            width: 4px;
            background-color: #A6F1FE;
            border-radius: 6px;                    
        }
        ::-webkit-scrollbar-button {
            display:none;
        }
        ::-webkit-scrollbar-track-piece {
            border-radius: 2px;
            background-color: #A6F1FE;
            background-clip: content-box;
            border-radius: 6px;
            border: solid 4px transparent;
        }
        ::-webkit-scrollbar-track-piece:decrement {
            background: #EFEFEF;
            background-clip: content-box;
            border: solid 4px transparent;
        }
    }
    p{
        margin:auto 0;
        color: #EFEFEF;
        font-size: 18px;
        letter-spacing: 1px;
        line-height:2rem;
    }

`;

export default ModalContentContainer;