import styled from "styled-components";

const FooterLogoContainer = styled.div`
    
    max-width:128px;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 5px #A6F1FE;
    border-radius: 20px;
    div{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        img{
            max-width:50px;
        }
        p{
            color:white;
            text-align:center;
        }
    }
`;

export default FooterLogoContainer;