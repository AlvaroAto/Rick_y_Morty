import styled from "styled-components";

const IndexContainer = styled.div`
    width:100%;
    form{
        max-width:100%;
        min-height:fit-content;
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
    }

    background: linear-gradient(180deg, #C4C4C4 -1.75%, #8AAEAF 81.66%), #FFFFFF;
    // border: 10px dashed #AAD5E8;
    border-radius: 8px;     

    input{
        background: #00B1B7;
        border: 3px solid #AAD5E8;
        border-radius: 12px;
        padding:3px 5px;
        ::placeholder{            
            font-family: PatrickHand-Regular; 
            color: white;
            font-weight: 600;
            letter-spacing: 1px;
            line-height: 1rem;
        }
    }   
    div{
        &.filter{   
            text-align:center;
            .title{
                color:#efefef;
            }
            .options{
                .row{
                    display:flex;
                    align-items:center;
                    justify-content: center; 
                    label{
                        margin-right:10px;
                    }                    
                }
                
            }
        }
    }
`;

export default IndexContainer;