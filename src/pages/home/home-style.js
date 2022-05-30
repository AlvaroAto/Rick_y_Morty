import styled from "styled-components";

//assets
import circuit from '../../assets/img/circuit_board.webp';

const IndexContainer = styled.div`
    width:100%;
    
    background-image: url(${circuit});
    background-repeat: no-repeat;
    background-clip: border-box;
    background-position: center;
    background-size: cover;
    border-radius: 0 0 8px 8px;  
    box-shadow:0 4px 5px rgba(166, 241, 254, 0.4);   
    text-align:center;
    
    form{
        max-width:100%;
        min-height:fit-content;
        max-height:100%;
        padding:10px;
        color: #efefef;
        display:flex;    
        align-items:center;          
        justify-content: center;
        gap: 20px;
        flex-wrap:wrap;
        font-family: PatrickHand-Regular; 
        color: white;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 1rem;
        
        @media (max-width:620px){  
            height:100%;          
            display:inline-block;       
            background-size: cover;
            div.filter{
                height:100%;
                padding:10px 0;
            }
        }
    }
    input{
        background-color: #00B1B7;
        border: 3px solid #AAD5E8;
        border-radius: 12px;
        padding:3px 5px;
        font-family: PatrickHand-Regular; 
        color: white;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 1rem;
        ::placeholder{  
            color:white;          
        }
        &#buscar{
            padding: 3px 20px;
            background-color: #0A94CF;
            border: 1px solid #EFEFEF;
            border-radius: 15px;
            cursor:pointer;
            transition: all .4s;
            &:hover{
                background-color:#AAD5E8;
                color: #0A94CF;
                text-shadow:0 0 3px #efefef;
            }
        }
    }   
    div{
        &.filter{   
            text-align:center;
            background-color: rgba(0, 177, 183, 0.7);
            padding:2px 0 10px 0;
            border-radius: 8px;
            .title{
                color:#efefef;                
                text-shadow: 1px 1px #00B1B7;
            }
            .options{
                margin-top:5px;
                .row{
                    display:flex;
                    align-items:center;
                    justify-content: center;                     
                    label{
                        margin-right:10px;
                        text-shadow: 1px 1px #00B1B7;
                    }                    
                }
                
            }
        }
    }

`;

export default IndexContainer;