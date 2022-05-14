import styled from "styled-components";
import { keyframes } from "styled-components";


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
        background-image: url("data:image/svg+xml,%3Csvg width='572' height='373' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' enable-background='new 0 0 572 373' version='1.1'%3E%3Cdefs%3E%3ClinearGradient y2='1' x2='1' y1='0.35236' x1='0.32813' id='svg_6'%3E%3Cstop offset='0' stop-color='%2333666C'/%3E%3Cstop offset='1' stop-opacity='0.99609' stop-color='%230acf9e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Crect id='svg_7' height='339' width='522' y='13.5' x='19' stroke='null' fill='url(%23svg_6)'/%3E%3Cimage x='0' y='-1' xlink:href='data:image/png;base64,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 RU5ErkJggg==' height='373' width='572' id='image0'/%3E%3Crect id='svg_5' height='0' width='0' y='170' x='157' opacity='NaN' stroke='null' fill='%2333666C'/%3E%3C/g%3E%3C/svg%3E");
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