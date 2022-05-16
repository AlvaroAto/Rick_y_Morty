import styled from "styled-components";

const FormDiv = styled.div`
    min-height:100vh;        
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;
    width:100%;
    h1{
        text-align:center;
        font-family:GetSchwifty-Regular;
    }
    form{
        display:flex;
        justify-content: center;
        flex-direction:column;
        align-items:center;
        width:100%;
        span{
            font-family:PatrickHandSC-Regular;
            font-weight:bold;
            letter-spacing:1px;
            background-color:#00686B;
            padding: 5px 20px;
            border-radius:8px;
            border:solid 1px #A6F1FE;
            cursor:pointer;            
            color:#efefef;
            transition: all .4s;
            &:hover{
                background-color:#A6F1FE;
                border:solid 5px #00686B;
                padding: 1px 15px;
                color:#00686B;
            }
        }
        label{
            font-family:PatrickHand-Regular;
            font-weight:bold;
            letter-spacing:1px;
            background-color:#00686B;
            padding: 5px 20px;            
            border:solid 3px #A6F1FE;
            border-radius:8px;
            cursor:pointer;            
            color:#A6F1FE;
            transition: all .4s;            
        }
        input,textarea{
            font-family:PatrickHand-Regular;
            font-weight:bold;
            letter-spacing:1px;
            background-color:#00686B;
            padding: 5px 20px;        
            border:solid 3px #A6F1FE;
            border-radius:8px;        
            color:#efefef;
            transition: all .4s; 
            ::placeholder{
                color:#efefef;
            }
        }
    }
`;

export default FormDiv;