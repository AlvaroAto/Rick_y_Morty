import styled from "styled-components";
import { keyframes } from "styled-components";

//assets
import fichaPersonajes from '../../assets/img/ficha_personajes.png';

// const type = keyframes`
//     0% {
//         transform: translate3d(0, 0, 0);
//     }
//     100% {
//         transform: translate3d(-50%, 0, 0);
//     }
// `;

// const marquee = keyframes`
//     from {
//         left: 0;
//     }
//     to{
//         left:-100%;
//     }
// `;

// const typing = keyframes`
//     from {
//         width: 0;
//     }
// `;

// const blink = keyframes`
//     50% {
//         border-color: transparent;
//     }
// `;

const fb1 = keyframes`    
    0%{
        stroke-dashoffset: 1;
    }
    33%{
        stroke-dashoffset: 0;
    }
    66%{
        d: path("M83 12.5s-9.525.59-16.5 3c-6.182 2.137-9.825 6.06-11 7-2.5 2-2 2.5-5.5 1.5s-6.5 0-6.5 0L31 27.5 28 23s-.5-6.076.5-8c1.251-2.407 5.5-2 5.5-2h7s3.222.5 5-1.5 1.5-3 1.5-3V5L42 1H5.5L1 5v6.5");
        stroke-dashoffset:1;
    }
    100%{
        d: path("M83 12.5s-9.525.59-16.5 3c-6.182 2.137-9.825 6.06-11 7-2.5 2-2 2.5-5.5 1.5s-6.5 0-6.5 0L31 27.5 28 23s-.5-6.076.5-8c1.251-2.407 5.5-2 5.5-2h7s3.222.5 5-1.5 1.5-3 1.5-3V5L42 1H5.5L1 5v6.5");
        stroke-dashoffset:0;
    }
`;

const fb2 = keyframes`
    0% {
        opacity:0.5;
        width: 0px;
        height: 0px;
        border: solid 2px #A6F1FE;
    }
    100% {
        opacity:1;
        width: 6px;
        height: 6px;
        border:none;
    }
`;
const fb3 = keyframes`
    0% {
        opacity:0;
        width: 0px;
        height: 0px;
        margin-right:0;
        border: solid 3px #A6F1FE;
        border-radius:50%;
        background-color:transparent;
    }
    100% {
        opacity:1;
        margin-right:10px;
    }
    
`;

const fb4 = keyframes`
    0% {
        opacity:0;
        width: 0px;
        height: 0px;
        margin-left:0;
    }
    100% {
        opacity:1;
    }
    
`;
const fb5 = keyframes`
    from{ 
        transform: rotate(0deg);
    }
    to{            
        transform: rotate(360deg);
    }
`;

// const animationDuration = function(){
    
//     let time = Number(`0.${setInterval(Math.random(),1000/60)}`);
//     if(time< 0.5){
//         time=0.5;
//     }
//     console.log(time);
//     return time;
// }

const CharacterItemContainer = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    padding: 10px;

    .textBoxTitle{
        position: relative;
        top: 49px;
        left:-27px;
        display: flex;
        flex-direction: column;
        justify-content: center;     
        width: 185px;
        height: 35px;
        text-align:left;       
        background: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='193' height='36' fill='none' viewBox='0 0 193 36'%3E%3Cpath stroke='%23A6F1FE' stroke-width='2' d='M185 1H4.5l-1 1L1 5v23.5l7 6h177l7-5v-22L185 1Z'/%3E%3C/svg%3E%0A") no-repeat center /contain;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;           
        
        strong{
            padding:5px 5px 5px 10px;    
            
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            
            font-family: AlienScript-Regular;
            font-size: 18px;    
            font-weight: bolder;   
            letter-spacing: 1px;
            text-transform: uppercase;
            color: white;
            
            // width:300px;
            // animation: typing 2s step(12), blink .5s infinite step-end altenate;

            // animation-play-state: paused;
            
            // animation: $/{type} 4s steps(60,end);
            transition: all .5s;
            
            &:hover{            
                position: relative;
                // transform: translate3d(0, 0, 0);                
                // width: fit-content;
                // animation: $/{marquee} 12s linear infinite;
                // animation-play-state: play;
                

                font-family:PatrickHand-Regular;
                text-transform: capitalize;
                background-color:transparent;
            }
        }
        
    }

    div.card{  
        background-image: url(${fichaPersonajes});
        background-repeat: no-repeat;
        background-clip: border-box;
        background-size: 300px 250px;
        text-align: center;
        display: flex;
        justify-content:space-around;
        align-items:flex-start;    
        width: 250px;
        height: 176px;
        padding-top: 48px;
        padding-left: 20px;
        padding-bottom: 25px;
        padding-right: 30px;
       
        div.verticalText{
            display: flex;
            flex-direction: column;
            writing-mode: vertical-lr;
            text-orientation: upright;
            font-family: AlienScript-Regular;
            text-transform: uppercase;
            color:#efefef;
            font-weight: bold;
            font-size:0.8rem;
            background: #00B1B8;
            border: 1px solid #EFEFEF;
            box-sizing: border-box;
            height: 150px;
            max-width: 22px;
            overflow: hidden;
            line-height: 22px;
            margin-top: 10px;
            p{
                height:100%;
                width:100%;
                margin: 0;
                padding: 0;
                line-height: 22px;
                &:hover{
                    font-family:Narcotix;
                }
            }
        }

        div.imageBox{
            max-width: 120px;
            height: fit-content;
            
            div.image{         
                -webkit-clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
                clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
                width: 100px;
                height: 120px;
                margin-top: 10px;
                background-color: #00B1B8;
                border: solid 5px #00B1B8;
                img{
                    -webkit-clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
                    clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
                    width: 100px;
                    height: 120px;
                    overflow:hidden;
                }
            }
            div.falseButtons{
                position:relative;
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 35px;
                padding-top: 5px;
                svg{
                    path{
                        stroke-dasharray: 1;
                        stroke-dashoffset: 1;
                        animation: ${fb1} 16s linear infinite alternate;
                    }
                }
                div:nth-child(2){
                    position:absolute;
                    left: 30px;
                    top: 8px;
                    background-color:#A6F1FE;
                    border-radius:50%;
                    animation: ${fb2} 3s linear 2s infinite alternate;
                }
                div:nth-child(3){
                    position:absolute;
                    left: 10px;
                    width: 10px;
                    height: 10px;
                    background-color:#A6F1FE;
                    border-radius:50%;
                    animation: ${fb3} 1.5s linear 1s infinite alternate;
                }
                div:nth-child(4){
                    position:absolute;
                    right:5px;
                    width: 5px;
                    height: 5px;
                    border: solid 3px #A6F1FE;
                    border-radius:50%;
                    background-color:transparent;
                    animation: ${fb4} 1.5s linear 4s infinite alternate;
                }
                div:nth-child(5){
                    position:absolute;
                    bottom: 5px;
                    right: 40px;                       
                    width: 5px;
                    height: 5px;   
                    border-bottom: solid 2px rgba(166,241,254,0.5);  
                    border-left: solid 2px #A6F1FE;
                    border-radius:50%;
                    animation: ${fb5} 3s linear infinite;
                }
                
            }
        }
        
        div.wrapItemText{
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            max-width:100px;
            height:100%;    

            .textBoxBody{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                max-width: 100px;
                max-height: 100%;
                margin-top: 10px;
                overflow-x: hidden;
                text-overflow: ellipsis;
                background: #00686B;
                border: 1px solid #EFEFEF;
                box-sizing: border-box;

                //barra desplazamiento 
                ::-webkit-scrollbar {
                    width: 13px;    
                }
                ::-webkit-scrollbar-thumb  {
                    background-color: #00B1B8;
                    border-radius: 6px;    
                    border: 0.2rem solid rgba(0, 0, 0, 0);  
                    background-clip: padding-box; 
                  }
                ::-webkit-scrollbar-button {
                    display:none;
                }
                ::-webkit-scrollbar-track-piece {
                    border-radius: 2px;
                    background-color: #00B1B8;
                    background-clip: content-box;
                    border-radius: 6px;
                    border: solid 6px transparent;
                }
                ::-webkit-scrollbar-track-piece:decrement {
                    background: #EFEFEF;
                    background-clip: content-box;
                    border: solid 6px transparent;
                }


                p{
                    max-width: 90%; 
                    height: 100px;  
                    margin: auto;
                    padding: 5px 0;
                    font-family: Alien;
                    font-size: 15px;    
                    font-weight: regular;
                    text-align: center;   
                    letter-spacing: 1px;
                    color: white;
                    transition: font-variation-settings 0.3s ease;
                    overflow-wrap: break-word;
                    &:hover{
                        font-family:Narcotix;
                    }
                }    
                
            }            
            div.buttonSeeMore{
                display: flex;
                justify-content: center;
                align-items: center;
                width: fit-content;
                margin: auto;
                padding: 3px 20px;
                background-color: #0A94CF;
                border: 1px solid #EFEFEF;
                border-radius: 15px;
                align-self: stretch;
                cursor:pointer;
                transition: all .4s;
                &:hover{
                    background-color:#AAD5E8;
                    span, a{    
                        color: #0A94CF;
                        text-shadow:0 0 3px #efefef;
                    }
                }
                span,a{
                    text-align: center;
                    font-family: PatrickHandSC-Regular; 
                    color: white;
                    font-weight: 600;
                    letter-spacing: 1px;
                    line-height: 1rem;
                    padding-bottom: 3px;                    
                }        
            }
        }
    }
    
    
`;

export default CharacterItemContainer;